const quotation = document.getElementById("about__quoate");
const author = document.getElementById("about__author");

const quotes = [{
        quotation: "실패란 넘어지는 것이 아니라, 넘어진 자리에 머무는 것이다",

        author: "도서 '프린세스, 라 브라바!' 중에서",
    },
    {
        quotation: `상어는 물고기중 유일하게 부레가 없다

        부레 없는 물고기는 물속에서 생존이 불가능하다
        
        행동이 매우 불편하고, 조금만 바다 속에 머물러 있어도
        
        바닥으로 가라앉아 죽고 만다
        
        상어는 태어난 순간부터 죽을 때까지
        
        끊임없이 몸을 움직여야 했다
        
        힘겨운 노력이 쌓여 상어는 바다의 절대제왕으로 거듭났다
        
        `,

        author: "쑤린, 도서 <유대인 생각공부> 중에서",
    },
    {
        quotation: `같은 실수를 두려워하되

        새로운 실수를 두려워하지 마라
        
        실수는 곧 경험이다
        
        `,

        author: "도서 <어떤 하루> 중에서",
    },
    {
        quotation: `열심히 노력하다가 갑자기 나태해지고,

        잘 참았다가 조급해지고,
        
        희망에 부풀었다가 절망에 빠지는 일을
        
        또 다시 반복하고 있다
        
        그래도 계속해서 노력하면 수채화를
        
        더 잘 이해할 수 있겠지
        
        그게 쉬운 일이었다면,
        
        그 속에서 아무런 즐거움도 얻을 수 없었을 것이다
        
        그러니 계속해서 그림을 그려야 겠다`,

        author: "빈센트 반 고흐",
    },
    {
        quotation: `성공하기 위해

        지녀야 할 자질이 있는데
        
        이는 명확한 목표,
        
        목표에 대한 지식,
        
        성취하고 자 하는 불타는 열망이다`,

        author: "나폴레옹 힐",
    },
    {
        quotation: `모든 젊은이는 큰 꿈과 희망을 품고 있어야 한다

        그런데 모든 위대한 일은 한 걸음 한 걸음
        
        서두르지 않는 착실한 노력에서 비롯된다
        
        꾸준한 노력이 함께하지 않는 꿈은
        
        몽상에 불과하다
        
        꿈에는 지름길이 없다
        
        처음부터 끝까지 발을 움직여
        
        스스로 나아가는 수밖에 없다`,

        author: "이나모리 가즈오, 교세라 회장",
    },
    {
        quotation: `모든 동물은 자신에게 필요하고

        또 바라는 부분이 진화되어 왔다.
        
        말은 빨리 달리고 싶어해서 빨라졌다
        
        새들도 날고 싶어 했기 때문에 날 수 있게 되었다고 한다
        
        오리는 헤엄치고 싶어 했기 때문에 물갈퀴를 갖게 되었다
        
        이처럼 모든 것들은 바라는대로 이루어진다`,

        author: "앨버트하버드, <인생의 서른 가지 질문에 대한해다> 중에서",
    },
    {
        quotation: `배움은 의무도 생존도 아니다.`,

        author: "에드워즈 데밍",
    },
    {
        quotation: `우리 모두 할 수 있는 일을 해낸다면 우리 자신이 가장 놀라게 될 것이다. `,

        author: "토마스 에디슨",
    },
    {
        quotation: `엉터리로 배운 사람은 아무 것도 모르는 사람보다 더 어리석다. `,

        author: "벤자민 프랭클린",
    },
    {
        quotation: `아는 것이 힘이다.`,

        author: "베이컨",
    },
    {
        quotation: `만난 사람 모두에게서 무언가를 배울수있는 사람이 세상에서 제일 현명하다.`,

        author: "탈무드",
    },
    {
        quotation: `천재는 99%의 노력과 1%의 영감으로 이루어진다. `,

        author: "에디슨",
    },
    {
        quotation: `공부 잘한 사람이 사회에서 성공하는 것은 아니다. 배운 것을 응용할 줄 알아야 한다.`,

        author: "손자병법",
    },
    {
        quotation: `재능이 있거든 가능한 모든 방법으로 사용하라 쌓아두지 마라. 
        구두쇠처럼 아껴 쓰지 마라 파산하려는 백만장자처럼 아낌없이 써라!`,

        author: "브렌단 프랜시스",
    },
    {
        quotation: `그건 할 수 없어"라는 말을 들을 때마다 나는 성공이 가까웠음을 안다. `,

        author: "마이클 플래틀리",
    },
    {
        quotation: `공부벌레들에게 잘 해주십시오. 나중에 그 사람 밑에서 일하게 될 수도 있습니다.`,

        author: "빌 게이츠",
    },
    {
        quotation: `배우고 때로 익하면 또한 기쁘지 아니한가.`,

        author: "공자",
    },
    {
        quotation: `교육이 신사를 만들기 시작하고, 대화는 신사를 완성시킨다.`,

        author: "토마스 풀러",
    },
    {
        quotation: `나는 폭풍이 두렵지 않다. 나의 배로 항해하는 법을 배우고 있으니까.`,

        author: "헬렌 켈러",
    },
    {
        quotation: `사람들은 존재하는 것들을 보며 말한다 "왜 있지?" 
        그러나 나는 존재하지 않는 것들을 꿈꾸며 말한다 "왜 없지?"`,

        author: "조지 버나드 쇼",
    },
    {
        quotation: `인간은 결국 자신이 목표로 하는 것만을 이루어낸다. 
        그러므로 당장은 실패할지라도, 보다 높은 목표를 세우는 것이 낫다.`,

        author: "헨리 데이비드 소로",
    },
    {
        quotation: `지금 잠을 자면 꿈을 꾸지만 지금 공부하면 꿈을 이룬다.`,

        author: "",
    },
    {
        quotation: `내가 헛되이 보낸 오늘은 어제 죽은 이가 갈망하던 내일이다.`,

        author: "",
    },
    {
        quotation: `공부가 인생의 전부는 아니다. 그러나 인생의 전부도 아닌 공부 하나도 정복하지 못한 다면 과연 무슨 일을 할 수 있겠는가?`,

        author: "",
    },
    {
        quotation: `피할 수 없는 고통은 즐겨라. 남보다 더 일찍 더 부지런히 노력해야 성공을 맛 볼 수 있다.`,

        author: "",
    },
    {
        quotation: `고통이 없으면 얻는것도 없다. 꿈이 바로 앞에 있는데, 
        당신은 왜 팔을 뻗지 않는가?
        no pains, no gains.`,

        author: "",
    },
    {
        quotation: `불가능이란 노력하지 않는 자의 변명이다. 
        노력의 댓가는 이유없이 사라지지 않는다. 
        오늘 걷지 않으면 내일은 뛰어야 한다.`,

        author: "",
    },
    {
        quotation: `불가능, 그것은 나약한 사람들의 핑계에 불과하다`,

        author: "",
    },
    {
        quotation: `불가능, 그것은 사실이 아니라, 하나의 의견일 뿐이다`,

        author: "",
    },
    {
        quotation: `불가능, 그것은 영원한 것이 아니라, 일시적인 것이다`,

        author: "",
    },
    {
        quotation: `불가능, 그것은 도전할 수 있는 가능성을 의미한다`,

        author: "",
    },
    {
        quotation: `불가능, 그것은 사람들을 용기있게 만들어 주는 것이다`,

        author: "",
    },
    {
        quotation: `공부를 하려고 하지 말고 공부를 이겨버려라.`,

        author: "",
    },
    {
        quotation: `기적은 노력하지 않는 사람에게 오지 않는다.`,

        author: "",
    },
    {
        quotation: `과거는 모두 잊었다. 나는 미래만 보고 있다. `,

        author: "에디슨",
    },
    {
        quotation: `공부가 인생에 전부는 아니다. 그러나, 인생의 한부분인 공부도 못한다면 무엇을 할 수 있겠는가?`,

        author: "",
    },
    {
        quotation: `가장 유능한 사람은 가장 배움에 힘쓰는 사람이다. `,

        author: "괴테",
    },
    {
        quotation: `오늘 당신의 슬픔이 꼭 슬픈 일은 아니니 좌절하지 마라.

        사람의 미래는 알수 없다.
        
        끝이 보이지 않는 캄캄한 어둠 끝을 지나면
        
        바로 환한 빛이 당신을 기다린다는 사실을 잊지마라.`,

        author: "",
    },
    {
        quotation: `어제보다 나은 오늘이 되기 위해서 노력하라`,

        author: "",
    },

    {
        quotation: `미래는 다가오는 것이 아닌 내가 만들어나가는 것이다. `,

        author: "윤0현",
    },
    {
        quotation: `오늘 하루쯤은 쉬어도 괜찮아 :)`,

        author: "윤0현",
    },
    {
        quotation: `해적이 되어라 미래를 개척해나가는 해적 말이다.`,

        author: "스티븐잡스",
    },
    {
        quotation: `Beat Yesterday 오늘 일은 잊고 내일의 일을 이기자!`,

        author: "구0승",
    },
    {
        quotation: `young & rich`,

        author: "안0후",
    },
    {
        quotation: `모든 동물들은 평등하다. 하지만 어떤 동물들은 다른 동물들보다 더욱 평등하다.`,

        author: "조지 오웰, <동물농장> 中",
    },
    {
        quotation: `끌리는대로 해라. 내가 하고 싶은 것을 해라.`,

        author: "채0민",
    },
    {
        quotation: `청춘은 짧다. 인생을 즐겨라!`,

        author: "",
    },
    {
        quotation: `The road to success and the road to failure are almost exactly the same.`,

        author: "Colin R. Davis",
    },
    {
        quotation: `It is better to fail in originality than to succeed in imitation.`,

        author: "Herman Melville",
    },
    {
        quotation: `Success is walking from failure to failure with no loss of enthusiasm.`,

        author: "Winston Churchill",
    },
    {
        quotation: `All progress takes place outside the comfort zone.`,

        author: "Michael John Bobak",
    },
    {
        quotation: `Success usually comes to those who are too busy to be looking for it.`,

        author: "Henry David Thoreau",
    },
    {
        quotation: `The way to get started is to quit talking and begin doing.`,

        author: "Walt Disney",
    },
    {
        quotation: `Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.`,

        author: "Albert Schweitzer",
    },
    {
        quotation: `이 순간이 죽기전 마지막 순간이라고 생각하며 살아라.`,

        author: "",
    },

    {
        quotation: `Success seems to be connected with action. Successful people keep moving.`,

        author: "Conrad Hilton",
    },
    {
        quotation: `In order to succeed, we must first believe that we can.`,

        author: "Nikos Kazantzakis",
    },
    {
        quotation: `The only place where success comes before work is in the dictionary.`,

        author: "Vidal Sassoon",
    }, ,
    {
        quotation: `후회는 너의 최후의 수단이다`,

        author: "김0우",
    },
    {
        quotation: `날아라! 이 세상 끝까지`,

        author: "",
    },
    {
        quotation: `혼을 담은 노력은 절대 배신하지 않는다`,

        author: "구0욱",
    },
    {
        quotation: `미래는 곧 현재. 현재가 곧 과거이다. 현재를 중요시해라.`,

        author: "윤0준",
    },
    {
        quotation: `가래떡처럼 오래오래 행복하자!!`,

        author: "",
    },

    {
        quotation: `나 자신을 알라.`,

        author: "소크라테스",
    },
    {
        quotation: `'기소불욕을 물시어인하라' (己所不欲勿施於人)`,

        author: "공자",
    },
    {
        quotation: `꿈을 꾸는 것과 탐구는 신이 인간에게 내린 가장 큰 축복이다.`,

        author: "메롱대제",
    },
    {
        quotation: `생각한다, 고로 나는 존재한다. `,

        author: "데카르트",
    },
    {
        quotation: `과거를 생각하지 말라. 미래를 생각하지 말라. 현재에 충실하라, 그리하면 과거와 미래 모두 그대의 것이 되리라`,

        author: "이0훤",
    },
    {
        quotation: `어려움은 해결하는 데 시간이 좀 걸리는 일이다. 불가능은 그보다 조금 더 걸리는것 뿐이다.`,

        author: "프리드쇼프 난센",
    },
    {
        quotation: `오늘 걷지 않으면 내일 뛰어야 한다.`,

        author: "이0윤",
    },
    {
        quotation: `‘악’은 인간을 옴츠려 들게 만듭니다. 순간적 충동으로 평생을 후회하며 살지 않기를 소원합니다.`,

        author: "잘 살아야 합니다. ",
    },

    {
        quotation: `당신이 가장 많이, 그리고 가장 무거운 거짓말을 전하는 대상은 누구일까요? 머릿속에 수많은 이들이, 특별히 가까운 이들이 스쳐지나가겠지만, 모두 오답입니다. 그리고 당신이 어떤 사람이든 사실 그 답은 똑같습니다. 그 대상은 그 누군가가 아닌 ‘자기 자신’이기 때문입니다. `,

        author: "나를 속여야 남을 속인다.",
    },
    {
        quotation: `우리 모두 작은 일에도 감사하며 하루하루 뜨겁게 열심히 살아야겠습니다.`,

        author: "사형수의 마지막 5분 ",
    },
    {
        quotation: `진심을 나누고, 마음 껏 사랑하자❤ `,

        author: "황0정 선생님",
    },
];


//명언들 배열 안에 넣어주기(배열 하나하나는 명언과 이름이 든 객체 형태로)

function getRandomQuote() {

    let random = quotes[Math.floor(Math.random() * quotes.length)];
    quotation.innerText = random.quotation;
    author.innerText = random.author;
    return random;

}

//랜덤 으로 문장을 뽑는 함수 만들고, 뽑아진 문장을 paintQuote() 함수를 통해 나타내기

function init() {

    getRandomQuote();

}

//최종 함수 실행!

init();