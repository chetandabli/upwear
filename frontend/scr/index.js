import { get } from "./sortcuts.js";

let imges = document.querySelectorAll("img");
for(let i = 0; i < imges.length; i++){
    imges[i].addEventListener("click", ()=>{
        location.assign("/man.html")
    })
}

let anothernew = [
    {
        "category": "Child",
        "title": "HELLCAT",
        "subtitle": "Set Of 2 Boys Sweatshirt",
        "discounted_price": "679",
        "strike_price": "3998",
        "discount": "(83% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/19888438/2022/9/22/591e68d2-7552-4e8f-a51d-63b6b028a4431663840257994-HELLCAT-Boys-Set-Of-2-Blue--White-Printed-Hooded-Sweatshirt--7.jpg",
        "size": [
            "3-4Y, ",
            "5-6Y, ",
            "7-8Y, ",
            "9-10Y, ",
            "11-12Y, ",
            "13-14Y, ",
            "15-16Y"
        ],
        "rating": "4.4",
        "rating_count": "5"
    },
    {
        "category": "Child",
        "title": "HELLCAT",
        "subtitle": "Boys Pack Of 5 Printed T-shirt",
        "discounted_price": "799",
        "strike_price": "4995",
        "discount": "(84% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/17137550/2022/2/11/b124b0f4-830d-44ed-a669-e8585d66cf4f1644579708683HellcatBoysRoundNeckBlendedCottonTshirt-ComboPackof51.jpg",
        "size": [
            "3-4Y, ",
            "5-6Y, ",
            "7-8Y, ",
            "9-10Y, ",
            "11-12Y, ",
            "13-14Y, ",
            "15-16Y"
        ],
        "rating": "4.1",
        "rating_count": "1.5k"
    },
    {
        "category": "Child",
        "title": "VASTRAMAY",
        "subtitle": "Boys Printed Kurti with Dhoti Pants",
        "discounted_price": "989",
        "strike_price": "2999",
        "discount": "(67% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14945740/2021/7/27/3db0248d-4733-471c-b340-8e4d899157821627364322229VASTRAMAYBoysYellowFloralPrintedAngrakhaKurtiwithDhotiPants1.jpg",
        "size": [
            "2-3Y, ",
            "3-4Y, ",
            "4-5Y, ",
            "5-6Y, ",
            "6-7Y, ",
            "7-8Y, ",
            "9-10Y, ",
            "11-12Y, ",
            "13-14Y"
        ],
        "rating": "4.3",
        "rating_count": "1.1k"
    },
    {
        "category": "Child",
        "title": "A.T.U.N.",
        "subtitle": "Boys Casual Shirt",
        "discounted_price": "681",
        "strike_price": "2199",
        "discount": "(69% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/19662810/2022/8/25/62f4ec2a-cdf3-4cdc-a35c-3144b02d736d1661432266938ATUNBoysShirt1.jpg",
        "size": [
            "0-3M, ",
            "3-6M, ",
            "6-12M, ",
            "1-2Y, ",
            "2-3Y, ",
            "3-4Y, ",
            "4-5Y, ",
            "5-6Y, ",
            "6-7Y, ",
            "7-8Y, ",
            "8-9Y, ",
            "9-10Y, ",
            "10-11Y, ",
            "11-12Y, ",
            "12-13Y, ",
            "13-14Y, ",
            "14-15Y, ",
            "15-16Y"
        ],
        "rating": "4.5",
        "rating_count": "31"
    },
    {
        "category": "Child",
        "title": "HELLCAT",
        "subtitle": "Boys Pack of 3 Solid Track Pants",
        "discounted_price": "808",
        "strike_price": "2994",
        "discount": "(73% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18485332/2022/6/4/7e5f39a4-68cd-49c0-b379-c1558153018a1654342781392HELLCATBoysPackof3GreyBlackRedSolidTrackPants1.jpg",
        "size": [
            "9-10Y",
            "11-12Y",
            "13-14Y"
        ],
        "rating": "4.2",
        "rating_count": "165"
    },
    {
        "category": "Child",
        "title": "MANZON",
        "subtitle": "Kids Velvet 6 Pcs Set",
        "discounted_price": "1099",
        "strike_price": "1999",
        "discount": "(45% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16003720/2021/11/29/85faff74-1915-4ad5-bb4a-d59efff4d3f11638189301743SweatersMarksSpencerBoysJeansMarksSpencerBoysInnerwearVestsM1.jpg",
        "size": [
            "0-3M",
            "3-6M",
            "6-12M",
            "1-2Y",
            "2-3Y"
        ],
        "rating": "3.5",
        "rating_count": "41"
    },
    {
        "category": "Child",
        "title": "max",
        "subtitle": "Boys Pack Of 5 T-shirts",
        "discounted_price": "569",
        "strike_price": "949",
        "discount": "(40% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16051118/2021/11/10/fd80a39e-1ea2-4375-a7fa-4c953ff58fac1636542362732maxBoysMulticolouredPrintedV-NeckAppliqueT-shirt1.jpg",
        "size": [
            "2-3Y",
            "3-4Y",
            "5-6Y",
            "7-8Y"
        ],
        "rating": "4.3",
        "rating_count": "27"
    },
    {
        "category": "Child",
        "title": "Urbano Juniors",
        "subtitle": "Boys Slim Fit Denim Joggers",
        "discounted_price": "601",
        "strike_price": "1399",
        "discount": "(57% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/11851558/2020/5/14/48b14f3a-22f7-4663-951b-28362558930a1589444558685-Urbano-Juniors-Boys-Grey-Slim-Fit-Jeans-4441589444558297-1.jpg",
        "size": [
            "4-5Y, ",
            "5-6Y, ",
            "7-8Y, ",
            "8-9Y, ",
            "9-10Y, ",
            "11-12Y, ",
            "13-14Y"
        ],
        "rating": "4.2",
        "rating_count": "2.3k"
    },
    {
        "category": "Child",
        "title": "PLUM TREE",
        "subtitle": "Boys Camouflage Pure Cotton Joggers",
        "discounted_price": "636",
        "strike_price": "1249",
        "discount": "(49% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15156370/2021/12/23/41255d6f-4eee-4fcb-b75c-2cd17b291e9b1640251064814-PLUM-TREE-Boys-Green--Blue-Camouflage-Pure-Cotton-Joggers-31-1.jpg",
        "size": [
            "2-3Y, ",
            "3-4Y, ",
            "5-6Y, ",
            "7-8Y, ",
            "8-9Y, ",
            "9-10Y, ",
            "11-12Y, ",
            "13-14Y"
        ],
        "rating": "4.3",
        "rating_count": "286"
    },
    {
        "category": "Child",
        "title": "Hopscotch",
        "subtitle": "Boys Shirt Pyjamas & Blazer",
        "discounted_price": "621",
        "strike_price": "1479",
        "discount": "(58% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16334330/2021/12/2/5eb31306-337b-4db9-9089-ef45e0ed1f751638417222084ClothingSet1.jpg",
        "size": [
            "6-12M",
            "1-2Y",
            "2-3Y",
            "3-4Y",
            "4-5Y"
        ],
        "rating": "4",
        "rating_count": "683"
    },
    {
        "category": "Child",
        "title": "MANZON",
        "subtitle": "Kids Pack Of 3 Thermal Sets",
        "discounted_price": "799",
        "strike_price": "1999",
        "discount": "(60% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16003708/2021/11/29/c4c2b2f4-6e55-4012-b315-434a9e8190ee1638189390670-MANZON-Unisex-Kids-Thermal-Set-8121638189389733-1.jpg",
        "size": [
            "3-4Y, ",
            "4-5Y, ",
            "5-6Y, ",
            "6-7Y, ",
            "7-8Y, ",
            "8-9Y, ",
            "9-10Y, ",
            "10-11Y, ",
            "11-12Y, ",
            "12-13Y, ",
            "13-14Y, ",
            "14-15Y, ",
            "15-16Y"
        ],
        "rating": "3.9",
        "rating_count": "204"
    },
    {
        "category": "Child",
        "title": "YK Disney",
        "subtitle": "Boys Printed Applique T-shirt",
        "discounted_price": "532",
        "strike_price": "2049",
        "discount": "(74% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18945470/2022/7/2/6d732660-0482-4796-abff-6a3e38e1f2131656748432666Tshirts1.jpg",
        "size": [
            "1-2Y",
            "2-3Y",
            "3-4Y",
            "4-5Y",
            "5-6Y",
            "6-7Y"
        ],
        "rating": "4",
        "rating_count": "76"
    },
    {
        "category": "Child",
        "title": "UTH by Roadster",
        "subtitle": "Boys Solid Hooded Sweatshirt",
        "discounted_price": "584",
        "strike_price": "1299",
        "discount": "(55% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15236486/2021/10/26/d5ccd8d6-0a08-4422-a0e9-58ccfc9d93081635249538404-UTH-by-Roadster-Boys-Sweatshirts-9261635249538125-1.jpg",
        "size": [
            "12-13Y",
            "14-15Y",
            "16-17Y"
        ],
        "rating": "4.5",
        "rating_count": "93"
    },
    {
        "category": "Child",
        "title": "HELLCAT",
        "subtitle": "Set of 2 Colourblocked T-shirt",
        "discounted_price": "559",
        "strike_price": "1999",
        "discount": "(72% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15932826/2022/1/7/5eac46c6-af55-44b6-889f-a0a4c23d7d681641545112054-HELLCAT-Boys-Set-of-2-Colourblocked-T-shirts-435164154511196-2.jpg",
        "size": [
            "3-4Y, ",
            "5-6Y, ",
            "7-8Y, ",
            "9-10Y, ",
            "11-12Y, ",
            "13-14Y, ",
            "15-16Y"
        ],
        "rating": "4.1",
        "rating_count": "475"
    },
    {
        "category": "Child",
        "title": "Nauti Nati",
        "subtitle": "Boys Kurta Set & Nehru Jacket",
        "discounted_price": "1199",
        "strike_price": "1999",
        "discount": "(40% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16894894/2022/1/21/725c9d3f-463e-461c-8f74-3af93df162f21642748080964NautiNatiBoysWhiteLayeredPureCottonKurtawithPyjamas1.jpg",
        "size": [
            "1Y",
            "2Y",
            "3Y",
            "4Y",
            "5Y"
        ],
        "rating": "4.6",
        "rating_count": "36"
    },
    {
        "category": "Child",
        "title": "HELLCAT",
        "subtitle": "Boys Pack Of 3 Shorts",
        "discounted_price": "654",
        "strike_price": "2847",
        "discount": "(77% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18044338/2022/6/2/e2bdbaa7-ffeb-434f-9184-54b90cfdd3a81654141289404HELLCATBoysMaroonShorts1.jpg",
        "size": [
            "3-4Y",
            "5-6Y",
            "7-8Y",
            "9-10Y"
        ],
        "rating": "4.2",
        "rating_count": "234"
    },
    {
        "category": "Child",
        "title": "JBN Creation",
        "subtitle": "Boys Kurta with Pyjamas",
        "discounted_price": "999",
        "strike_price": "1999",
        "discount": "(50% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/20/108ebab1-4dd9-4b31-92bd-d15c1eaf4a851600551515102-1.jpg",
        "size": [
            "2-3Y, ",
            "3-4Y, ",
            "4-5Y, ",
            "5-6Y, ",
            "6-7Y, ",
            "7-8Y, ",
            "9-10Y, ",
            "11-12Y, ",
            "13-14Y"
        ],
        "rating": "4.1",
        "rating_count": "1.1k"
    },
    {
        "category": "Child",
        "title": "HELLCAT",
        "subtitle": "Boys Printed Bio Finish T-shirt",
        "discounted_price": "799",
        "strike_price": "4995",
        "discount": "(84% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18279078/2022/5/16/c80410cf-5a3b-4d92-8ca6-7234826d4e5d1652694090448HELLCATBoysMaroonTypography5StripedBioFinishT-shirt1.jpg",
        "size": [
            "3-4Y, ",
            "5-6Y, ",
            "7-8Y, ",
            "9-10Y, ",
            "11-12Y, ",
            "13-14Y, ",
            "15-16Y"
        ],
        "rating": "3.9",
        "rating_count": "253"
    },
    {
        "category": "Child",
        "title": "max",
        "subtitle": "Boys Pack of 5 Printed T-shirt",
        "discounted_price": "569",
        "strike_price": "949",
        "discount": "(40% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15552594/2021/9/21/35b0d182-4b52-4767-b550-7746dec36d9b1632223680366maxBoysMulticolouredTypographyV-NeckAppliqueT-shirt1.jpg",
        "size": [
            "2-3Y",
            "3-4Y",
            "5-6Y",
            "7-8Y"
        ],
        "rating": "4.5",
        "rating_count": "605"
    },
    {
        "category": "Child",
        "title": "x2o",
        "subtitle": "Pack of 6 Cotton Lounge Pants",
        "discounted_price": "899",
        "strike_price": "2999",
        "discount": "(70% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/26/07837259-ff86-4e2a-b4f5-6da6d2b92d401614340366668-1.jpg",
        "size": [
            "0-3M, ",
            "3-6M, ",
            "6-9M, ",
            "9-12M, ",
            "12-18M, ",
            "18-24M, ",
            "2-3Y, ",
            "3-4Y, ",
            "4-5Y, ",
            "5-6Y"
        ],
        "rating": "4.1",
        "rating_count": "2.9k"
    },
    {
        "category": "Child",
        "title": "YK Marvel",
        "subtitle": "Boys Avengers Hooded Jacket",
        "discounted_price": "1394",
        "strike_price": "3099",
        "discount": "(55% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/11982140/2021/11/29/ff5f3c8c-f0dd-4cda-af74-20abb618c2171638188824370-YK-Marvel-Boys-White-Avengers-Captain-America-Shield-Print-H-1.jpg",
        "size": [
            "2-3Y, ",
            "3-4Y, ",
            "4-5Y, ",
            "5-6Y, ",
            "6-7Y, ",
            "7-8Y, ",
            "8-9Y, ",
            "10-11Y, ",
            "11-12Y, ",
            "13-14Y"
        ],
        "rating": "4.1",
        "rating_count": "301"
    },
    {
        "category": "Child",
        "title": "HELLCAT",
        "subtitle": "Boys Pack Of 2 Sweatshirt",
        "discounted_price": "679",
        "strike_price": "3998",
        "discount": "(83% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/19888414/2022/9/22/54c59324-d669-436b-87eb-709b0e0229621663839847198-HELLCAT-Boys-Burgundy--Olive-Pack-Of-2-Printed-Hooded-Sweats-7.jpg",
        "size": [
            "3-4Y, ",
            "5-6Y, ",
            "7-8Y, ",
            "9-10Y, ",
            "11-12Y, ",
            "13-14Y, ",
            "15-16Y"
        ],
        "rating": "3.3",
        "rating_count": "8"
    },
    {
        "category": "Child",
        "title": "BONKIDS",
        "subtitle": "Boys Spiderman Printed Slim Fit Pure Cotton T-shirt",
        "discounted_price": "498",
        "strike_price": "1660",
        "discount": "(70% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15238122/2021/8/24/d60e1f33-1e40-4df1-8378-1837c0e1082a1629785346782BONKIDSBoysMustardYellowPrintedPocketsSlimFitT-shirt1.jpg",
        "size": [
            "2-3Y, ",
            "4-5Y, ",
            "6-7Y, ",
            "8-9Y, ",
            "10-11Y, ",
            "12-13Y, ",
            "13-14Y, ",
            "14-15Y"
        ],
        "rating": "4.2",
        "rating_count": "1.7k"
    },
    {
        "category": "Child",
        "title": "HERE&NOW",
        "subtitle": "Boys Slim Fit Jeans",
        "discounted_price": "665",
        "strike_price": "1799",
        "discount": "(63% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14504008/2022/5/18/fee677d4-bf4c-4e78-a4ba-ed5c03d5e89b1652848167758-HERENOW-Boys-Grey-Slim-Fit-Heavy-Fade-Acid-Wash-Stretchable--1.jpg",
        "size": [
            "8-9Y",
            "9-10Y",
            "10-11Y",
            "11-12Y",
            "12-13Y",
            "13-14Y"
        ],
        "rating": "4.2",
        "rating_count": "143"
    },
    {
        "category": "Child",
        "title": "HRX by Hrithik Roshan",
        "subtitle": "U-17 Boys Lifestyle Tracksuit",
        "discounted_price": "1499",
        "strike_price": "2999",
        "discount": "(50% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15177588/2022/3/22/3c7fc960-f492-448e-81b1-4e23555c98d51647938866127-HRX-By-Hrithik-Roshan-U-17-Lifestyle-Boys-Iron-Rapid-Dry-Col-1.jpg",
        "size": [
            "8-9Y",
            "10-11Y",
            "12-13Y",
            "14-15Y",
            "16-17Y"
        ],
        "rating": "4.2",
        "rating_count": "62"
    },
    {
        "category": "Child",
        "title": "HELLCAT",
        "subtitle": "Boys Pack of 3 T-shirts",
        "discounted_price": "389",
        "strike_price": "2997",
        "discount": "(87% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18265286/2022/5/13/bb9bbe1a-f722-4122-968f-335627584f891652445273934HELLCATBoysNavyBlueTypography3PrintedBioFinishAppliqueT-shir1.jpg",
        "size": [
            "3-4Y",
            "5-6Y",
            "7-8Y",
            "9-10Y",
            "11-12Y"
        ],
        "rating": "4",
        "rating_count": "309"
    },
    {
        "category": "Child",
        "title": "Aj DEZInES",
        "subtitle": "Boys Solid Kurta Set",
        "discounted_price": "809",
        "strike_price": "2999",
        "discount": "(73% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/6/67da079f-ed42-4cfc-b4d3-7d99a4e679771609921410998-1.jpg",
        "size": [
            "18-24M, ",
            "2-3Y, ",
            "3-4Y, ",
            "4-5Y, ",
            "5-6Y, ",
            "6-7Y, ",
            "7-8Y, ",
            "8-9Y, ",
            "9-10Y, ",
            "10-11Y"
        ],
        "rating": "4.5",
        "rating_count": "181"
    },
    {
        "category": "Child",
        "title": "Superminis",
        "subtitle": "Pack of 6 Cotton Pyjamas",
        "discounted_price": "884",
        "strike_price": "1499",
        "discount": "(41% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15283758/2021/8/27/920404fc-ab6c-48cb-8c11-a5cd6bcce0d01630064142320Pyjamas1.jpg",
        "size": [
            "0-6M",
            "6-9M",
            "9-12M",
            "12-18M"
        ],
        "rating": "4.4",
        "rating_count": "278"
    },
    {
        "category": "Child",
        "title": "YK Disney",
        "subtitle": "Boys Pack of 3 Printed T-shirt",
        "discounted_price": "620",
        "strike_price": "2299",
        "discount": "(73% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18945468/2022/7/2/741645ef-724f-4fb4-b210-1049a2f0b6391656748413427Tshirts1.jpg",
        "size": [
            "7-8Y",
            "8-9Y",
            "9-10Y",
            "11-12Y",
            "13-14Y",
            "15-16Y"
        ],
        "rating": "4.5",
        "rating_count": "44"
    },
    {
        "category": "Child",
        "title": "VASTRAMAY",
        "subtitle": "Kids-Boys Kurta with Trousers",
        "discounted_price": "1649",
        "strike_price": "2999",
        "discount": "(45% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18898246/2022/6/29/10a1bd4c-03b8-41ea-bef8-90017384e2ef1656513837606VASTRAMAYBoysMaroonEthnicMotifsMirrorWorkKurtawithTrousersWi6.jpg",
        "size": [
            "2-3Y, ",
            "3-4Y, ",
            "4-5Y, ",
            "5-6Y, ",
            "6-7Y, ",
            "7-8Y, ",
            "8-9Y, ",
            "9-10Y, ",
            "10-11Y, ",
            "11-12Y, ",
            "12-13Y, ",
            "13-14Y, ",
            "14-15Y"
        ],
        "rating": "4.7",
        "rating_count": "17"
    },
    {
        "category": "Child",
        "title": "Luke & Lilly",
        "subtitle": "Boys Printed Sweatshirt",
        "discounted_price": "359",
        "strike_price": "1799",
        "discount": "(80% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16064124/2021/11/11/adb87bb3-3c99-4a37-8063-1d92172a788c1636633558253LukeLillyBoysOrangePrintedHoodedSweatshirt1.jpg",
        "size": [
            "12-18M",
            "18-24M",
            "2-3Y",
            "3-4Y",
            "4-5Y",
            "5-6Y"
        ],
        "rating": "4.1",
        "rating_count": "116"
    },
    {
        "category": "Child",
        "title": "HELLCAT",
        "subtitle": "Boys Set Of 3 Solid Cotton Track Pants",
        "discounted_price": "807",
        "strike_price": "2991",
        "discount": "(73% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18485368/2022/6/4/7753bb83-ff1c-4820-9d81-f95182ea21e61654342907960HELLCATBoysSetOf3SolidCottonTrackPants1.jpg",
        "size": [
            "3-4Y",
            "5-6Y",
            "7-8Y"
        ],
        "rating": "4.2",
        "rating_count": "99"
    },
    {
        "category": "Child",
        "title": "BONKIDS",
        "subtitle": "Boys Mickey Mouse Printed T-shirt",
        "discounted_price": "439",
        "strike_price": "1332",
        "discount": "(67% OFF)",
        "images": "./c2_files/e16d6879-8864-49c0-ae2a-5f6bd683f0581656519377064MickeyMouseboystshirt1.jpg",
        "size": [
            "2-3Y",
            "4-5Y",
            "6-7Y",
            "8-9Y",
            "10-11Y",
            "12-13Y"
        ],
        "rating": "4.5",
        "rating_count": "64"
    },
    {
        "category": "Child",
        "title": "A.T.U.N.",
        "subtitle": "Striped Cotton Casual Shirt",
        "discounted_price": "681",
        "strike_price": "2199",
        "discount": "(69% OFF)",
        "images": "./c2_files/d359732d-cca9-4cba-a96f-ef90564a75801661426403701ATUNBoysShirt1.jpg",
        "size": [
            "0-3M, ",
            "3-6M, ",
            "6-12M, ",
            "1-2Y, ",
            "2-3Y, ",
            "3-4Y, ",
            "4-5Y, ",
            "5-6Y, ",
            "6-7Y, ",
            "7-8Y, ",
            "8-9Y, ",
            "9-10Y, ",
            "10-11Y, ",
            "11-12Y, ",
            "12-13Y, ",
            "13-14Y, ",
            "14-15Y, ",
            "15-16Y"
        ],
        "rating": "3.8",
        "rating_count": "20"
    },
    {
        "category": "Child",
        "title": "U.S. Polo Assn. Kids",
        "subtitle": "Boys Solid Puffer Jacket",
        "discounted_price": "1649",
        "strike_price": "3299",
        "discount": "(50% OFF)",
        "images": "./c2_files/5f40e3c3-5bdf-4612-87cb-2e462bd0fd991663240573094USPoloAssnKidsBoysRedSolidPufferJacket1.jpg",
        "size": [
            "12M, ",
            "24M, ",
            "3Y, ",
            "4-5Y, ",
            "6-7Y, ",
            "8-9Y, ",
            "9-10Y, ",
            "10-11Y, ",
            "11-12Y, ",
            "13-14Y"
        ],
        "rating": "4.3",
        "rating_count": "44"
    },
    {
        "category": "Child",
        "title": "VASTRAMAY",
        "subtitle": "Boys White Kurta with Pyjamas",
        "discounted_price": "799",
        "strike_price": "1999",
        "discount": "(60% OFF)",
        "images": "./c2_files/a72b2c3b-3be8-41ba-9d3a-5f0c06842cce1629274439322VastramayBoysMulticolor-Base-WhiteCottonBlendKurtaPyjamaSet1.jpg",
        "size": [
            "2-3Y, ",
            "3-4Y, ",
            "4-5Y, ",
            "5-6Y, ",
            "6-7Y, ",
            "7-8Y, ",
            "9-10Y, ",
            "11-12Y, ",
            "13-14Y"
        ],
        "rating": "4",
        "rating_count": "154"
    },
    {
        "category": "Child",
        "title": "HELLCAT",
        "subtitle": "Boys Pack Of 3 Shorts",
        "discounted_price": "689",
        "strike_price": "2997",
        "discount": "(77% OFF)",
        "images": "./c2_files/6f20ed5c-4a54-4efa-97f1-b2849de668621652443211168HELLCATBoysMaroonShorts1.jpg",
        "size": [
            "11-12Y",
            "13-14Y",
            "15-16Y"
        ],
        "rating": "4.2",
        "rating_count": "256"
    },
    {
        "category": "Child",
        "title": "HELLCAT",
        "subtitle": "Boys Pack of 2 Hood T-shirts",
        "discounted_price": "599",
        "strike_price": "1999",
        "discount": "(70% OFF)",
        "images": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/16/fa4d5121-482e-4d4e-91ce-4f8f0eca1eb91602799579102-5.jpg",
        "size": [
            "3-4Y, ",
            "5-6Y, ",
            "7-8Y, ",
            "9-10Y, ",
            "11-12Y, ",
            "13-14Y, ",
            "15-16Y"
        ],
        "rating": "3.9",
        "rating_count": "1.3k"
    },
    {
        "category": "Child",
        "title": "Tiber Taber",
        "subtitle": "Boys Printed Kurta with Dhoti Pants",
        "discounted_price": "1452",
        "strike_price": "1650",
        "discount": "(12% OFF)",
        "images": "./c2_files/446cb0d6-e1aa-45b0-acb7-cdaa31cc3c5e1637992151710TiberTaberBoysYellowPrintedRegularPureCottonKurtawithDhotiPa1.jpg",
        "size": [
            "0-3M",
            "3-6M",
            "6-12M",
            "1-2Y",
            "2-3Y"
        ],
        "rating": "4.5",
        "rating_count": "169"
    },
    {
        "category": "Child",
        "title": "HELLCAT",
        "subtitle": "Boys Pack Of 3 Solid Track Pants",
        "discounted_price": "808",
        "strike_price": "2994",
        "discount": "(73% OFF)",
        "images": "./c2_files/b9715cd3-2fef-48da-b924-66766dca3f311654343094215HELLCATBoysPackOf3SolidTrackPants1.jpg",
        "size": [
            "9-10Y",
            "11-12Y",
            "13-14Y"
        ],
        "rating": "4.2",
        "rating_count": "9"
    },
    {
        "category": "Child",
        "title": "H&M",
        "subtitle": "Boys Printed T-shirt",
        "discounted_price": "239",
        "strike_price": "299",
        "discount": "(20% OFF)",
        "images": "./c2_files/968b5033-d847-49e0-8216-8ffedf3524551659767702420CottonT-shirt1.jpg",
        "size": [
            "18-24M",
            "2-4Y",
            "4-6Y",
            "6-8Y",
            "8-10Y"
        ],
        "rating": "4.1",
        "rating_count": "44"
    },
    {
        "category": "Mens",
        "title": "HRX by Hrithik Roshan",
        "subtitle": "Men Rapid Dry Running Joggers",
        "discounted_price": "664",
        "strike_price": "1899",
        "discount": "(65% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "3.7",
        "rating_count": "13.8k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Printed Casual Shirt",
        "discounted_price": "599",
        "strike_price": "1499",
        "discount": "(60% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "XXXL"
        ],
        "rating": "4.1",
        "rating_count": "25.9k"
    },
    {
        "category": "Mens",
        "title": "The Indian Garage Co",
        "subtitle": "Men Slim Fit Casual Shirt",
        "discounted_price": "626",
        "strike_price": "1649",
        "discount": "(62% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a3745ecd8f761569310358973-The-Indian-Garage-Co-Men-Shirts-8481569310357131-1.jpg",
        "size": [
            "39",
            "40",
            "42",
            "44",
            "46"
        ],
        "rating": "4.1",
        "rating_count": "8.2k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Time Travlr Slim Fit Chinos",
        "discounted_price": "859",
        "strike_price": "1999",
        "discount": "(57% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2290972/2018/5/5/11525515544459-Roadster-Men-Grey-Slim-Fit-Solid-Chinos-2351525515544256-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40"
        ],
        "rating": "4.2",
        "rating_count": "5.8k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Men Tapered Fit Chinos",
        "discounted_price": "743",
        "strike_price": "1549",
        "discount": "(52% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2290039/2022/7/13/9f725478-e4a1-4220-8e30-d157a7cf2b291657698446507HIGHLANDERMenBlackTaperedFitChinos1.jpg",
        "size": [
            "30",
            "32",
            "34",
            "36"
        ],
        "rating": "4.1",
        "rating_count": "12.7k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Slim Fit Jeans",
        "discounted_price": "719",
        "strike_price": "1499",
        "discount": "(52% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2356421/2019/5/3/a89c3143-0c54-454b-8d7a-f6668d2458731556873152837-Roadster-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Jeans-339155-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40"
        ],
        "rating": "3.8",
        "rating_count": "6.6k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Men Slim Fit Jeans",
        "discounted_price": "558",
        "strike_price": "1299",
        "discount": "(57% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/2/22/d80c3d85-a70b-4a20-8e49-6793311901ea1550824145033-1.jpg",
        "size": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "rating": "3.8",
        "rating_count": "9k"
    },
    {
        "category": "Mens",
        "title": "LOCOMOTIVE",
        "subtitle": "Men Slim Fit Casual Shirt",
        "discounted_price": "577",
        "strike_price": "1649",
        "discount": "(65% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/10341699/2022/8/25/c23fd879-a9b3-4515-a181-558523a71b9b1661423122029-LOCOMOTIVE-Men-Black--Grey-Slim-Fit-Checked-Casual-Shirt-342-1.jpg",
        "size": [
            "39",
            "40",
            "42",
            "44"
        ],
        "rating": "4.1",
        "rating_count": "5.7k"
    },
    {
        "category": "Mens",
        "title": "Dennis Lingo",
        "subtitle": "Men Slim Fit Casual Shirt",
        "discounted_price": "628",
        "strike_price": "1849",
        "discount": "(66% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
        "size": [
            "38",
            "40",
            "42",
            "44",
            "46"
        ],
        "rating": "4.1",
        "rating_count": "13.1k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Pure Cotton Casual Shirt",
        "discounted_price": "494",
        "strike_price": "1499",
        "discount": "(67% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
        "size": [
            "38",
            "40",
            "42",
            "44",
            "46",
            "48"
        ],
        "rating": "4.3",
        "rating_count": "34.3k"
    },
    {
        "category": "Mens",
        "title": "United Colors of Benetton",
        "subtitle": "Men Printed  Joggers",
        "discounted_price": "824",
        "strike_price": "1649",
        "discount": "(50% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/17565218/2022/6/6/05cf0d21-112c-4163-86eb-43e8048a9d4f1654514626287-United-Colors-of-Benetton-Men-Black-Brand-Logo-Printed-Jogge-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "rating": "4.7",
        "rating_count": "55"
    },
    {
        "category": "Mens",
        "title": "IVOC",
        "subtitle": "Men Slim Fit Cargos Trousers",
        "discounted_price": "1055",
        "strike_price": "2399",
        "discount": "(56% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16119774/2021/11/17/e9c84e47-a9d8-4d34-8b66-df65e81a19561637132978233IVOCMenOliveGreenSlimFitCargosTrousers1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36"
        ],
        "rating": "3.9",
        "rating_count": "700"
    },
    {
        "category": "Mens",
        "title": "Mast & Harbour",
        "subtitle": "Men Slim Tapered Crop Jeans",
        "discounted_price": "839",
        "strike_price": "2099",
        "discount": "(60% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/12542686/2020/12/7/7cf52149-982e-484d-9da0-4490f204642e1607324070805-Mast--Harbour-Men-Jeans-631607324067463-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36"
        ],
        "rating": "3",
        "rating_count": "1.3k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Solid Round Neck Pure Cotton T-shirt",
        "discounted_price": "189",
        "strike_price": "499",
        "discount": "(62% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/11306992/2020/6/9/ea2607ea-c2d3-4d27-94c3-5a67a76de4fd1591692498694-Roadster-Men-Tshirts-811591692497497-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL"
        ],
        "rating": "4.2",
        "rating_count": "7.2k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Super Skinny Fit Jeans",
        "discounted_price": "594",
        "strike_price": "1699",
        "discount": "(65% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/10046869/2021/12/9/9c11f1af-508a-46c3-beeb-bdc02c7032061639053610049-Roadster-Men-Navy-Blue-Super-Skinny-Fit-Low-Distress-Light-F-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40"
        ],
        "rating": "3.6",
        "rating_count": "6.7k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Men Slim Fit Casual Shirt",
        "discounted_price": "516",
        "strike_price": "1099",
        "discount": "(53% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg",
        "size": [
            "39",
            "40",
            "42",
            "44"
        ],
        "rating": "4.2",
        "rating_count": "6.3k"
    },
    {
        "category": "Mens",
        "title": "Dennis Lingo",
        "subtitle": "Men Slim Fit Casual Shirt",
        "discounted_price": "628",
        "strike_price": "1849",
        "discount": "(66% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg",
        "size": [
            "38",
            "40",
            "42",
            "44",
            "46"
        ],
        "rating": "4.2",
        "rating_count": "8.1k"
    },
    {
        "category": "Mens",
        "title": "DENNISON",
        "subtitle": "Men Tapered Fit Trousers",
        "discounted_price": "883",
        "strike_price": "2599",
        "discount": "(66% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7719550/2018/12/11/24edbba9-73c3-42c6-8ae8-41b09f871a201544530684914-DENNISON-Men-Trousers-5831544530683640-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40"
        ],
        "rating": "3.7",
        "rating_count": "2.8k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Solid Hooded Sweatshirt",
        "discounted_price": "569",
        "strike_price": "1499",
        "discount": "(62% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/11959226/2020/9/8/b770f528-4cc0-42db-8d45-b7d5838b84b61599556887939-Roadster-Men-Sweatshirts-8881599556886717-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.4",
        "rating_count": "1.2k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Casual Shirt",
        "discounted_price": "730",
        "strike_price": "1699",
        "discount": "(57% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/6788641/2018/11/6/0e8c57eb-31fa-4fcc-b376-ab917a4f98281541494278138-Roadster-Men-Grey-Regular-Fit-Solid-Casual-Shirt-32515414942-1.jpg",
        "size": [
            "38",
            "40",
            "42",
            "44",
            "46",
            "48"
        ],
        "rating": "4.2",
        "rating_count": "2.4k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Men Tapered Fit Jeans",
        "discounted_price": "623",
        "strike_price": "1299",
        "discount": "(52% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/8706059/2022/8/25/600ba77d-27a6-4d99-8f31-b349edb6aec81661422693616-HIGHLANDER-Men-Blue-Tapered-Fit-Mid-Rise-Clean-Look-Stretcha-1.jpg",
        "size": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "rating": "3.9",
        "rating_count": "11k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Skinny Fit Jeans",
        "discounted_price": "659",
        "strike_price": "1999",
        "discount": "(67% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/5669786/2018/6/12/f82ab435-ef59-4b2f-8b8b-cd6a73baae0f1528807444173-Roadster-Men-Navy-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-4881528807443954-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40"
        ],
        "rating": "3.8",
        "rating_count": "2.6k"
    },
    {
        "category": "Mens",
        "title": "HERE&NOW",
        "subtitle": "Men Cotton Casual Shirt",
        "discounted_price": "739",
        "strike_price": "1999",
        "discount": "( 63 % OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg",
        "size": [
            "38",
            "40",
            "42",
            "44",
            "46"
        ],
        "rating": "4.4",
        "rating_count": "5.6k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Cotton Cargo Trousers",
        "discounted_price": "791",
        "strike_price": "2399",
        "discount": "(67% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2291319/2022/6/20/6461f57a-ad48-43aa-b583-2e573e9be1441655707459223-Roadster-Men-Navy-Blue-Tapered-Fit-High-Rise-Joggers-Trouser-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40"
        ],
        "rating": "3.8",
        "rating_count": "5.1k"
    },
    {
        "category": "Mens",
        "title": "Levis",
        "subtitle": "Men 512 Slim Tapered Fit Jeans",
        "discounted_price": "2239",
        "strike_price": "3199",
        "discount": "(30% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18074930/2022/9/7/3e1e406e-df87-4b58-a237-0ef99c6c117f1662549504850-Levis-Men-Black-512-Slim-Tapered-Fit-Light-Fade-Mid-Rise-Str-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "rating": "4.3",
        "rating_count": "80"
    },
    {
        "category": "Mens",
        "title": "WROGN",
        "subtitle": "Bomber Jacket",
        "discounted_price": "2989",
        "strike_price": "4599",
        "discount": "(35% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/6832202/2022/2/22/c76c4342-4777-48ee-a72c-5496dcb3988b1645509675836-WROGN-Men-Charcoal-Grey-Solid-Bomber-4691645509675159-1.jpg",
        "size": [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4",
        "rating_count": "1.6k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Men Hooded Sweatshirt",
        "discounted_price": "899",
        "strike_price": "1799",
        "discount": "(50% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/19904808/2022/9/10/7d249b45-0305-4161-8c59-1bd99d3d1f8f1662808752903HIGHLANDERMenPurpleHoodedSweatshirt1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "rating": "4.9",
        "rating_count": "23"
    },
    {
        "category": "Mens",
        "title": "Urbano Fashion",
        "subtitle": "Slim Tropical Printed Pure Cotton T-shirt",
        "discounted_price": "439",
        "strike_price": "1099",
        "discount": "(60% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "rating": "4",
        "rating_count": "7.3k"
    },
    {
        "category": "Mens",
        "title": "WROGN",
        "subtitle": "Slim Fit Casual Shirt",
        "discounted_price": "1025",
        "strike_price": "2699",
        "discount": "(62% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2032621/2018/8/7/9dc8cfa9-a511-4504-840b-4c7e7b3320391533643723775-WROGN-Men-Blue--Green-Slim-Fit-Checked-Casual-Shirt-with-Det-1.jpg",
        "size": [
            "39",
            "40",
            "42",
            "44",
            "46"
        ],
        "rating": "4.2",
        "rating_count": "2.2k"
    },
    {
        "category": "Mens",
        "title": "High Star",
        "subtitle": "Men Solid Denim Jacket",
        "discounted_price": "1379",
        "strike_price": "2299",
        "discount": "(Rs. 920 OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/11275832/2022/4/6/0fedd175-efa2-4346-a6dd-a592b4790f2f1649234504796-High-Star-Men-Black-Solid-Denim-Jacket-3971649234504005-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "rating": "4.3",
        "rating_count": "4.4k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Skinny Fit Jeans",
        "discounted_price": "949",
        "strike_price": "2499",
        "discount": "(62% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/6772714/2018/7/31/c1b18bd9-f317-41a4-a626-f3d274e9bc7b1533015389260-Roadster-Men-Jeans-9121533015387558-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40"
        ],
        "rating": "4",
        "rating_count": "2k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Men Slim Fit Jeans",
        "discounted_price": "649",
        "strike_price": "1299",
        "discount": "(50% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/8890027/2022/9/26/f49a7b13-801f-42eb-8f9d-68daa2ad7ff41664184958547HIGHLANDERMenBlackSlimFitMid-RiseCleanLookStretchableJeans1.jpg",
        "size": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "rating": "3.9",
        "rating_count": "9.4k"
    },
    {
        "category": "Mens",
        "title": "KRA",
        "subtitle": "Men Slim Fit Cargos Trousers",
        "discounted_price": "2211",
        "strike_price": "2799",
        "discount": "(21% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/19557604/2022/9/19/9f5d5187-0fff-4d20-957f-301aa920b99a1663583460445KRAMenGreySlimFitOversizedPocketsCargosTrousers1.jpg",
        "size": [
            "30",
            "32",
            "34",
            "36"
        ],
        "rating": "4.2",
        "rating_count": "9"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Men Slim-Fit Track Pants",
        "discounted_price": "379",
        "strike_price": "999",
        "discount": "(62% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/9838377/2019/7/12/78179e92-0f78-4fca-8eb5-b0ca44a060b01562927656990-HIGHLANDER-Men-Black-Solid-Slim-Fit-Track-Pants-270156292765-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "rating": "4",
        "rating_count": "10k"
    },
    {
        "category": "Mens",
        "title": "Blackberrys",
        "subtitle": "Slim Fit Casual Shirt",
        "discounted_price": "1317",
        "strike_price": "2195",
        "discount": "(40% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/17852694/2022/8/9/658f9c06-5250-493d-9fb1-c6d0d48601f21660044685137-Blackberrys-Men-Shirts-3141660044684550-1.jpg",
        "size": [
            "38",
            "39",
            "40",
            "42",
            "44",
            "46"
        ],
        "rating": "3.3",
        "rating_count": "3"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Pack Of 2 Shirts",
        "discounted_price": "1289",
        "strike_price": "2999",
        "discount": "(57% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2038071/2019/4/9/ace5c891-0717-485c-8080-9c37c5c759821554799993054-Roadster-Men-Black--White-Slim-Fit-Solid-Casual-Shirt-322155-1.jpg",
        "size": [
            "38",
            "40",
            "42",
            "44",
            "46",
            "48"
        ],
        "rating": "4.2",
        "rating_count": "4.4k"
    },
    {
        "category": "Mens",
        "title": "WROGN",
        "subtitle": "Men Slim Fit Jeans",
        "discounted_price": "1139",
        "strike_price": "2999",
        "discount": "(62% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7229767/2022/6/9/a12fb5e1-6aed-482b-bd23-a4f03d42eaaf1654769232455-WROGN-Men-Blue-Slim-Fit-Light-Fade-Stretchable-Jeans-2541654-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "rating": "3.6",
        "rating_count": "1.5k"
    },
    {
        "category": "Mens",
        "title": "HERE&NOW",
        "subtitle": "Men Cotton Casual Shirt",
        "discounted_price": "799",
        "strike_price": "1999",
        "discount": "(Rs. 1200 OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2414313/2022/4/18/c08becf1-36fc-4c1f-a3c9-92542d3ef8221650284958075HERENOWMenRedBlackCheckedPureCottonCasualShirt1.jpg",
        "size": [
            "38",
            "40",
            "42",
            "44",
            "46"
        ],
        "rating": "4.3",
        "rating_count": "13.5k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Slim Fit Casual Shirt",
        "discounted_price": "469",
        "strike_price": "999",
        "discount": "(53% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/1291760/2017/12/5/11512469309123-Highlander-Dark-Green-Slim-Fit-Casual-Shirt-5071512469308877-1.jpg",
        "size": [
            "39",
            "40",
            "42",
            "44",
            "46"
        ],
        "rating": "4.3",
        "rating_count": "15.8k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Solid Round Neck T-shirt",
        "discounted_price": "179",
        "strike_price": "399",
        "discount": "(55% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/3314157/2018/4/18/11524041081440-Roadster-Men-Grey-Melange-Solid-Round-Neck-T-shirt-3461524041081257-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL"
        ],
        "rating": "4.1",
        "rating_count": "8.7k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Time Travlr Slim Fit Jeans",
        "discounted_price": "623",
        "strike_price": "1299",
        "discount": "(52% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2312011/2018/4/20/11524215901340-Roadster-Men-Navy-Blue-Slim-Fit-Mid-Rise-Clean-Look-Jeans-5181524215901159-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40"
        ],
        "rating": "3.8",
        "rating_count": "4.9k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Men Tapered Fit Jeans",
        "discounted_price": "623",
        "strike_price": "1299",
        "discount": "(52% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/9162835/2022/8/5/9a32d6ad-f53d-44f3-91c0-a7e73b37dc7d1659708668549HIGHLANDERMenGreyTaperedFitMid-RiseCleanLookStretchableJeans1.jpg",
        "size": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "rating": "3.8",
        "rating_count": "7.4k"
    },
    {
        "category": "Mens",
        "title": "Mast & Harbour",
        "subtitle": "Men Cotton Casual Shirt",
        "discounted_price": "939",
        "strike_price": "1999",
        "discount": "(53% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2389865/2019/2/11/3a933326-e756-4d16-a403-5dd2362bfca41549869035664-Mast--Harbour-Men-Green-Slim-Fit-Solid-Casual-Shirt-48154986-1.jpg",
        "size": [
            "38",
            "40",
            "42",
            "44"
        ],
        "rating": "4.3",
        "rating_count": "1.4k"
    },
    {
        "category": "Mens",
        "title": "LOCOMOTIVE",
        "subtitle": "Men Tapered Fit Jeans",
        "discounted_price": "749",
        "strike_price": "2499",
        "discount": "(70% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/10143657/2022/8/25/8ca8519c-a5fb-4b63-8c86-82d8a6db0ecd1661423073986-LOCOMOTIVE-Men-Navy-Blue-Tapered-Fit-Mid-Rise-Clean-Look-Str-1.jpg",
        "size": [
            "30",
            "32",
            "34",
            "36"
        ],
        "rating": "3.9",
        "rating_count": "2k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Cotton Casual Shirt",
        "discounted_price": "689",
        "strike_price": "2299",
        "discount": "(70% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/8894747/2019/7/1/f20f58d4-acd3-4abe-af31-268f828e81191561981847991-Roadster-Men-Coffee-Brown-Regular-Fit-Solid-Casual-Shirt-464-1.jpg",
        "size": [
            "38",
            "40",
            "42",
            "44",
            "46",
            "48"
        ],
        "rating": "4",
        "rating_count": "3k"
    },
    {
        "category": "Mens",
        "title": "HRX by Hrithik Roshan",
        "subtitle": "Men Regular Training Joggers",
        "discounted_price": "944",
        "strike_price": "2699",
        "discount": "(65% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/10498568/2020/6/10/f1bc48ac-9997-4be1-8ce3-81cc6d5e61061591736177979-HRX-by-Hrithik-Roshan-Men-Grey-Solid-Regular-Fit-Training-Jo-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "3.9",
        "rating_count": "2.4k"
    },
    {
        "category": "Mens",
        "title": "HRX by Hrithik Roshan",
        "subtitle": "Men Regular Training Joggers",
        "discounted_price": "944",
        "strike_price": "2699",
        "discount": "(65% OFF)",
        "images": "./m2_files/f1bc48ac-9997-4be1-8ce3-81cc6d5e61061591736177979-HRX-by-Hrithik-Roshan-Men-Grey-Solid-Regular-Fit-Training-Jo-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "3.9",
        "rating_count": "2.4k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Men Tapered Fit Jeans",
        "discounted_price": "645",
        "strike_price": "1699",
        "discount": "(62% OFF)",
        "images": "./m2_files/11522151773410-HIGHLANDER-Men-Blue-Tapered-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-7601522151773234-1.jpg",
        "size": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "rating": "3.8",
        "rating_count": "5.9k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Skinny Fit Jeans",
        "discounted_price": "759",
        "strike_price": "1999",
        "discount": "(62% OFF)",
        "images": "./m2_files/f5d1a03b-1105-4365-bc34-a78cd484d59e1563255429047-Roadster-Men-Jeans-3711563255427297-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40"
        ],
        "rating": "3.8",
        "rating_count": "2.1k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Slim Fit Casual Shirt",
        "discounted_price": "419",
        "strike_price": "1049",
        "discount": "(60% OFF)",
        "images": "./m2_files/aba49564-4134-4126-ab19-8df7ae2a34d71593000903721HIGHLANDERMenWhiteSlimFitPrintedCasualShirt1.jpg",
        "size": [
            "39",
            "40",
            "42",
            "44"
        ],
        "rating": "4.3",
        "rating_count": "4.9k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Washed Casual Shirt",
        "discounted_price": "719",
        "strike_price": "1799",
        "discount": "(60% OFF)",
        "images": "./m2_files/11472645521752-Roadster-Men-Charcoal-Regular-Fit-Washed-Casual-Shirt-1861472645521489-1.jpg",
        "size": [
            "38",
            "40",
            "42",
            "44",
            "46",
            "48"
        ],
        "rating": "4.2",
        "rating_count": "2.6k"
    },
    {
        "category": "Mens",
        "title": "WROGN",
        "subtitle": "Men Slim Fit Casual Shirt",
        "discounted_price": "1259",
        "strike_price": "2799",
        "discount": "(55% OFF)",
        "images": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/6832694/2019/6/20/0ce54d77-9b6c-4fd9-a973-955901158e111561011505531-WROGN-Men-Blue-Slim-Fit-Faded-Casual-Shirt-6921561011503453-6.jpg",
        "size": [
            "39",
            "40",
            "42",
            "44",
            "46"
        ],
        "rating": "4.1",
        "rating_count": "2.2k"
    },
    {
        "category": "Mens",
        "title": "HRX by Hrithik Roshan",
        "subtitle": "Ultralyte Men Running T-shirt",
        "discounted_price": "584",
        "strike_price": "899",
        "discount": "(35% OFF)",
        "images": "./m2_files/ebd42abb-c45f-4290-b8e7-073f18f3b8541607088518050-HRX-by-Hrithik-Roshan-Ultralyte-Men-Black-Solid-Running-T-sh-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.4",
        "rating_count": "11.3k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Slim Casual Shirt",
        "discounted_price": "529",
        "strike_price": "999",
        "discount": "(47% OFF)",
        "images": "./m2_files/20ed5c08-b7f2-4314-ae55-4940ea6bd7881535444945463-Highlander-Burgundy-Slim-Fit-Casual-Shirt-3631535444945249-1.jpg",
        "size": [
            "39",
            "40",
            "42",
            "44",
            "46"
        ],
        "rating": "4.2",
        "rating_count": "9.6k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Men Casual Trousers",
        "discounted_price": "679",
        "strike_price": "999",
        "discount": "(32% OFF)",
        "images": "./m2_files/25c47c73-44ed-4939-89a2-eaefce6733c81552645766838-Highlander-Black-Solid-Chinos-801552645765097-1.jpg",
        "size": [
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "rating": "4.2",
        "rating_count": "2.9k"
    },
    {
        "category": "Mens",
        "title": "HERE&NOW",
        "subtitle": "Solid Round Neck T-shirt",
        "discounted_price": "244",
        "strike_price": "699",
        "discount": "(65% OFF)",
        "images": "./m2_files/62fa7132-82a3-4466-b4c6-9ee3e1a33d141606736025690-HERENOW-Men-Tshirts-4781606736024364-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "rating": "4.2",
        "rating_count": "1.8k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Skinny Fit Jeans",
        "discounted_price": "1049",
        "strike_price": "2999",
        "discount": "(65% OFF)",
        "images": "./m2_files/39287e29-0f88-47b3-b1d9-b33095aab3a31600932034431-Roadster-Men-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40"
        ],
        "rating": "3.6",
        "rating_count": "1.7k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Regular Fit Regular Shorts",
        "discounted_price": "493",
        "strike_price": "1299",
        "discount": "(62% OFF)",
        "images": "./m2_files/11520858607537-Roadster-Men-Charcoal-Solid-Regular-Fit-Regular-Shorts-5591520858607363-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36"
        ],
        "rating": "4.1",
        "rating_count": "4.8k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Solid Sweatshirt",
        "discounted_price": "688",
        "strike_price": "1299",
        "discount": "(47% OFF)",
        "images": "./m2_files/3afd98da-3278-4179-827f-647bbac0e9511650284917884TheRoadsterLifestyleCoMenBlackSolidHoodedSweatshirt1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL"
        ],
        "rating": "4.4",
        "rating_count": "5.1k"
    },
    {
        "category": "Mens",
        "title": "WROGN",
        "subtitle": "Men Slim Fit Casual Shirt",
        "discounted_price": "1324",
        "strike_price": "2499",
        "discount": "(47% OFF)",
        "images": "./m2_files/11522828290402-WROGN-Men-Blue--Brown-Slim-Fit-Checked-Casual-Shirt-1451522828290200-1.jpg",
        "size": [
            "39",
            "40",
            "42",
            "44",
            "46"
        ],
        "rating": "4.2",
        "rating_count": "2.8k"
    },
    {
        "category": "Mens",
        "title": "Artengo By Decathlon",
        "subtitle": "Men Regular Fit Sports Shorts",
        "discounted_price": "359",
        "strike_price": "499",
        "discount": "(28% OFF)",
        "images": "./m2_files/f4305e3c-c3c8-41d9-8a86-910e4d143eef1605626008106-1.jpg",
        "size": [
            "30",
            "32",
            "34",
            "37",
            "41"
        ],
        "rating": "4.3",
        "rating_count": "4.2k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Slim Fit Jeans",
        "discounted_price": "645",
        "strike_price": "1699",
        "discount": "(62% OFF)",
        "images": "./m2_files/246c798f-5955-456b-983b-a4edd54fd5d91542623547987-Roadster-Men-Jeans-311542623547790-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40"
        ],
        "rating": "3.3",
        "rating_count": "1.2k"
    },
    {
        "category": "Mens",
        "title": "FITINC",
        "subtitle": "Men Solid Slim-Fit Track Pants",
        "discounted_price": "699",
        "strike_price": "1499",
        "discount": "(Rs. 800 OFF)",
        "images": "./m2_files/da8b5762-613a-479b-ae6d-d8fc1daaba291661524114870FITINCMenBlueSolidSlim-FitTrackPants1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL"
        ],
        "rating": "4.3",
        "rating_count": "7"
    },
    {
        "category": "Mens",
        "title": "HERE&NOW",
        "subtitle": "Slim Fit Striped Casual Shirt",
        "discounted_price": "799",
        "strike_price": "1899",
        "discount": "(Rs. 1100 OFF)",
        "images": "./m2_files/e5d1b51e-5b35-42c2-8b72-172ef691e4611606827861846-HERENOW-Men-Shirts-5891606827859535-1.jpg",
        "size": [
            "38",
            "40",
            "42",
            "44",
            "46"
        ],
        "rating": "4.4",
        "rating_count": "2k"
    },
    {
        "category": "Mens",
        "title": "Puma",
        "subtitle": "Men Slim Fit Track Suit",
        "discounted_price": "2949",
        "strike_price": "4999",
        "discount": "( 41 % OFF)",
        "images": "./m2_files/18db07c3-5992-482c-9cdd-9de07b6ab6e41651662010592PumaMenBlackSolidSlimFitTrackSuit1.jpg",
        "size": [
            "XXS",
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.4",
        "rating_count": "109"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Typography Cotton T-shirt",
        "discounted_price": "257",
        "strike_price": "599",
        "discount": "(57% OFF)",
        "images": "./m2_files/11517216335231-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL"
        ],
        "rating": "4",
        "rating_count": "21.2k"
    },
    {
        "category": "Mens",
        "title": "DILLINGER",
        "subtitle": "Striped Cotton Pure Cotton T-shirt",
        "discounted_price": "491",
        "strike_price": "1199",
        "discount": "(59% OFF)",
        "images": "./m2_files/34b589c2-80b9-4ad9-81ea-84333fbc46761575972548055-DILLINGER-Men-Tshirts-4071575972546110-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.3",
        "rating_count": "11.1k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Men Slim Fit Casual Shirt",
        "discounted_price": "399",
        "strike_price": "999",
        "discount": "(60% OFF)",
        "images": "./m2_files/df770860-fbe0-49a1-ab4f-0f79dc55a3fd1539333747455-HIGHLANDER-Men-Teal-Slim-Fit-Solid-Casual-Shirt-167153933374-1.jpg",
        "size": [
            "39",
            "40",
            "42",
            "44"
        ],
        "rating": "4.1",
        "rating_count": "1.9k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Men Sweatshirt",
        "discounted_price": "699",
        "strike_price": "1749",
        "discount": "(60% OFF)",
        "images": "./m2_files/7b7be50e-942b-42f2-afc5-c485b3c5e7a51662808302101HIGHLANDERMenBlueSweatshirt1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "rating": "4.7",
        "rating_count": "17"
    },
    {
        "category": "Mens",
        "title": "HERE&NOW",
        "subtitle": "Slim Fit Casual Shirt",
        "discounted_price": "699",
        "strike_price": "1999",
        "discount": "(65% OFF)",
        "images": "./m2_files/1b126a1a-259c-4e77-8039-503fb250daad1651661065083HERENOWMenWhiteSlimFitStripedCasualShirt1.jpg",
        "size": [
            "38",
            "40",
            "42",
            "44",
            "46"
        ],
        "rating": "4.2",
        "rating_count": "90"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Solid Bomber Jacket",
        "discounted_price": "987",
        "strike_price": "2599",
        "discount": "(62% OFF)",
        "images": "./m2_files/11510738725818-Roadster-Men-Black-Solid-Bomber-Jacket-4161510738725637-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "XXXL",
            "3XL"
        ],
        "rating": "4.4",
        "rating_count": "1.8k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Regular Fit Casual Shirt",
        "discounted_price": "873",
        "strike_price": "2299",
        "discount": "(62% OFF)",
        "images": "./m2_files/90ae3074-3fe6-4802-94d9-a1234fb74e8f1566474919386-Roadster-Men-Shirts-321566474918087-1.jpg",
        "size": [
            "38",
            "40",
            "42",
            "44"
        ],
        "rating": "4",
        "rating_count": "616"
    },
    {
        "category": "Mens",
        "title": "HRX by Hrithik Roshan",
        "subtitle": "Men Solid Joggers",
        "discounted_price": "594",
        "strike_price": "1699",
        "discount": "(65% OFF)",
        "images": "./m2_files/4010da6c-79a6-4452-aca8-006502ec55141526534323055-HRX-by-Hrithik-Roshan-Men-Track-Pants-451526534322918-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.1",
        "rating_count": "11k"
    },
    {
        "category": "Mens",
        "title": "Nike",
        "subtitle": "Men AS DNA Woven Track Pants",
        "discounted_price": "2271",
        "strike_price": "3495",
        "discount": "(35% OFF)",
        "images": "./m2_files/7debf1ea-bcd6-4e10-96bf-ae5c922717491623319392863-Nike-DNA-Mens-Basketball-Woven-Pants-2681623319392407-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.1",
        "rating_count": "214"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Solid Round Neck Pure Cotton T-shirt",
        "discounted_price": "399",
        "strike_price": "999",
        "discount": "(Rs. 600 OFF)",
        "images": "./m2_files/9447a845-892a-49f5-91ee-4de8a6589a541581587257528-Roadster-Men-Tshirts-8221581587255142-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL"
        ],
        "rating": "4",
        "rating_count": "6.5k"
    },
    {
        "category": "Mens",
        "title": "Levis",
        "subtitle": "Men Tapered Fit Jeans",
        "discounted_price": "2239",
        "strike_price": "3199",
        "discount": "(30% OFF)",
        "images": "./m2_files/9dde956b-a0a3-41d4-8833-7d3c312a8bce1654604272747-Levis-Men-Jeans-8141654604272117-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "rating": "4.4",
        "rating_count": "53"
    },
    {
        "category": "Mens",
        "title": "PUMA Motorsport",
        "subtitle": "Brand Logo Sporty Track Jacket",
        "discounted_price": "3199",
        "strike_price": "7999",
        "discount": "(60% OFF)",
        "images": "./m2_files/3dc42c85-a54c-435c-bb74-3503de8e705f1629889229951-PUMA-Motorsport-Men-Jackets-1761629889229282-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.5",
        "rating_count": "182"
    },
    {
        "category": "Mens",
        "title": "Moda Rapido",
        "subtitle": "Printed Cotton Pure Cotton T-shirt",
        "discounted_price": "399",
        "strike_price": "799",
        "discount": "(Rs. 400 OFF)",
        "images": "./m2_files/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "3.7",
        "rating_count": "23.8k"
    },
    {
        "category": "Mens",
        "title": "WROGN",
        "subtitle": "Men Slim Fit Jeans",
        "discounted_price": "1214",
        "strike_price": "2699",
        "discount": "(55% OFF)",
        "images": "./m2_files/91d0d216-25f0-499b-a009-91dafc07cb3a1654769216992-WROGN-Men-Grey-Slim-Fit-Light-Fade-Stretchable-Jeans-3201654-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "rating": "4",
        "rating_count": "1.3k"
    },
    {
        "category": "Mens",
        "title": "HERE&NOW",
        "subtitle": "Printed Pullover Sweatshirt",
        "discounted_price": "489",
        "strike_price": "1399",
        "discount": "(65% OFF)",
        "images": "./m2_files/6c19e91e-911e-4a01-8fef-94db92e30f1e1604727921718-HERENOW-Men-Sweatshirts-5491604727920321-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.4",
        "rating_count": "1.1k"
    },
    {
        "category": "Mens",
        "title": "Puma",
        "subtitle": "Men Colourblocked Joggers",
        "discounted_price": "1484",
        "strike_price": "3299",
        "discount": "(55% OFF)",
        "images": "./m2_files/400cfe3d-6a9a-45d8-8008-41ab431ce5721652350717156-Puma-Men-Track-Pants-3831652350716513-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.7",
        "rating_count": "32"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Slim Fit Jeans",
        "discounted_price": "539",
        "strike_price": "1999",
        "discount": "(73% OFF)",
        "images": "./m2_files/a99fc558-0245-419f-932b-efd5f1895d581658124980099-Roadster-Men-Black-Slim-Fit-Mid-Rise-Stretchable-Jeans-61416-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36"
        ],
        "rating": "3.8",
        "rating_count": "670"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Slim Cotton Linen Casual Shirt",
        "discounted_price": "554",
        "strike_price": "1499",
        "discount": "(63% OFF)",
        "images": "./m2_files/5b9a1046-2369-4976-9ece-d8e0013e06fb1602716976713-1.jpg",
        "size": [
            "39",
            "40",
            "42",
            "44"
        ],
        "rating": "4.3",
        "rating_count": "1.5k"
    },
    {
        "category": "Mens",
        "title": "Allen Solly Sport",
        "subtitle": "White And Blue Casual Shirt",
        "discounted_price": "1241",
        "strike_price": "1799",
        "discount": "(31% OFF)",
        "images": "./m2_files/0f8da751-ec7b-460d-8b74-e373b05708621660117706801AllenSollyWhiteShirt1.jpg",
        "size": [
            "38",
            "39",
            "40",
            "42"
        ],
        "rating": "4.8",
        "rating_count": "5"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Printed Henley T-shirt",
        "discounted_price": "399",
        "strike_price": "799",
        "discount": "(Rs. 400 OFF)",
        "images": "./m2_files/11472626355661-Roadster-Men-Bronze-Printed-V-Neck-T-Shirt-2251472626355441-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL"
        ],
        "rating": "4.2",
        "rating_count": "5.6k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Solid Denim Jacket",
        "discounted_price": "692",
        "strike_price": "2099",
        "discount": "(67% OFF)",
        "images": "./m2_files/c19d430d-ea70-42d4-ba4b-da3cde8478e11627373157096HIGHLANDERMenPurpleSolidDenimJacket1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "rating": "4.2",
        "rating_count": "1.3k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Skinny Fit Jeans",
        "discounted_price": "759",
        "strike_price": "1999",
        "discount": "(62% OFF)",
        "images": "./m2_files/c07aadad-5fee-423b-a280-f90d46d8a3b11615788949490-Roadster-Men-Navy-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stretc-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40"
        ],
        "rating": "3.7",
        "rating_count": "405"
    },
    {
        "category": "Mens",
        "title": "LOCOMOTIVE",
        "subtitle": "Men Slim Fit Jeans",
        "discounted_price": "749",
        "strike_price": "2499",
        "discount": "(70% OFF)",
        "images": "./m2_files/30ed37f1-beb1-478f-893c-1dafb21fae721559718143504-1.jpg",
        "size": [
            "30",
            "32",
            "34",
            "36"
        ],
        "rating": "3.9",
        "rating_count": "1.4k"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Cotton Casual Shirt",
        "discounted_price": "519",
        "strike_price": "1299",
        "discount": "(60% OFF)",
        "images": "./m2_files/779ac019-8b8c-48f7-9c5e-b3e2fe3004b01645166457327-Men-White-Casual-Shirt-5731645166456476-1.jpg",
        "size": [
            "38",
            "40",
            "42",
            "44"
        ],
        "rating": "3.9",
        "rating_count": "340"
    },
    {
        "category": "Mens",
        "title": "Roadster",
        "subtitle": "Men Solid Sweatshirt",
        "discounted_price": "741",
        "strike_price": "1399",
        "discount": "(47% OFF)",
        "images": "./m2_files/da83c4d2-8416-4f3a-bc6d-46129eaf5ef71540895310508-Roadster-Men-Black-Solid-Sweatshirt-9721540895310347-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4",
        "rating_count": "8.1k"
    },
    {
        "category": "Mens",
        "title": "Mast & Harbour",
        "subtitle": "Men Casual Shirt",
        "discounted_price": "626",
        "strike_price": "1899",
        "discount": "(67% OFF)",
        "images": "./m2_files/3477af99-9ab7-4786-b0b0-120fd3908ebf1658313200930-Mast--Harbour-Men-Blue-Solid-Casual-Pure-Cotton-Shirt-180165-1.jpg",
        "size": [
            "38",
            "40",
            "42",
            "44"
        ],
        "rating": "3.9",
        "rating_count": "1.5k"
    },
    {
        "category": "Mens",
        "title": "HIGHLANDER",
        "subtitle": "Slim Fit Casual Shirt",
        "discounted_price": "469",
        "strike_price": "999",
        "discount": "(53% OFF)",
        "images": "./m2_files/12fc0ced-84b7-4933-8cbc-5a7832c7686e1579504849580-Highlander-Black-Slim-Fit-Casual-Shirt-2521579504847937-1.jpg",
        "size": [
            "39",
            "40",
            "42",
            "44",
            "46"
        ],
        "rating": "4.3",
        "rating_count": "10.2k"
    },
    {
        "category": "Mens",
        "title": "Levis",
        "subtitle": "Men 511 Slim Fit Jeans",
        "discounted_price": "2239",
        "strike_price": "3199",
        "discount": "(30% OFF)",
        "images": "./m2_files/73dccff7-26d4-4ed0-a1ae-4530fa23644c1663225703199-Levis-Men-Blue-511-Slim-Fit-Heavy-Fade-Stretchable-Jeans-714-1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38"
        ],
        "rating": "4.2",
        "rating_count": "33"
    },
    {
        "category": "Mens",
        "title": "Campus Sutra",
        "subtitle": "Colourblocked Cotton Pure Cotton T-shirt",
        "discounted_price": "399",
        "strike_price": "949",
        "discount": "(Rs. 550 OFF)",
        "images": "./m2_files/b5caaca7-b5e8-4134-9283-65473a2388031561026348090-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "rating": "3.7",
        "rating_count": "17k"
    },
    {
        "category": "Womens",
        "title": "KALINI",
        "subtitle": "Women Yoke Design Kurta Set",
        "discounted_price": "887",
        "strike_price": "3699",
        "discount": "(76% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.1",
        "rating_count": "1.9k"
    },
    {
        "category": "Womens",
        "title": "Khushal K",
        "subtitle": "Women Kurta Set With Dupatta",
        "discounted_price": "1529",
        "strike_price": "5099",
        "discount": "(70% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.4",
        "rating_count": "5.9k"
    },
    {
        "category": "Womens",
        "title": "Anouk",
        "subtitle": "Kurta with Palazzos & Dupatta",
        "discounted_price": "1329",
        "strike_price": "3799",
        "discount": "(65% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14399812/2021/6/11/61ac3eaa-c553-4230-9458-28aa7bd088301623391467623-Anouk-Women-Kurta-Sets-961623391466905-11.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL"
        ],
        "rating": "4.2",
        "rating_count": "1.7k"
    },
    {
        "category": "Womens",
        "title": "Indo Era",
        "subtitle": "Zari Embroidered Kurta set",
        "discounted_price": "1399",
        "strike_price": "6999",
        "discount": "(80% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13962282/2021/7/5/26f8c8a9-e900-4510-9fb0-ac42f029442c1625483017312-Indo-Era-Beigh-Embroidered-Straight-Kurta-Palazzo-With-Dupat-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.3",
        "rating_count": "3.4k"
    },
    {
        "category": "Womens",
        "title": "KALINI",
        "subtitle": "Women Kurta with Palazzos With Dupatta",
        "discounted_price": "799",
        "strike_price": "3635",
        "discount": "(78% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18815868/2022/6/22/59d0e321-c48a-409a-9626-596b088187d21655880734773KALINIWomenBlueStraightKurtawithPalazzoDupatta7.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL",
            "5XL"
        ],
        "rating": "4.2",
        "rating_count": "865"
    },
    {
        "category": "Womens",
        "title": "Khushal K",
        "subtitle": "Women Yoke Design Kurta with Palazzos With Dupatta",
        "discounted_price": "1529",
        "strike_price": "5099",
        "discount": "(70% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18483950/2022/6/7/23c59537-fcac-40b1-8e64-4818e8a3e21d1654577763968-Khushal-K-Women-Pink-Ethnic-Motifs-Beads-and-Stones-Kurta-wi-11.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.4",
        "rating_count": "1.3k"
    },
    {
        "category": "Womens",
        "title": "Anubhutee",
        "subtitle": "Women Embroidered Kurta with Trousers With Dupatta",
        "discounted_price": "1469",
        "strike_price": "4899",
        "discount": "(70% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16331376/2021/12/2/b8c4f90f-683c-48d2-b8ac-19891a87c0651638428628378KurtaSets1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.1",
        "rating_count": "2.6k"
    },
    {
        "category": "Womens",
        "title": "Anouk",
        "subtitle": "Yoke Design Kurta with Trousers & Dupatta",
        "discounted_price": "979",
        "strike_price": "2799",
        "discount": "(65% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL"
        ],
        "rating": "4.3",
        "rating_count": "7.7k"
    },
    {
        "category": "Womens",
        "title": "KALINI",
        "subtitle": "Women Printed Kurta with Trousers",
        "discounted_price": "767",
        "strike_price": "3199",
        "discount": "(76% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18709124/2022/6/11/4fc5a841-d80c-4e7b-9a7b-4e17134b4c401654948355691KALINIWomenBlueStraightPrintedKurtawithTrouser7.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL",
            "5XL"
        ],
        "rating": "4",
        "rating_count": "229"
    },
    {
        "category": "Womens",
        "title": "Ahalyaa",
        "subtitle": "Women Printed Kurta with Palazzos With Dupatta",
        "discounted_price": "1560",
        "strike_price": "6000",
        "discount": "(74% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14951330/2022/2/16/e6b90907-a613-45e1-9b2e-988caaba36581645010770505-Ahalyaa-Women-Beige-Floral-Printed-Regular-Gotta-Patti-Kurta-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "3.6",
        "rating_count": "2.4k"
    },
    {
        "category": "Womens",
        "title": "KALINI",
        "subtitle": "Women Printed Kurta with Trousers With Dupatta",
        "discounted_price": "874",
        "strike_price": "3499",
        "discount": "(75% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/17741474/2022/4/4/3d3b3582-de6e-4514-b39d-9314d7bed3861649077991860KALINIWomenPinkAngrakhaKurtiwithTrousersWithDupatta7.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4",
        "rating_count": "1.1k"
    },
    {
        "category": "Womens",
        "title": "Anouk",
        "subtitle": "Printed Kurta with Palazzos",
        "discounted_price": "879",
        "strike_price": "2199",
        "discount": "(60% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL"
        ],
        "rating": "4.3",
        "rating_count": "8k"
    },
    {
        "category": "Womens",
        "title": "Nayo",
        "subtitle": "Women Kurta With Trouser",
        "discounted_price": "1368",
        "strike_price": "3699",
        "discount": "(63% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14709966/2021/7/10/d2407657-1f04-4d13-9f52-9e134050489b1625905793495-Nayo-Women-Red-Ethnic-Motifs-Printed-Empire-Pure-Cotton-Kurt-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL"
        ],
        "rating": "4.1",
        "rating_count": "5.3k"
    },
    {
        "category": "Womens",
        "title": "Varanga",
        "subtitle": "Chanderi Yoke Design Kurta Set",
        "discounted_price": "1499",
        "strike_price": "5999",
        "discount": "(Rs. 4500 OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/12541372/2020/11/6/da18ab22-79a1-46f0-a0cf-58c313fe98881604665115144VarangaWomenMauveZariYokeDesignChanderiSilkKurtawithTrousers1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.3",
        "rating_count": "4.8k"
    },
    {
        "category": "Womens",
        "title": "KALINI",
        "subtitle": "Women Yoke Design Kurta with Palazzos With Dupatta",
        "discounted_price": "887",
        "strike_price": "3699",
        "discount": "(76% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16836356/2022/3/24/f41645f5-e62e-452c-ade0-f132d5de30e51648119245986-KALINI-Women-Blue-Yoke-Design-Kurta-with-Palazzos--With-Dupa-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.2",
        "rating_count": "3.6k"
    },
    {
        "category": "Womens",
        "title": "Khushal K",
        "subtitle": "Women Pure Cotton Kurta Set",
        "discounted_price": "1589",
        "strike_price": "5299",
        "discount": "(70% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/17048604/2022/2/4/11b842c5-d9d4-4fee-baa2-0972e3a673641643970773675KhushalKWomenGreenEthnicMotifsPrintedEmpireGottaPattiPureCot7.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.3",
        "rating_count": "2.2k"
    },
    {
        "category": "Womens",
        "title": "Anouk",
        "subtitle": "Embroidered Kurta with Palazzos",
        "discounted_price": "999",
        "strike_price": "2499",
        "discount": "(60% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13791608/2022/2/14/09516263-6380-4df1-a7f6-647fc2ff1a511644842630055-Anouk-Women-Pink-Embroidered-Kurta-with-Palazzos-77516448426-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL"
        ],
        "rating": "4.4",
        "rating_count": "12.2k"
    },
    {
        "category": "Womens",
        "title": "Varanga",
        "subtitle": "Embroidered Kurta with Trousers & Dupatta",
        "discounted_price": "1199",
        "strike_price": "3999",
        "discount": "(Rs. 2800 OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13647608/2021/3/2/dd82eca7-3453-4fec-ae49-0f0b13d7f5591614669872253-Varanga-Women-Kurta-Sets-8471614669870339-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.1",
        "rating_count": "4.1k"
    },
    {
        "category": "Womens",
        "title": "KALINI",
        "subtitle": "Women Printed Kurta with Trousers With Dupatta",
        "discounted_price": "872",
        "strike_price": "3635",
        "discount": "(76% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18119958/2022/5/2/7989345f-3f73-4aa1-b802-4343ddee58da1651485521793KALINIWomenBlueEmbroideredPanelledKurtiwithTrousersWithDupat7.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "3.9",
        "rating_count": "527"
    },
    {
        "category": "Womens",
        "title": "AHIKA",
        "subtitle": "Printed Straight Kurta",
        "discounted_price": "513",
        "strike_price": "1350",
        "discount": "(62% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL"
        ],
        "rating": "4",
        "rating_count": "23.2k"
    },
    {
        "category": "Womens",
        "title": "Roadster",
        "subtitle": "Women Mid-Rise Skinny Jeans",
        "discounted_price": "919",
        "strike_price": "2299",
        "discount": "(60% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/4451395/2022/4/18/1d44d592-3a6e-46d3-a451-34fa1331afda1650284880812RoadsterWomenBlackSkinnyFitMid-RiseCleanLookStretchableJeans1.jpg",
        "size": [
            "26",
            "28",
            "30",
            "32",
            "34",
            "36"
        ],
        "rating": "4",
        "rating_count": "13.6k"
    },
    {
        "category": "Womens",
        "title": "Varanga",
        "subtitle": "Women Printed Cotton Kurta",
        "discounted_price": "749",
        "strike_price": "2799",
        "discount": "(Rs. 2050 OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13764318/2021/4/7/c6a16eb7-833d-4df2-8e0e-cb694a8a83e51617792817180-Varanga-Peach-Bandhani-Printed-Embroidered-Kurta-69516177928-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.3",
        "rating_count": "6.2k"
    },
    {
        "category": "Womens",
        "title": "Anouk",
        "subtitle": "Printed Straight Kurta",
        "discounted_price": "629",
        "strike_price": "1799",
        "discount": "(65% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2322979/2018/2/13/11518506064968-Anouk-Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL"
        ],
        "rating": "3.9",
        "rating_count": "20.4k"
    },
    {
        "category": "Womens",
        "title": "JAIPURI BUNAAI",
        "subtitle": "Women Kurta with Trousers With Dupatta",
        "discounted_price": "999",
        "strike_price": "3999",
        "discount": "(75% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18737708/2022/6/15/bdf107bf-7812-4330-bdee-c845c07127781655274467481KurtaSets1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.3",
        "rating_count": "604"
    },
    {
        "category": "Womens",
        "title": "Indo Era",
        "subtitle": "Women Yoke Design Kurta with Palazzos With Dupatta",
        "discounted_price": "1199",
        "strike_price": "3999",
        "discount": "(70% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16712782/2022/4/14/2afbbc41-329f-4850-8aee-00dccdf641851649922896889-Indo-Era-Solid-Wine-Straight-Kurta-Palazzo-With-Dupatta-Set--1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.4",
        "rating_count": "900"
    },
    {
        "category": "Womens",
        "title": "KASSUALLY",
        "subtitle": "Women Trousers",
        "discounted_price": "671",
        "strike_price": "1599",
        "discount": "(58% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/10/11/f3b7eb35-ea09-4bd6-b0e7-9de4157b14bd1602370012077-1.jpg",
        "size": [
            "26",
            "28",
            "30",
            "32",
            "34",
            "36"
        ],
        "rating": "4",
        "rating_count": "3.8k"
    },
    {
        "category": "Womens",
        "title": "InWeave",
        "subtitle": "Women Kurta with Palazzos With Dupatta",
        "discounted_price": "1592",
        "strike_price": "5899",
        "discount": "(73% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/16524740/2021/12/29/17ab2ac8-2e60-422d-9d20-2527415932361640754214931-STRAPPY-SET-IN-ORANGE-WITH-ORGANZA-DUPATTA-5961640754214349-2.jpg",
        "size": [
            "XXS",
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.2",
        "rating_count": "1.8k"
    },
    {
        "category": "Womens",
        "title": "Mitera",
        "subtitle": "Woven Design Bandhani Saree",
        "discounted_price": "1112",
        "strike_price": "5299",
        "discount": "(79% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15195736/2022/4/5/4dc201e5-ec81-458a-af30-c6e99a37691a1649158065149-Mitera-Red--Gold-Toned-Woven-Design-Bandhani-Saree-146164915-1.jpg",
        "size": [
            "Onesize"
        ],
        "rating": "4",
        "rating_count": "1.9k"
    },
    {
        "category": "Womens",
        "title": "Antheaa",
        "subtitle": "Floral Print Fit & Flare Dress",
        "discounted_price": "983",
        "strike_price": "2459",
        "discount": "(60% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/12595594/2020/10/15/b6e22b58-3450-468f-afeb-3218b6ce7acb1602737925709SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.3",
        "rating_count": "8.2k"
    },
    {
        "category": "Womens",
        "title": "Anouk",
        "subtitle": "Women Floral Embellished Kurta",
        "discounted_price": "594",
        "strike_price": "1699",
        "discount": "(65% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13789724/2021/4/8/cb5ba728-59f2-4bad-a54b-a3208259e0f31617876454403-Anouk-Women-Kurtas-7251617876453423-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL"
        ],
        "rating": "4.3",
        "rating_count": "1.7k"
    },
    {
        "category": "Womens",
        "title": "Berrylush",
        "subtitle": "Floral Ruched Dress",
        "discounted_price": "896",
        "strike_price": "2299",
        "discount": "(61% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15583258/2021/10/12/1d13b8e6-2c23-4b9c-a45a-508f368f049e1634036755097-Berrylush-Women-Red-Ditsy-Floral-Tie-Shoulder-Ruched-Dress-5-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "rating": "4.2",
        "rating_count": "761"
    },
    {
        "category": "Womens",
        "title": "Indo Era",
        "subtitle": "Women Yoke Design Kurta with Palazzos With Dupatta",
        "discounted_price": "1791",
        "strike_price": "6399",
        "discount": "(72% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15508982/2021/9/29/de692647-2943-4d0e-a70c-b9469a15a79e1632905308754IndoEraWhiteEmbroideredStraightKurtaWithPalazzoWithDupattaSe1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.1",
        "rating_count": "810"
    },
    {
        "category": "Womens",
        "title": "KALINI",
        "subtitle": "Women Kurta Set With Dupatta",
        "discounted_price": "887",
        "strike_price": "3699",
        "discount": "(76% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/17062988/2022/2/5/f864acf1-f5b1-423e-9e43-137b0f588ebf1644056622967KALINIWomenMaroonEmbroideredPleatedKurtawithSharara1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.1",
        "rating_count": "2.5k"
    },
    {
        "category": "Womens",
        "title": "Chemistry",
        "subtitle": "Women Solid Parka",
        "discounted_price": "2999",
        "strike_price": "5999",
        "discount": "(50% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/5709433/2018/9/6/f8edfec2-d665-4dec-8bd0-1c549d9b2c051536228338868-Chemistry-Women-Brown-Solid-Parka-7841536228337271-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "rating": "4.4",
        "rating_count": "453"
    },
    {
        "category": "Womens",
        "title": "SASSAFRAS",
        "subtitle": "Women Relaxed Fit Jeans",
        "discounted_price": "739",
        "strike_price": "1999",
        "discount": "(63% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13000352/2022/4/21/c083046e-9f2e-46bc-aedc-9ac56533d1001650517608723SASSAFRASWomenBluePureCottonRelaxedFitHigh-RiseCleanLookCrop1.jpg",
        "size": [
            "26",
            "28",
            "30",
            "32",
            "34",
            "36"
        ],
        "rating": "4.2",
        "rating_count": "6.9k"
    },
    {
        "category": "Womens",
        "title": "Varanga",
        "subtitle": "Women Floral Printed Kurta",
        "discounted_price": "749",
        "strike_price": "2799",
        "discount": "(Rs. 2050 OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15241816/2021/8/24/d57adb8b-e792-477a-8801-6ea570cd88ef1629800170287VarangaWomenYellowFloralPrintedKeyholeNeckThreadWorkKurta1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.1",
        "rating_count": "2.4k"
    },
    {
        "category": "Womens",
        "title": "KALINI",
        "subtitle": "Women Printed Kurta with Trousers With Dupatta",
        "discounted_price": "813",
        "strike_price": "3699",
        "discount": "(78% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/18512246/2022/5/31/89099cf1-d6ec-464e-81e9-62f9a117bbe41653966070108KALINIWomenBurgundyEthnicMotifsPrintedLayeredKurtawithTrouse1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4",
        "rating_count": "194"
    },
    {
        "category": "Womens",
        "title": "Yufta",
        "subtitle": "Women Printed Kurta with Palazzos With Dupatta",
        "discounted_price": "1451",
        "strike_price": "3299",
        "discount": "(56% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/11569354/2021/10/25/96e2815f-51eb-48ac-aa20-f64943f861851635163117668-Yufta-Women-Mauve-Ethnic-Motifs-Printed-Regular-Kurta-with-P-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.4",
        "rating_count": "544"
    },
    {
        "category": "Womens",
        "title": "SASSAFRAS",
        "subtitle": "Women Regular Wide Track Pants",
        "discounted_price": "614",
        "strike_price": "1499",
        "discount": "(59% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/12222102/2020/8/13/d47d5955-064d-4d81-a88f-52524d2f299a1597298540090-SASSAFRAS-Women-Black-Regular-Fit-Solid-Wide-Leg-Track-Pants-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.4",
        "rating_count": "17.8k"
    },
    {
        "category": "Womens",
        "title": "Varanga",
        "subtitle": "Calm Blue and Beige Ethnic Motifs Print Kurta",
        "discounted_price": "749",
        "strike_price": "2999",
        "discount": "(Rs. 2250 OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13769458/2021/7/8/86b11f07-7040-4dce-ad9f-1780e9ac26691625713714184-Varanga-sea-green-gota-patti-embroidery-yoke-digital-printed-1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.2",
        "rating_count": "2.6k"
    },
    {
        "category": "Womens",
        "title": "Roadster",
        "subtitle": "Pure Cotton T-shirt",
        "discounted_price": "179",
        "strike_price": "599",
        "discount": "(70% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/2312468/2018/2/21/11519195992929-Roadster-Women-Maroon-Solid-Round-Neck-T-shirt-7951519195992737-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "rating": "4.2",
        "rating_count": "10.7k"
    },
    {
        "category": "Womens",
        "title": "Anouk",
        "subtitle": "Women Printed Kurta with Palazzos",
        "discounted_price": "874",
        "strike_price": "2499",
        "discount": "(65% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/10778756/2019/12/2/4bcc29de-ae61-47d3-b571-e87e7fd5fd2f1575270952654-Anouk-Women-Kurta-Sets-2661575270950446-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL"
        ],
        "rating": "4.2",
        "rating_count": "2.5k"
    },
    {
        "category": "Womens",
        "title": "Anouk",
        "subtitle": "Ready to Wear Lehenga Blouse With Dupatta",
        "discounted_price": "1749",
        "strike_price": "4999",
        "discount": "(65% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/14122726/2021/9/16/5eabd17b-d5b0-47dc-8fae-79425bfccc901631792111643-Anouk-Women-Lehenga-Choli-2541631792110834-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.3",
        "rating_count": "120"
    },
    {
        "category": "Womens",
        "title": "Roadster",
        "subtitle": "Washed Denim Trucker Jacket",
        "discounted_price": "799",
        "strike_price": "1599",
        "discount": "(50% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/12279416/2020/10/23/81c941d5-3bd0-48fa-835a-632353235fc51603434085601-Roadster-Women-Jackets-4691603434083309-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.5",
        "rating_count": "1k"
    },
    {
        "category": "Womens",
        "title": "Khushal K",
        "subtitle": "Women Yoke Design Kurta Set",
        "discounted_price": "1424",
        "strike_price": "4749",
        "discount": "(70% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/13391080/2022/2/21/3ad1838d-d29e-4945-9eca-64930f0939411645460975084KhushalKWomenWhiteWovenDesignKurtawithChuridarDupatta1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.4",
        "rating_count": "3.9k"
    },
    {
        "category": "Womens",
        "title": "DOLCE CRUDO",
        "subtitle": "Women Skinny Fit Jeans",
        "discounted_price": "959",
        "strike_price": "2399",
        "discount": "(60% OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/7/bdd09925-e2b7-431a-ba49-8fcc9b688ff51573148802565-1.jpg",
        "size": [
            "26",
            "28",
            "30",
            "32",
            "34"
        ],
        "rating": "4.1",
        "rating_count": "3.4k"
    },
    {
        "category": "Womens",
        "title": "Varanga",
        "subtitle": "Women Ethnic Motifs Printed Kurta",
        "discounted_price": "699",
        "strike_price": "3299",
        "discount": "(Rs. 2600 OFF)",
        "images": "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.2",
        "rating_count": "2.4k"
    },
    {
        "category": "Womens",
        "title": "Varanga",
        "subtitle": "Women Ethnic Motifs Printed Kurta",
        "discounted_price": "699",
        "strike_price": "3299",
        "discount": "(Rs. 2600 OFF)",
        "images": "./w2_files/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.2",
        "rating_count": "2.4k"
    },
    {
        "category": "Womens",
        "title": "Libas",
        "subtitle": "Kurta with Sharara & Dupatta",
        "discounted_price": "1799",
        "strike_price": "4999",
        "discount": "(64% OFF)",
        "images": "./w2_files/6971d853-ddc3-49a9-945b-58a98fac97dc1654096191264-Libas-Women-Orange-Ethnic-Motifs-Printed-Mirror-Work-Kurta-w-15.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.5",
        "rating_count": "244"
    },
    {
        "category": "Womens",
        "title": "Anouk",
        "subtitle": "Women Embroidered Kurta with Trousers",
        "discounted_price": "1154",
        "strike_price": "3299",
        "discount": "(65% OFF)",
        "images": "./w2_files/8e7018f5-054a-4051-9775-2288e11690d21622889962790-Anouk-Women-Kurta-Sets-1041622889962281-5.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.2",
        "rating_count": "767"
    },
    {
        "category": "Womens",
        "title": "Libas",
        "subtitle": "Floral Cotton Kurta Set",
        "discounted_price": "899",
        "strike_price": "2499",
        "discount": "(64% OFF)",
        "images": "./w2_files/b783aef9-c902-462e-af73-de159bfd011c1565256752191-Libas-Women-Kurta-Sets-2081565256750830-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL"
        ],
        "rating": "4",
        "rating_count": "13.4k"
    },
    {
        "category": "Womens",
        "title": "Tokyo Talkies",
        "subtitle": "Women Printed Sweatshirt",
        "discounted_price": "284",
        "strike_price": "1499",
        "discount": "(81% OFF)",
        "images": "./w2_files/0b1d61ff-ccff-44ad-b8ee-e9925f04e2f51605695923643TokyoTalkiesWomenBlackGold-TonedPrintedCamouflageSequinnedSw1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL"
        ],
        "rating": "4.4",
        "rating_count": "672"
    },
    {
        "category": "Womens",
        "title": "ADDYVERO",
        "subtitle": "Women High-Rise Trousers",
        "discounted_price": "543",
        "strike_price": "1699",
        "discount": "(68% OFF)",
        "images": "./w2_files/fe31ed52-9eda-4123-a704-dc39e0bad6011660707701748ADDYVEROWomenBlackHigh-RiseEasyWashTrousers1.jpg",
        "size": [
            "28",
            "30",
            "32",
            "34",
            "36"
        ],
        "rating": "4.3",
        "rating_count": "650"
    },
    {
        "category": "Womens",
        "title": "Indo Era",
        "subtitle": "Floral Screen Print Kurta Set",
        "discounted_price": "1249",
        "strike_price": "4999",
        "discount": "(75% OFF)",
        "images": "./w2_files/9b7f8d3f-e48f-4618-8eac-32cee1a0d4111581757541745-Indo-Era-Maroon-Floral-Printed-A-Line-Kurta-with-Palazzo-Set-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.2",
        "rating_count": "7.4k"
    },
    {
        "category": "Womens",
        "title": "heemara",
        "subtitle": "Women Embroidered Kurta with Trousers With Dupatta",
        "discounted_price": "1399",
        "strike_price": "6999",
        "discount": "(80% OFF)",
        "images": "./w2_files/33c3b553-8139-434c-9eec-9b1a79e937311652783126428heemaraWomenPeach-ColouredEthnicMotifsEmbroideredKurtawithTr1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL"
        ],
        "rating": "3.7",
        "rating_count": "539"
    },
    {
        "category": "Womens",
        "title": "Anouk",
        "subtitle": "Women Embroidered Kurta with Trousers With Dupatta",
        "discounted_price": "1559",
        "strike_price": "3899",
        "discount": "(60% OFF)",
        "images": "./w2_files/b1bd0687-7533-428d-8258-d29c793fc4541631092430795-Anouk-Women-Kurta-Sets-941631092429795-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
            "3XL",
            "4XL"
        ],
        "rating": "4.1",
        "rating_count": "515"
    },
    {
        "category": "Womens",
        "title": "Libas",
        "subtitle": "Cotton Printed Kurta Set",
        "discounted_price": "1349",
        "strike_price": "2999",
        "discount": "(55% OFF)",
        "images": "./w2_files/d7e8761b-6032-4fa6-9aa6-83f253e982911643693009626-Libas-Women-Kurta-Sets-8531643693008464-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.4",
        "rating_count": "454"
    },
    {
        "category": "Womens",
        "title": "Varanga",
        "subtitle": "Women Printed Kurta",
        "discounted_price": "703",
        "strike_price": "2199",
        "discount": "(68% OFF)",
        "images": "./w2_files/71e61247-d9d9-4c7f-9db7-a332eb84541f1623827034043-Varanga-Blue-And-White-Striped-Straight--Kurta-With-V-Shape--1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.2",
        "rating_count": "1.8k"
    },
    {
        "category": "Womens",
        "title": "Difference of Opinion",
        "subtitle": "Printed Cotton T-shirt",
        "discounted_price": "475",
        "strike_price": "1399",
        "discount": "(66% OFF)",
        "images": "./w2_files/c06a6b1a-4e0b-43ed-ad2e-394b588a0d8b1651144480179-Difference-of-Opinion-Women-Black-Conversational-Printed-Pur-1.jpg",
        "size": [
            "XS",
            "S",
            "M",
            "L",
            "XL"
        ],
        "rating": "4.3",
        "rating_count": "407"
    },
    {
        "category": "Womens",
        "title": "Kotty",
        "subtitle": "Women Flared Jeans",
        "discounted_price": "639",
        "strike_price": "1999",
        "discount": "(68% OFF)",
        "images": "./w2_files/98e4cd89-4c1a-40ed-a659-645f5c2d3f801608051833514-1.jpg",
        "size": [
            "26",
            "28",
            "30",
            "32",
            "34"
        ],
        "rating": "4.1",
        "rating_count": "3.3k"
    },
    {
        "category": "Womens",
        "title": "Anubhutee",
        "subtitle": "Ethnic Embroidered Kurta Set",
        "discounted_price": "986",
        "strike_price": "2989",
        "discount": "(67% OFF)",
        "images": "./w2_files/ec7101dc-431b-47d2-9c86-d53fc4fda3681650365990558AnubhuteeWomenNavyBluePaisleyFloralEmbroideryKurtaSet1.jpg",
        "size": [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        "rating": "4.4",
        "rating_count": "21.4k"
    }
]
//   for(let i = 0; i < newdata.length; i++){
//     let flag = true;
//     for(let key in newdata[i]){
//         if(newdata[i][key] == null){
//             flag = false
//         }
//     }
//     if(flag == true){
//         anothernew.push(newdata[i])
//     }
    
//   }

  console.log(anothernew)