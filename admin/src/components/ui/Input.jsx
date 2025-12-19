import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Input({ className, ...props }) {
    return (
        <input
            className={twMerge(
                "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 outline-none placeholder:text-slate-400",
                className
            )}
            {...props}
        />
    );
}
