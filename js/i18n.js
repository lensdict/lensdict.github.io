// LensDict i18n — auto-detect browser language, swap data-i18n text
const translations = {
  en: {
    appName: "LensDict - Camera Dictionary",
    subtitle: "Point. See. Learn. No typing needed.",
    promo: "Look up any word instantly — just point your camera at text. No typing, no internet required. Now with flash card sets and two-sides study mode!",
    feat1Title: "How it works",
    feat1Desc: "Simply aim your camera at a book, article, menu, or sign. LensDict automatically detects the word at the center crosshair, highlights it, and shows the definition in a floating card. Tap the screen to pause and explore deeper.",
    feat2Title: "Powerful lookup",
    feat2a: "Two built-in dictionaries: WordNet 3.1 and Wiktionary — with automatic fallback if a word isn't found in one",
    feat2b: "Long-press any word in a definition to look it up (deep lookup)",
    feat2c: 'Lemmatization recognizes word forms — "running" finds "run", "children" finds "child"',
    feat2d: "Text-to-speech pronunciation for every word",
    feat2e: "Works entirely offline — no internet connection required",
    feat3Title: "Save & organize",
    feat3a: "Bookmark words with one tap — each save captures a snapshot of what you were reading",
    feat3b: "Add personal notes with color coding to any saved word",
    feat3c: "Browse saved words with swipe navigation",
    feat4Title: "Flash Card Sets (Premium)",
    feat4a: "Organize saved words into custom-colored flash card decks by topic, lesson, or difficulty",
    feat4b: "Two-sides study mode: see the word first, tap to reveal the definition — perfect for self-testing",
    feat4c: "Shuffle mode for randomized review",
    feat4d: "Copy or move words between sets",
    feat4e: "Unlimited saved words (free users can save up to 50)",
    feat5Title: "Premium Plans",
    feat5a: "Monthly, yearly (with 7-day free trial), or one-time lifetime purchase",
    feat5b: "Free users enjoy full camera dictionary and up to 50 saved words",
    feat6Title: "Privacy first",
    feat6a: "No account required",
    feat6b: "No data leaves your device",
    feat6c: "No tracking, no ads",
    supportTitle: "Support",
    supportDesc: "Have a question, feedback, or need help? We'd love to hear from you.",
    privacyLink: "Privacy Policy",
    footerRights: "All rights reserved."
  },

  "zh-Hans": {
    appName: "LensDict - 相机词典",
    subtitle: "对准即查，无需打字，轻松学英语",
    promo: "只需将镜头对准文字，即可秒查单词释义。无需打字、无需联网。全新闪卡集和双面学习模式，助你高效记忆！",
    feat1Title: "使用方法",
    feat1Desc: "只需将摄像头对准书本、文章、菜单或标识牌，LensDict 会自动识别十字准星中心的单词并高亮显示，同时在浮动卡片中展示释义。点击屏幕即可暂停，深入查看更多内容。",
    feat2Title: "强大的查词功能",
    feat2a: "内置两部词典：WordNet 3.1 和 Wiktionary——一部查不到自动切换另一部",
    feat2b: "长按释义中的任意单词可跳转查看该词（深度查词）",
    feat2c: "智能词形还原——\u201Crunning\u201D自动匹配\u201Crun\u201D，\u201Cchildren\u201D自动匹配\u201Cchild\u201D",
    feat2d: "每个单词均支持语音朗读",
    feat2e: "完全离线使用——无需任何网络连接",
    feat3Title: "保存与整理",
    feat3a: "一键收藏单词——每次保存都会捕捉当前阅读画面的快照",
    feat3b: "为收藏的单词添加带颜色标记的个人笔记",
    feat3c: "滑动浏览已保存的单词",
    feat4Title: "闪卡集（高级版）",
    feat4a: "将收藏的单词按主题、课程或难度整理为自定义颜色的闪卡组",
    feat4b: "双面学习模式：先看单词，点击翻转查看释义——完美的自测方式",
    feat4c: "随机打乱模式，随机复习",
    feat4d: "在不同闪卡集之间复制或移动单词",
    feat4e: "不限数量保存单词（免费用户最多保存 50 个）",
    feat5Title: "高级版方案",
    feat5a: "按月、按年（含 7 天免费试用）或一次性终身购买",
    feat5b: "免费用户可使用完整的相机词典功能，最多保存 50 个单词",
    feat6Title: "隐私优先",
    feat6a: "无需注册账号",
    feat6b: "数据不会离开你的设备",
    feat6c: "无追踪、无广告",
    supportTitle: "支持",
    supportDesc: "有问题、反馈或需要帮助？欢迎随时联系我们。",
    privacyLink: "隐私政策",
    footerRights: "保留所有权利。"
  },

  "zh-Hant": {
    appName: "LensDict - 相機辭典",
    subtitle: "對準即查，無需打字，輕鬆學英語",
    promo: "只需將鏡頭對準文字，即可秒查單字釋義。無需打字、無需上網。全新閃卡集和雙面學習模式，助你高效記憶！",
    feat1Title: "使用方式",
    feat1Desc: "只需將攝影機對準書本、文章、選單或告示牌，LensDict 會自動辨識十字準星中心的單字並標示，同時在浮動卡片中顯示釋義。點按螢幕即可暫停，深入瀏覽更多內容。",
    feat2Title: "強大的查詞功能",
    feat2a: "內建兩部辭典：WordNet 3.1 和 Wiktionary——一部查不到自動切換另一部",
    feat2b: "長按釋義中的任意單字可跳轉查看該詞（深度查詞）",
    feat2c: "智慧詞形還原——「running」自動配對「run」，「children」自動配對「child」",
    feat2d: "每個單字皆支援語音朗讀",
    feat2e: "完全離線使用——無需任何網路連線",
    feat3Title: "儲存與整理",
    feat3a: "一鍵收藏單字——每次儲存都會擷取當前閱讀畫面的快照",
    feat3b: "為收藏的單字加上帶顏色標記的個人筆記",
    feat3c: "滑動瀏覽已儲存的單字",
    feat4Title: "閃卡集（進階版）",
    feat4a: "將收藏的單字按主題、課程或難度整理為自訂顏色的閃卡組",
    feat4b: "雙面學習模式：先看單字，點按翻轉查看釋義——完美的自我測驗方式",
    feat4c: "隨機打亂模式，隨機複習",
    feat4d: "在不同閃卡集之間複製或移動單字",
    feat4e: "不限數量儲存單字（免費使用者最多儲存 50 個）",
    feat5Title: "進階版方案",
    feat5a: "按月、按年（含 7 天免費試用）或一次性終身購買",
    feat5b: "免費使用者可使用完整的相機辭典功能，最多儲存 50 個單字",
    feat6Title: "隱私優先",
    feat6a: "無需註冊帳號",
    feat6b: "資料不會離開你的裝置",
    feat6c: "無追蹤、無廣告",
    supportTitle: "支援",
    supportDesc: "有問題、建議或需要協助？歡迎隨時與我們聯繫。",
    privacyLink: "隱私權政策",
    footerRights: "保留所有權利。"
  },

  ja: {
    appName: "LensDict - カメラ辞書",
    subtitle: "かざすだけ。入力不要の英語辞書。",
    promo: "カメラをテキストに向けるだけで、瞬時に単語の意味を表示。入力不要、インターネット不要。フラッシュカードと両面学習モードで効率的に暗記！",
    feat1Title: "使い方",
    feat1Desc: "カメラを本、記事、メニュー、看板などに向けるだけ。LensDict が十字マーク中央の単語を自動検出してハイライトし、フローティングカードに定義を表示します。画面をタップすると一時停止し、詳しく確認できます。",
    feat2Title: "強力な検索機能",
    feat2a: "2つの内蔵辞書：WordNet 3.1 と Wiktionary — 片方で見つからない場合は自動的にもう片方を検索",
    feat2b: "定義中の任意の単語を長押しして、その単語を調べる（ディープルックアップ）",
    feat2c: "レンマ化による語形認識 —「running」で「run」、「children」で「child」を検索",
    feat2d: "すべての単語に音声読み上げ対応",
    feat2e: "完全オフライン動作 — インターネット接続不要",
    feat3Title: "保存＆整理",
    feat3a: "ワンタップで単語をブックマーク — 保存時に読んでいた画面のスナップショットもキャプチャ",
    feat3b: "保存した単語にカラー付きの個人メモを追加",
    feat3c: "スワイプで保存済み単語をブラウズ",
    feat4Title: "フラッシュカードセット（プレミアム）",
    feat4a: "保存した単語をトピック・レッスン・難易度別にカスタムカラーのフラッシュカードデッキに整理",
    feat4b: "両面学習モード：まず単語を表示、タップで意味を表示 — セルフテストに最適",
    feat4c: "シャッフルモードでランダム復習",
    feat4d: "セット間で単語をコピーまたは移動",
    feat4e: "単語の保存数無制限（無料ユーザーは最大50語）",
    feat5Title: "プレミアムプラン",
    feat5a: "月額・年額（7日間無料トライアル付き）・買い切り生涯プランから選択",
    feat5b: "無料ユーザーはカメラ辞書のフル機能と最大50語の保存が利用可能",
    feat6Title: "プライバシー優先",
    feat6a: "アカウント登録不要",
    feat6b: "データはデバイスの外に出ません",
    feat6c: "トラッキングなし、広告なし",
    supportTitle: "サポート",
    supportDesc: "ご質問、ご意見、お困りの点がございましたら、お気軽にお問い合わせください。",
    privacyLink: "プライバシーポリシー",
    footerRights: "All rights reserved."
  },

  ko: {
    appName: "LensDict - 카메라 사전",
    subtitle: "비추면 바로 검색. 타이핑 필요 없는 영어 사전.",
    promo: "카메라를 텍스트에 비추기만 하면 단어 뜻을 즉시 확인. 타이핑 불필요, 인터넷 불필요. 플래시 카드 세트와 양면 학습 모드로 효율적 암기!",
    feat1Title: "사용 방법",
    feat1Desc: "카메라를 책, 기사, 메뉴, 간판 등에 비추세요. LensDict가 십자선 중앙의 단어를 자동으로 감지하여 강조 표시하고, 플로팅 카드에 정의를 보여줍니다. 화면을 탭하면 일시 정지하여 자세히 살펴볼 수 있습니다.",
    feat2Title: "강력한 검색 기능",
    feat2a: "2개의 내장 사전: WordNet 3.1 및 Wiktionary — 한쪽에서 찾을 수 없으면 자동으로 다른 사전 검색",
    feat2b: "정의 내 아무 단어나 길게 눌러 해당 단어 검색 (딥 룩업)",
    feat2c: '어형 변화 인식 — "running"으로 "run", "children"으로 "child" 검색',
    feat2d: "모든 단어에 대한 음성 발음 지원",
    feat2e: "완전한 오프라인 작동 — 인터넷 연결 불필요",
    feat3Title: "저장 및 정리",
    feat3a: "한 번의 탭으로 단어 북마크 — 저장 시 읽고 있던 화면의 스냅샷도 캡처",
    feat3b: "저장된 단어에 색상 코딩된 개인 메모 추가",
    feat3c: "스와이프로 저장된 단어 탐색",
    feat4Title: "플래시 카드 세트 (프리미엄)",
    feat4a: "저장된 단어를 주제, 레슨, 난이도별로 맞춤 색상의 플래시 카드 덱으로 정리",
    feat4b: "양면 학습 모드: 먼저 단어를 보고, 탭하여 뜻 확인 — 자기 테스트에 완벽",
    feat4c: "셔플 모드로 무작위 복습",
    feat4d: "세트 간 단어 복사 또는 이동",
    feat4e: "단어 저장 수 무제한 (무료 사용자는 최대 50개)",
    feat5Title: "프리미엄 플랜",
    feat5a: "월간, 연간 (7일 무료 체험 포함), 또는 일회성 평생 구매",
    feat5b: "무료 사용자는 카메라 사전의 모든 기능과 최대 50개의 단어 저장 가능",
    feat6Title: "개인정보 보호 최우선",
    feat6a: "계정 가입 불필요",
    feat6b: "데이터가 기기 밖으로 나가지 않습니다",
    feat6c: "추적 없음, 광고 없음",
    supportTitle: "지원",
    supportDesc: "질문, 피드백 또는 도움이 필요하시면 언제든지 연락해 주세요.",
    privacyLink: "개인정보 처리방침",
    footerRights: "All rights reserved."
  },

  es: {
    appName: "LensDict - Diccionario con Cámara",
    subtitle: "Apunta. Mira. Aprende.",
    promo: "Busca cualquier palabra al instante: solo apunta tu cámara al texto. Sin teclear, sin internet. ¡Ahora con sets de tarjetas y modo de estudio de dos caras!",
    feat1Title: "Cómo funciona",
    feat1Desc: "Simplemente apunta tu cámara a un libro, artículo, menú o letrero. LensDict detecta automáticamente la palabra en el centro de la mira, la resalta y muestra la definición en una tarjeta flotante. Toca la pantalla para pausar y explorar con más detalle.",
    feat2Title: "Búsqueda potente",
    feat2a: "Dos diccionarios integrados: WordNet 3.1 y Wiktionary — con respaldo automático si una palabra no se encuentra en uno",
    feat2b: "Mantén presionada cualquier palabra en una definición para buscarla (búsqueda profunda)",
    feat2c: 'La lematización reconoce formas de palabras: "running" encuentra "run", "children" encuentra "child"',
    feat2d: "Pronunciación con texto a voz para cada palabra",
    feat2e: "Funciona completamente sin conexión — no requiere internet",
    feat3Title: "Guardar y organizar",
    feat3a: "Guarda palabras con un solo toque — cada guardado captura una imagen de lo que estabas leyendo",
    feat3b: "Agrega notas personales con código de color a cualquier palabra guardada",
    feat3c: "Navega por las palabras guardadas deslizando",
    feat4Title: "Sets de Tarjetas (Premium)",
    feat4a: "Organiza las palabras guardadas en mazos de tarjetas con colores personalizados por tema, lección o dificultad",
    feat4b: "Modo de estudio de dos caras: ve la palabra primero, toca para revelar la definición — perfecto para autoevaluación",
    feat4c: "Modo aleatorio para repaso al azar",
    feat4d: "Copia o mueve palabras entre sets",
    feat4e: "Guardado ilimitado de palabras (los usuarios gratuitos pueden guardar hasta 50)",
    feat5Title: "Planes Premium",
    feat5a: "Mensual, anual (con 7 días de prueba gratis) o compra única de por vida",
    feat5b: "Los usuarios gratuitos disfrutan del diccionario de cámara completo y hasta 50 palabras guardadas",
    feat6Title: "Privacidad ante todo",
    feat6a: "No se requiere cuenta",
    feat6b: "Tus datos no salen de tu dispositivo",
    feat6c: "Sin rastreo, sin anuncios",
    supportTitle: "Soporte",
    supportDesc: "¿Tienes preguntas, comentarios o necesitas ayuda? Nos encantaría saber de ti.",
    privacyLink: "Política de privacidad",
    footerRights: "Todos los derechos reservados."
  },

  "pt-BR": {
    appName: "LensDict - Dicionário com Câmera",
    subtitle: "Aponte. Veja. Aprenda.",
    promo: "Consulte qualquer palavra instantaneamente — aponte a câmera para o texto. Sem digitar, sem internet. Agora com flashcards e modo de estudo frente e verso!",
    feat1Title: "Como funciona",
    feat1Desc: "Basta apontar a câmera para um livro, artigo, menu ou placa. O LensDict detecta automaticamente a palavra no centro da mira, destaca-a e exibe a definição em um cartão flutuante. Toque na tela para pausar e explorar com mais detalhes.",
    feat2Title: "Busca poderosa",
    feat2a: "Dois dicionários integrados: WordNet 3.1 e Wiktionary — com fallback automático se uma palavra não for encontrada em um deles",
    feat2b: "Pressione e segure qualquer palavra em uma definição para consultá-la (busca profunda)",
    feat2c: 'Lematização reconhece formas de palavras — "running" encontra "run", "children" encontra "child"',
    feat2d: "Pronúncia com texto para fala para cada palavra",
    feat2e: "Funciona totalmente offline — sem necessidade de conexão com a internet",
    feat3Title: "Salvar e organizar",
    feat3a: "Salve palavras com um toque — cada salvamento captura uma imagem do que você estava lendo",
    feat3b: "Adicione notas pessoais com código de cores a qualquer palavra salva",
    feat3c: "Navegue pelas palavras salvas deslizando",
    feat4Title: "Conjuntos de Flashcards (Premium)",
    feat4a: "Organize palavras salvas em baralhos de flashcards com cores personalizadas por tema, aula ou dificuldade",
    feat4b: "Modo de estudo frente e verso: veja a palavra primeiro, toque para revelar a definição — perfeito para autoteste",
    feat4c: "Modo aleatório para revisão embaralhada",
    feat4d: "Copie ou mova palavras entre conjuntos",
    feat4e: "Salve palavras ilimitadas (usuários gratuitos podem salvar até 50)",
    feat5Title: "Planos Premium",
    feat5a: "Mensal, anual (com 7 dias de teste grátis) ou compra única vitalícia",
    feat5b: "Usuários gratuitos aproveitam o dicionário de câmera completo e até 50 palavras salvas",
    feat6Title: "Privacidade em primeiro lugar",
    feat6a: "Não é necessário criar conta",
    feat6b: "Seus dados não saem do seu dispositivo",
    feat6c: "Sem rastreamento, sem anúncios",
    supportTitle: "Suporte",
    supportDesc: "Tem alguma dúvida, feedback ou precisa de ajuda? Adoraríamos ouvir de você.",
    privacyLink: "Política de Privacidade",
    footerRights: "Todos os direitos reservados."
  }
};

// Resolve browser language to a supported locale key
function detectLanguage() {
  const langs = navigator.languages || [navigator.language];
  for (const raw of langs) {
    const tag = raw.trim();
    // Exact match first
    if (translations[tag]) return tag;
    // zh-CN / zh-SG → zh-Hans, zh-TW / zh-HK → zh-Hant
    if (/^zh\b/i.test(tag)) {
      if (/Hans|CN|SG/i.test(tag)) return "zh-Hans";
      if (/Hant|TW|HK|MO/i.test(tag)) return "zh-Hant";
      return "zh-Hans"; // default simplified
    }
    if (/^ja\b/i.test(tag)) return "ja";
    if (/^ko\b/i.test(tag)) return "ko";
    if (/^es\b/i.test(tag)) return "es";
    if (/^pt\b/i.test(tag)) return "pt-BR";
  }
  return "en";
}

function applyLanguage(lang) {
  const strings = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (strings[key] != null) el.textContent = strings[key];
  });
  // Update html lang attribute
  document.documentElement.lang = lang;
  // Sync dropdown
  const switcher = document.getElementById("lang-switcher");
  if (switcher) switcher.value = lang;
}

// Boot
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lensdict-lang");
  const lang = saved || detectLanguage();
  applyLanguage(lang);

  document.getElementById("lang-switcher").addEventListener("change", e => {
    const chosen = e.target.value;
    localStorage.setItem("lensdict-lang", chosen);
    applyLanguage(chosen);
  });
});
