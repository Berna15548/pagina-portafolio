import React, { useState, type MouseEvent } from 'react';
import '../../App.scss'

/**
 * Componente que renderiza el punto negro estático.
 */
const PointerCircle: React.FC<{ x: number; y: number; isVisible: boolean }> = ({ x, y, isVisible }) => {
    // Si no está visible, no se renderiza
    if (!isVisible) return null;

    return (
        <div
            className="custom-pointer-circle"
            style={{
                left: x,
                top: y,
            }}
        />
    );
};

interface CustomPointerWrapperProps {
    children: React.ReactNode;
}

const CustomPointerWrapper: React.FC<CustomPointerWrapperProps> = ({ children }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            // X e Y relativas al contenedor
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <div
            className="custom-pointer-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{
                position: 'relative',
                // Oculta el cursor nativo del sistema
                cursor: isHovering ? 'none' : 'default',
            }}
        >
            {children}

            <PointerCircle
                x={mousePos.x}
                y={mousePos.y}
                isVisible={isHovering}
            />
        </div>
    );
};

export default CustomPointerWrapper;