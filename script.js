

let points = 100;
let niji = false;
function pointreload(){
  // const outputElement = document.getElementById("output");
  
  // outputElement.innerHTML = points;

}

window.onload = function() {
  pointreload()
};

function selecta(choice) {
  document.getElementById('options-container').classList.add('hidden');
  document.getElementById('answer-container').classList.remove('hidden');
  if(choice == 'Anoa')
    {
      points -= 10;
    }
  if(choice == 'Anob')
    {
      points -= 5;
    }
    pointreload()

  // 次の質問に切り替える
  setTimeout(() => {
    document.getElementById('question-text').textContent = 'マルクスの相方は？';
    document.getElementById('options-container').innerHTML = `
      <button onclick="selectb('Bnoa')">エンゼルス</button>
      <button onclick="selectb('Bnob')">エンゲルス</button>
      <button onclick="selectb('Bnoc')">ロマノフ</button>
    `;
    document.getElementById('options-container').classList.remove('hidden');
  }); 
}

function selectb(choice) {
  document.getElementById('options-container').classList.add('hidden');
  document.getElementById('answer-container').classList.remove('hidden');
  if(choice == 'Bnoa')
    {
      points -= 100;
    }
  if(choice == 'Bnoc')
    {
      points -= 5;
    }
    pointreload()

  // 次の質問に切り替える
  setTimeout(() => {
    document.getElementById('question-text').textContent = '何主義？';
    document.getElementById('options-container').innerHTML = `
      <button onclick="selectc('Cnoa')">インターナショナル</button>
      <button onclick="selectc('Cnob')">ファシズム</button>
      <button onclick="selectc('Cnoc')">資本主義</button>
      <button onclick="selectc('Cnod')">分らない</button>
    `;
    document.getElementById('options-container').classList.remove('hidden');
  }); 
}
  
function selectc(choice) {
  document.getElementById('options-container').classList.add('hidden');
  document.getElementById('answer-container').classList.remove('hidden');
  if(choice == 'Cnob')
    {
      points -= 20;
    }
  if(choice == 'Cnoc')
    {
      points -= 100000000000000000000000000000;
    }
  if(choice == 'Cnod')
    {
      points -= 100;
    }
    pointreload()

  // 次の質問に切り替える
  setTimeout(() => {
    document.getElementById('question-text').textContent = '軍事力の存在価値は？';
    document.getElementById('options-container').innerHTML = `
      <button onclick="selectd('Dnoa')">大有り</button>
      <button onclick="selectd('Dnob')">無し</button>
      <button onclick="selectd('Dnoc')">あってもなくても自分には関係ない</button>
    `;
    document.getElementById('options-container').classList.remove('hidden');
  }); 
}
  function selectd(choice) {
    document.getElementById('options-container').classList.add('hidden');
    document.getElementById('answer-container').classList.remove('hidden');
    if(choice == 'Dnob')
      {
        points -= 20;
      }
    if(choice == 'Dnoc')
      {
        points -= 50;
      }
      pointreload()
  
    // 次の質問に切り替える
    setTimeout(() => {
      document.getElementById('question-text').textContent = 'ウラジミールの意味とは？';
      document.getElementById('options-container').innerHTML = `
        <button onclick="selecte('Enoa')">革命をする者</button>
        <button onclick="selecte('Enob')">世界征服をする者</button>
        <button onclick="selecte('Enoc')">同志1</button>
      `;
      document.getElementById('options-container').classList.remove('hidden');
    }); 
}
function selecte(choice) {
  document.getElementById('options-container').classList.add('hidden');
  document.getElementById('answer-container').classList.remove('hidden');
  if(choice == 'Enoa'){points -= 2;}
  if(choice == 'Enoc'){points -= 1;}
    pointreload()

  // 次の質問に切り替える
  setTimeout(() => {
    document.getElementById('question-text').textContent = '理想とは？';
    document.getElementById('options-container').innerHTML = `
      <button onclick="selectf('Fnoa')">現実逃避だ</button>
      <button onclick="selectf('Fnob')">希望だ</button>
      <button onclick="selectf('Fnoc')">叶わぬ夢</button>
    `;
    document.getElementById('options-container').classList.remove('hidden');
  }); 
}
  function selectf(choice) {
    document.getElementById('options-container').classList.add('hidden');
    document.getElementById('answer-container').classList.remove('hidden');
    if(choice == 'Fnoa'){points -= 30;}
    if(choice == 'Fnoc'){points -= 40;}
      pointreload()
  
    // 次の質問に切り替える
    setTimeout(() => {
      document.getElementById('question-text').textContent = '大粛清の感想';
      document.getElementById('options-container').innerHTML = `
      <button onclick="selectg('Gnoe')">あれは悲劇だ</button>
      <button onclick="selectg('Gnof')">スターリンにも同情する余地はある</button>
      <button onclick="selectg('Gnog')">俺には関係ない</button>
      `;
      document.getElementById('options-container').classList.remove('hidden');
    }); 
}
function selectg(choice) {
  document.getElementById('options-container').classList.add('hidden');
  document.getElementById('answer-container').classList.remove('hidden');
  if(choice == 'Gnoe'){points -= 20;}
  if(choice == 'Gnof'){points -= 10;}
    pointreload()

    // points = 100;
    document.body.style.backgroundColor = "white";
    setTimeout(() => {
      document.getElementById('question-text').textContent = '終点';
      document.getElementById('options-container').innerHTML = `あなたの点数は${points}でした`;
      document.getElementById('options-container').classList.remove('hidden');
      if(points == 100)
        {
          
          setTimeout(() => {document.body.style.backgroundColor = "red";} ,100)
          setTimeout(() => {document.body.style.backgroundColor = "white";} ,200)
          setTimeout(() => {document.body.style.backgroundColor = "red";} ,300)
          var questionContainer = document.querySelector(".question-container");
          questionContainer.style.backgroundColor = "yellow";
          document.getElementById('question-report').innerHTML = `マルクス レーニン級`;
        }
      if(points < 100 &&points > 80)
        {
          setTimeout(() => {document.body.style.backgroundColor = "red";} ,100)
          setTimeout(() => {document.body.style.backgroundColor = "white";} ,200)
          setTimeout(() => {document.body.style.backgroundColor = "red";} ,300)
          var questionContainer = document.querySelector(".question-container");
          questionContainer.style.backgroundColor = "orange";
          document.getElementById('question-report').innerHTML = `マルクス レーニンの手下のペットくらい`;
        }
        if(points < 81 &&points > 60)
          {
            setTimeout(() => {document.body.style.backgroundColor = "red";} ,100)
            setTimeout(() => {document.body.style.backgroundColor = "white";} ,200)
            setTimeout(() => {document.body.style.backgroundColor = "red";} ,300)
            var questionContainer = document.querySelector(".question-container");
            questionContainer.style.backgroundColor = "blue";
            document.getElementById('question-report').innerHTML = `スターリン級`;
          }
      if(points < 61 && points > 40)
        {
          setTimeout(() => {document.body.style.backgroundColor = "red";} ,100)
          setTimeout(() => {document.body.style.backgroundColor = "white";} ,200)
          setTimeout(() => {document.body.style.backgroundColor = "red";} ,300)
          var questionContainer = document.querySelector(".question-container");
          questionContainer.style.backgroundColor = "yellow";
          document.getElementById('question-report').innerHTML = `まぁまぁやるやん`;
        }
      if(points < 41 && points > 29)
        {
          setTimeout(() => {document.body.style.backgroundColor = "pink";} ,100)
          setTimeout(() => {document.body.style.backgroundColor = "white";} ,200)
          setTimeout(() => {document.body.style.backgroundColor = "pink";} ,300)
          var questionContainer = document.querySelector(".question-container");
          questionContainer.style.backgroundColor = "orange";
          document.getElementById('question-report').innerHTML = `ゴルバチョフ級`;
        }
        if(points < 30 && points > 0)
          {
            setTimeout(() => {document.body.style.backgroundColor = "blue";} ,100)
            setTimeout(() => {document.body.style.backgroundColor = "white";} ,200)
            setTimeout(() => {document.body.style.backgroundColor = "blue";} ,300)
            var questionContainer = document.querySelector(".question-container");
            questionContainer.style.backgroundColor = "green";
            document.getElementById('question-report').innerHTML = `伸びしろしかない`;
          }
      if(points < 1)
        {
          document.getElementById('question-report').innerHTML = `〇ね`;
          niji = true;
        }
    }, 100); 

    document.getElementById('options-container').classList.remove('hidden');
  }; 

  
  function changeBackground() {
    if(niji)
      {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff', '#ffff00']; // 変更したい背景色の配列
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.color = randomColor1;
    const randomColors = colors[Math.floor(Math.random() * colors.length)];
    var questionContainer = document.querySelector(".question-container");
    questionContainer.style.backgroundColor = randomColors;
  }
  }

  setInterval(changeBackground, 100); // 5000ミリ秒ごと（5秒ごと）に背景色を変更
