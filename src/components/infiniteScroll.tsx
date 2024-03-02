import { useRef, useEffect,ReactNode} from 'react';
import * as React from 'react';


interface InfiniteScrollProps {
    onScrollEnd: () => void;
    children?: ReactNode;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ children, onScrollEnd }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = () => {
            if (container && container.scrollTop + container.clientHeight >= container.scrollHeight) {
                onScrollEnd();
            }
        };

        container?.addEventListener('scroll', handleScroll);

        return () => {
            container?.removeEventListener('scroll', handleScroll);
        };
    }, [onScrollEnd]);

    return (
        <div ref={containerRef} style={{ overflow: 'auto', height: '400px' }}>
            {children}
        </div>
    );
};

export { InfiniteScroll };