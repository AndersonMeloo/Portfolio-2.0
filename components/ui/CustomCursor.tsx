'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
    
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const addHover = () => setIsHovering(true);
        const removeHover = () => setIsHovering(false);

        window.addEventListener('mousemove', move);

        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });

        return () => {
            window.removeEventListener('mousemove', move);
            document.querySelectorAll('a, button').forEach(el => {
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
            });
        };
    }, []);

    return (
        <div
            className={`
        pointer-events-none
        fixed
        z-[9999]
        rounded-full
        transition-all
        duration-200
        ease-out
        border
        border-white
        ${isHovering ? 'w-7 h-7' : 'w-3 h-3'}
      `}
            style={{
                left: position.x,
                top: position.y,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 4px 2px rgba(255,255,255,0.8)',
            }}
        />
    );
}
