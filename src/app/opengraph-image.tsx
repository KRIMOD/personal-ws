import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#111010',
          color: '#f5f5f5',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          padding: '90px',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ color: '#a3a3a3', fontSize: 30 }}>
            {site.url.hostname}
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, maxWidth: 920 }}>
            {site.name}
          </div>
          <div style={{ color: '#d4d4d4', fontSize: 34, maxWidth: 900 }}>
            {site.description}
          </div>
        </div>
      </div>
    ),
    size
  );
}
