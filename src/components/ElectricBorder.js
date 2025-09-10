import { useEffect, useId, useLayoutEffect, useRef } from 'react';

import './ElectricBorder.css';

const ElectricBorder = ({ children, color = '#5227FF', speed = 1, chaos = 1, thickness = 2, className, style }) => {
  const rawId = useId().replace(/[:]/g, '');
  const filterId = `turbulent-displace-${rawId}`;
  const svgRef = useRef(null);
  const rootRef = useRef(null);
  const strokeRef = useRef(null);
  const rafIdRef = useRef(0);
  const lastSizeRef = useRef({ w: 0, h: 0 });
  const visibilityRef = useRef({ inViewport: true, docVisible: true, visible: true });

  const isLowPower = () => {
    const cores = typeof navigator !== 'undefined' && navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 8;
    const mem = typeof navigator !== 'undefined' && navigator.deviceMemory ? navigator.deviceMemory : 8;
    const isMobile = typeof navigator !== 'undefined' && /mobi|android|iphone|ipad|ipod/i.test(navigator.userAgent);
    return cores <= 4 || mem <= 4 || isMobile;
  };

  const prefersReduced = () => {
    try {
      return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      return false;
    }
  };

  const scheduleUpdate = () => {
    if (rafIdRef.current) return;
    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = 0;
      updateAnim();
    });
  };

  const updateAnim = () => {
    const svg = svgRef.current;
    const host = rootRef.current;
    if (!svg || !host) return;
    if (visibilityRef.current && !visibilityRef.current.visible) return;
    if (strokeRef.current) {
      strokeRef.current.style.filter = `url(#${filterId})`;
    }

    const width = Math.max(1, Math.round(host.clientWidth || host.getBoundingClientRect().width || 0));
    const height = Math.max(1, Math.round(host.clientHeight || host.getBoundingClientRect().height || 0));
    if (lastSizeRef.current.w === width && lastSizeRef.current.h === height) {
      // size unchanged, but still update timing/quality below
    } else {
      lastSizeRef.current = { w: width, h: height };
    }

    const dyAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dy"]'));
    if (dyAnims.length >= 2) {
      dyAnims[0].setAttribute('values', `${height}; 0`);
      dyAnims[1].setAttribute('values', `0; -${height}`);
    }

    const dxAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dx"]'));
    if (dxAnims.length >= 2) {
      dxAnims[0].setAttribute('values', `${width}; 0`);
      dxAnims[1].setAttribute('values', `0; -${width}`);
    }

    const baseDur = 6;
    const reduced = prefersReduced();
    const low = isLowPower();
    const speedFactor = reduced ? Math.max(0.5, (speed || 1) * 0.6) : speed || 1;
    const dur = Math.max(0.001, baseDur / speedFactor);
    [...dyAnims, ...dxAnims].forEach(a => a.setAttribute('dur', `${dur}s`));

    const disp = svg.querySelector('feDisplacementMap');
    if (disp) {
      const chaosScale = (chaos || 1) * (low ? 0.7 : 1) * (reduced ? 0.4 : 1);
      disp.setAttribute('scale', String(30 * chaosScale));
    }

    const turbules = Array.from(svg.querySelectorAll('feTurbulence'));
    const targetOctaves = reduced ? 3 : low ? 6 : 10;
    turbules.forEach(t => {
      t.setAttribute('numOctaves', String(targetOctaves));
      const bf = reduced ? 0.01 : low ? 0.015 : 0.02;
      t.setAttribute('baseFrequency', String(bf));
    });

    const filterEl = svg.querySelector(`#${CSS.escape(filterId)}`);
    if (filterEl) {
      if (low || reduced) {
        filterEl.setAttribute('x', '-50%');
        filterEl.setAttribute('y', '-50%');
        filterEl.setAttribute('width', '200%');
        filterEl.setAttribute('height', '200%');
      } else {
        filterEl.setAttribute('x', '-200%');
        filterEl.setAttribute('y', '-200%');
        filterEl.setAttribute('width', '500%');
        filterEl.setAttribute('height', '500%');
      }
    }

    requestAnimationFrame(() => {
      [...dyAnims, ...dxAnims].forEach(a => {
        if (typeof a.beginElement === 'function') {
          try {
            a.beginElement();
          } catch {
            console.warn('ElectricBorder: beginElement failed, this may be due to a browser limitation.');
          }
        }
      });
    });
  };

  useEffect(() => {
    updateAnim();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, chaos]);

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const host = rootRef.current;
    const ro = new ResizeObserver(() => scheduleUpdate());
    ro.observe(host);
    const updateVisibility = () => {
      const visible = visibilityRef.current.docVisible && visibilityRef.current.inViewport;
      visibilityRef.current.visible = visible;
      scheduleUpdate();
    };
    const onVis = () => {
      visibilityRef.current.docVisible = document.visibilityState !== 'hidden';
      updateVisibility();
    };
    const io = new IntersectionObserver(entries => {
      const entry = entries[0];
      visibilityRef.current.inViewport = !!entry?.isIntersecting;
      updateVisibility();
    }, { threshold: 0 });
    io.observe(host);
    document.addEventListener('visibilitychange', onVis);
    updateAnim();
    return () => {
      ro.disconnect();
      try { io.disconnect(); } catch {}
      document.removeEventListener('visibilitychange', onVis);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const vars = {
    '--electric-border-color': color,
    '--eb-border-width': `${thickness}px`
  };

  return (
    <div ref={rootRef} className={`electric-border ${className ?? ''}`} style={{ ...vars, ...style }}>
      <svg ref={svgRef} className="eb-svg" aria-hidden focusable="false">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
              <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
              <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
            </feOffset>

            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="combinedNoise"
              scale="30"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      <div className="eb-layers">
        <div ref={strokeRef} className="eb-stroke" />
        <div className="eb-glow-1" />
        <div className="eb-glow-2" />
        <div className="eb-background-glow" />
      </div>

      <div className="eb-content">{children}</div>
    </div>
  );
};

export default ElectricBorder;
