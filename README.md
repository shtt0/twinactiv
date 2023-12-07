a）TWINACTIV 概要資料

[https://www.canva.com/design/DAF2AC1hluc/gfTrsLX0hiWG8wxYcQNWkg/edit?utm_content=DAF2AC1hluc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton](https://www.canva.com/design/DAF2AC1hluc/gfTrsLX0hiWG8wxYcQNWkg/edit?utm_content=DAF2AC1hluc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

b）構造

1- twinactiv-portal: ユーザのメインインターフェイス  
   DEMO: [https://twinactiv.vercel.app/](https://twinactiv.vercel.app/)

2- twinactiv-marketplace: ユーザ間の NFT Items2 次流通用  
   DEMO: [https://twinactiv-marketplace.vercel.app/](https://twinactiv-marketplace.vercel.app/)

の 2 つのサイトに分かれています。

c) 機能説明

1- twinactiv-portal

   ・My Garage  
     ┗ Digital Twin Car や所有するカスタマイズ NFT（スキンや Garage 用の装飾アイテム）が
        統合表示されるインターフェイス  
        ※適切なパートナーを見つけて開発想定（詳細はプレゼンにて）で、現在はダミー画像。  
        ※Digital Twin Car は SBT。  
           車を所有している期間のみトークン Earn できるようにしたいが、  
           新車購入後、下取りに出した後のケース  
           （メーカー/ディーラー側からは把握できないので）  
           などの対応を今後要検討。  
 
   ・トークン情報  
     ┗ JIMBA-ITTAI TOKEN の Balance/ClaimableReward/Cliam  
        ※Electricity の Burn&Token Mint は初期開発では割愛。  
        ※JIMBA-ITTAI TOKEN は Swap、Transfer 不可なので、  
           直接的な換金性なし。  
   
   ・所有 NFT Items の表示  
     ┗ トークン Earn のゲーミフィケーションを有利に進めるための Supply Items。  
        カーライフにまつわる Real/Virtual の特別体験が可能な Royal Ticket。  
   
   ・Mission 情報  
     ┗ Supply Items や Garage 用 NFT が獲得できる Mission の一覧。  
        Real/Virtual World の 2 つのカテゴリーに分かれている。  
        （Real World の例）  
        〇〇市のドライブコースに行くと、Electricity を入手  
        スーパー耐久の観戦に行くと、サステオ（一時的に Earn 率 UP）を入手  
        （Virtual World の例）  
        爆創クラブをプレイすると Garage の内装を変化させるカスタム NFT を入手  
        SPIRIT RACING GT CUP の全国大会をライブ視聴すると限定スキン入手  
   
   ・Official Tickets Sale  
     ┗ 貯めた JIMBA-ITTAI トークンと Royal Ticket を引き換える。  
   
   ・Go to Marketplace  
     ┗ NFT Items の 2 次流通が可能な Marketplace へのリンク。


2- twinactiv-marketplace
※marketplaceはこちらのレポをご覧ください。　


 [https://github.com/shtt0/twinactiv-marketplace](https://github.com/shtt0/twinactiv-marketplace)


・NFT ItemsのBuy/Sell機能。


BUY=Missionクリアが難しい、面倒なユーザはMarketplaceでNFT Itemsを手っ取り早く入手し、JI Tokenを獲得できます。


Sell=逆に、Missionを沢山達成したユーザはMarketplaceでNFT Itemsを販売することで、Earnが可能です。　　


d) コントラクト関連  
   Thirweb でデプロイしています。  
   Token(ERC20): 0x45B2242E54Dae439B080D459C1f1E9290E061E34  
   Digital Twin Car(ERC721): 0xb917C032355B032d34A1aEaa01aC954086771daD  
   StakingERC721: 0xC24B9BcE989a8bD00170593707cC0f7A21F4fCa9  
   MarketPlaceRule: 0xC003bdE20c2EaD7b7902437044410f5Fe905c258  
