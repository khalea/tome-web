'use client';

import { useCallback, useState } from 'react';

export default function Input() {
  const styles = {
    container:
      'absolute bottom-12 flex flex-row self-center justify-between bg-slate-200 rounded-md p-4 w-3/4 max-h-[128px] z-100',
    input:
      'bg-transparent basis-[97%] min-h-8 content-start max-h-[100px] overflow-auto',

    icon: 'fill-current text-slate-500 h-6 z-40 self-end',
  };

  return (
    <div className={styles.container}>
      <textarea
        rows={2}
        className={styles.input}
        placeholder="Type a message"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={styles.icon}
      >
        <path
          d="M21.707 2.293a1 1 0 0 0-1.069-.225l-18 7a1 1 0 0 0 .145 1.909l8.379 1.861 1.862 8.379a1 1 0 0 0 .9.78L14 22a1 1 0 0 0 .932-.638l7-18a1 1 0 0 0-.225-1.069zm-7.445 15.275L13.1 12.319l2.112-2.112a1 1 0 0 0-1.414-1.414L11.681 10.9 6.432 9.738l12.812-4.982z"
          data-name="Share"
        />
      </svg>
    </div>
  );
}
