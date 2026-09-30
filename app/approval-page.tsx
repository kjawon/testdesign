import { CalendarDays, ChevronDown, CircleHelp, RotateCcw, Search } from 'lucide-react';
import { useState } from 'react';

const statuses = ['전체', '품의 결재 전', '계약 전', '원인행위 가능', '원인행위 완료'];
const columns = ['품의번호', '품의일자', '조직', '사업', '과목', '적요', '유형', '품의금액', '진행', '다음 할 일', '다시 올리기'];
function SelectField({label,value,className = ''}:{label:string;value:string;className?:string}) {
  return <label className={`approval-field ${className}`}><span>{label}</span><div className="approval-select"><select aria-label={label} defaultValue={value}><option>{value}</option></select><ChevronDown size={13} aria-hidden="true"/></div></label>;
}
function DateField({label}:{label:string}) {
  return <div className="approval-date"><input aria-label={label} defaultValue="2026-09-30" readOnly/><CalendarDays size={16} aria-hidden="true"/></div>;
}
export default function ApprovalPage() {
  const [status,setStatus] = useState('전체');
  return <main className="approval-page">
    <form className="approval-filters" onSubmit={event=>event.preventDefault()}>
      <div className="approval-filter-fields">
        <SelectField label="회계연도" value="2026년" className="year-field"/>
        <SelectField label="조직" value="성과평가팀" className="organization-field"/>
        <SelectField label="사업" value="경영운영 행정운영" className="business-field"/>
        <SelectField label="과목" value="전체" className="subject-field"/>
        <label className="approval-field description-field"><span>적요</span><input aria-label="적요"/></label>
        <SelectField label="품의유형" value="전체" className="type-field"/>
        <SelectField label="삭제여부" value="아니오" className="deleted-field"/>
        <div className="approval-field date-field"><span>품의일자</span><div className="approval-date-range"><DateField label="품의 시작일"/><DateField label="품의 종료일"/></div></div>
      </div>
      <div className="approval-filter-actions"><button type="reset"><RotateCcw size={14}/>초기화</button><button type="submit" className="approval-search"><Search size={14}/>조회</button></div>
    </form>
    <section className="approval-results" aria-labelledby="approval-title">
      <div className="approval-list-toolbar"><h2 id="approval-title">품의 목록</h2><span className="approval-count">총 <b>0</b>건</span><div className="approval-status-tabs" role="group" aria-label="품의 진행 상태">{statuses.map(item=><button key={item} aria-pressed={status===item} className={status===item?'selected':''} onClick={()=>setStatus(item)}>{item}</button>)}</div><button className="approval-new">신규</button></div>
      <div className="approval-table"><table aria-label="품의 목록"><colgroup>{[4.6,5.9,6.1,7.8,24,22,4,6.3,5,6.6,7.7].map((width,i)=><col key={i} style={{width:`${width}%`}}/>)}</colgroup><thead><tr>{columns.map(column=><th scope="col" key={column}><span>{column}{(column==='진행'||column==='다음 할 일')&&<CircleHelp size={14} aria-hidden="true"/>}</span></th>)}</tr></thead><tbody><tr><td colSpan={11}><div className="approval-empty">조회된 자료가 없습니다</div></td></tr></tbody></table></div>
      <div className="approval-bottom-space"/>
    </section>
  </main>;
}
