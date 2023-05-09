import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Dominic Toretto is back!!", "Family is Everything")}
      {newsArticle("Stephen Strange said...?", "Civil war is about to begin")}
      {newsArticle("Move Forward Party", "กาก้าวไกล ประเทศไทย ไม่เหมือนเดิม...ก้าวไกลเบอร์ 31")}
      {newsArticle("ลุงต่อลาออก!!!!", "ล่าสุดพรรครวมไทยสร้างชาติ ยอมจำนน หันเข้าหาประชาธิปไตย ย้ำ ต้องทำงานกับคนรุ่นใหม่ ให้ประเทศไทยไม่เหมือนเดิม")}

    </div>
  )
}

export default Widgets
