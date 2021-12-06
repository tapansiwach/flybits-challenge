const offers = [
  {
    bank: "BMO Bank of Montreal",
    address: "1465 Richmond Rd",
    lat: 45.36817,
    lng: -75.79204,
    radius: 2000,
    imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.EvzdZiSKHPngeurp4yiUEgHaE8%26pid%3DApi&f=1",
    caption: "Earn up to $350 when you open a chequing account online!"
  },
  {
    bank: "RBC Royal Bank",
    address: "2121 Carling Ave",
    lat: 45.377806,
    lng: -75.77007,
    radius: 2500,
    imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.AjvFP8c6Oxhl16_Y0iwSNwHaE8%26pid%3DApi&f=1",
    caption: "Stay on lodging at Canada's Top Winter Destinations & Save Upto 15%"
  },
  {
    bank: "TD Canada Trust",
    address: "100 Bayshore Dr",
    lat: 45.34784,
    lng: -75.80491,
    radius: 700,
    imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.U-ZdG8pIo_vm4KspB2eq6QHaFY%26pid%3DApi&f=1",
    caption: "Get top notch support from direct investing professionals"
  },
  {
    bank: "Bank of Canada",
    address: "234 Wellington St. W",
    lat: 45.42434,
    lng: -75.70209,
    radius: 3000,
    imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VPTD3boovbmxJPTwQdX-yQHaE7%26pid%3DApi&f=1",
    caption: "Doors Are Open"
  },
  {
    bank: "HSBC",
    address: "131 Queen St",
    lat: 45.42434,
    lng: -75.69865,
    radius: 90,
    imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.gXST9hFBoU7Db5x-atu-NAHaD5%26pid%3DApi&f=1",
    caption: "Get 60 days of free trading with HSBC InvestDirect"
  },
  {
    bank: "National Bank",
    address: "780 Baseline Rd",
    lat: 45.37685,
    lng: -75.71548,
    radius: 500,
    imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.-23kFeMD_yaXzS8GuHS9TgHaEK%26pid%3DApi&f=1",
    caption: "Automatically get a chance to win $1000 when you make a contribution towards your investments by March 1"
  },
  {
    bank: "Scotiabank",
    address: "Patterson Hall, 1125 Colonel By Dr",
    lat: 45.38457,
    lng: -75.60719,
    radius: 1800,
    imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7tZ7PVLFzoLQafwHo2ztlAHaCJ%26pid%3DApi&f=1",
    caption: "Earn 1.30%† interest on new deposits in your RRSP or TFSA with the Savings Accelerator Account"
  },
  {
    bank: "RBC Royal Bank",
    address: "1145 Wellington St. W",
    lat: 45.40482,
    lng: -75.72578,
    radius: 5000,
    imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.wxeDW-dCEL5Gcmg0OblTXwHaE7%26pid%3DApi&f=1",
    caption: "For a limited time get up to 450 welcome WestJet dollars with the WestJet RBC World Elite Mastercard"
  },
  {
    bank: "TD Canada Trust",
    address: "1200 St Laurent Blvd",
    lat: 45.42217,
    lng: -75.63686,
    radius: 1800,
    imgSrc: "https://i.cbc.ca/1.3440439.1455041331!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/td.jpg",
    caption: "Get a great rate with TD Home Equity Flexline"
  },
  {
    bank: "National Bank",
    address: "232 Rideau St",
    lat: 45.4335,
    lng: -75.68664,
    radius: 700,
    imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.-23kFeMD_yaXzS8GuHS9TgHaEK%26pid%3DApi&f=1",
    caption: "Sign up for an eligible rewards credit card to earn 15,000 rewards points and save on the annual fees for the first year"
  },
  {
    bank: "RBC Royal Bank",
    address: "745 Bank St",
    lat: 45.40897,
    lng: -75.68665,
    radius: 200,
    imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.GSK8I4AU1Z7Sj5tmGyXXggHaE8%26pid%3DApi&f=1",
    caption: "Switch Your Eligible Mortgage to RBC and Get a Cash Bonus & Switch Fees Covered"
  },
  {
    bank: "RBC Royal Bank",
    address: "99 Bank St",
    lat: 45.42603,
    lng: -75.69797,
    radius: 1200,
    imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.A--Ei9t8DS6G_CmkPzU93AHaF7%26pid%3DApi&f=1",
    caption: "RV financing available for up to 20 years"
  },
]