function HomeworksCard() {
    const cardDate = new Date().toLocaleDateString(); // 获取当前日期
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>今日作业</h1>
      <ul>
        <li>作业 1</li>
        <li>写3000道数学题</li>
        <li>{cardDate}</li>
      </ul>
    </div>
  );
}

export default HomeworksCard;