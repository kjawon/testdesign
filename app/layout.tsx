import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'AI 재정정보시스템 | 의왕도시공사',description:'의왕도시공사 AI 재정정보시스템 대시보드 화면'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ko"><body>{children}</body></html>}
