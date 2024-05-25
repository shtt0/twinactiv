(a) TWINACTIV Overview Document

[https://www.canva.com/design/DAF2AC1hluc/gfTrsLX0hiWG8wxYcQNWkg/edit?utm_content=DAF2AC1hluc&utm_campaign=designshare&utm_medium= link2&utm_source=sharebutton](https://www.canva.com/design/DAF_cS7aGtU/q4TP95fJDe-CZ8uI3HOqVg/edit?utm_content=DAF_cS7aGtU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

b) Structure

1- twinactiv-portal: user's main interface
DEMO: https://twinactiv.vercel.app/

2- twinactiv-marketplace: secondary distribution of NFT Items between users
DEMO: https://twinactiv-marketplace.vercel.app/

The site is divided into two sites: 1- twinactiv-portal: the main interface for users

c) Functional description

1- twinactiv-portal

My Garage
My Garage is an interface that integrates and displays the Digital Twin Car and the customized NFTs (skins and decorative items for the Garage) that you own.
*A dummy image for now, to be developed by finding an appropriate partner (details to be presented in the presentation).
Digital Twin Car is SBT.
We would like to enable token earning only during the period when the car is owned,
After purchasing a new car and after trading it in.
(since the manufacturer/dealer cannot know the status of the token).
We will consider how to handle cases such as after purchasing a new car and trading it in (since the manufacturer/dealer cannot know the details).

Token information
kuritsu: JIMBA-ITTAI TOKEN's Balance/ClaimableReward/Cliam
Burn & Token Mint of Electricity is omitted in the initial development.
JIMBA-ITTAI TOKEN cannot be swapped or transferred,
JIMBA-ITTAI TOKEN cannot be swapped or transferred, so it has no direct redeemability.

Display of NFT Items
Supply Items to take advantage of the gamification of the token Earn.
Royal Ticket, a special Real/Virtual experience related to car life.

Mission Information
A list of missions in which Supply Items and NFTs for the Garage can be obtained.
It is divided into two categories: Real/Virtual World.
(Example of Real World)
　Go to the driving course in 00 City to get Electricity.
　Susteo (temporary increase in Earn rate) is obtained by going to the Super Taikyu race.
(Virtual World example)
　Get a custom NFT to change the interior of Garage by playing Bakusou Club.
　Get a limited skin when you watch the SPIRIT RACING GT CUP National Championship live.

Official Tickets Sale
kittori: Redeem your JIMBA-ITTAI tokens for a Royal Ticket.

Go to Marketplace
korei: A link to the Marketplace, where secondary distribution of NFT Items is possible.

2- twinactiv-marketplace *Please refer to this report for the marketplace.　

https://github.com/shtt0/twinactiv-marketplace

Buy/Sell function for NFT Items.

Buy=Users who find it difficult or troublesome to clear missions can use Marketplace to quickly obtain NFT Items and earn JI Token.

Sell=On the contrary, users who have completed many missions can Earn by selling NFT Items in the Marketplace.　　

d) Contracts (Former ver on Astar zkEVM network / to be updated)
Token(ERC20): 0x45B2242E54Dae439B080D459C1f1E9290E061E34
Digital Twin Car(ERC721): 0xb917C032355B032d34A1aEaa01aC954086771daD
StakingERC721: 0xC24B9BcE989a8bD00170593707cC0f7A21F4fCa9
MarketPlaceRule: 0xC003bdE20c2EaD7b7902437044410f5Fe905c258
