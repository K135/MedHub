import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Card({ className, children, ...props }) {
    return (
        <div
            className={twMerge(
                "bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-lg rounded-2xl p-6",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
