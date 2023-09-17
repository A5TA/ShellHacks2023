// IndividualData.ts

export interface UserData {
    id: number;
    url: string;
    message: string;
    name: string;
    homeAddress: string;
    description: string;
    address: string;
  }
  
  export const userDataDemo: UserData[] = [
    {
      id: 1,
      url: "https://i.imgflip.com/3kavyw.png?a470520",
      message: "We're urgently seeking your help to fund a life-saving surgery for our cherished cat, Tom. Tom is facing a critical medical condition, and without this surgery, his future hangs in the balance. Your generous donations will make it possible for Tom to receive the surgery he needs, ensuring a chance at a healthy and happy life. Please contribute today to make a significant difference in Tom's well-being and our family's peace of mind.",
      name: "Tom the Cat",
      homeAddress: "Springfield, MO",
      description: "",
      address: "0xc338e98Aa994Bd449929725B24a846DD24fA767F",
    },
    {
      id: 2,
      url: "https://uwcf.org/wp-content/uploads/2020/04/UW_Q2_COVID_StrugglingFamilies-ALICE_Grow_Standard_Landing_Page_778x440_v1.jpg",
      message: "Tommy Johnson is a brave young boy who is battling a serious medical condition. His family, burdened by medical expenses, is struggling to provide him with the necessary care and treatment. Your heartfelt contributions will provide Tommy with a fighting chance, offering hope and relief to his family during this challenging time. Please donate today to support Tommy in his journey towards a healthier and brighter future.",
      name: "Tommy Johnson",
      homeAddress: "Miami, FL",
      description: "",
      address: "0xd7Da7f0d221Fa3Dc73b335F311bb598AAE1779a4",
    },
    {
        id: 3,
        url: "https://www.ilo.org/wcmsp5/groups/public/---dgreports/---dcomm/documents/image/wcms_363237.jpg",
        message: "The Doe family, residing in a remote rural community, is facing a relentless struggle to make ends meet. Their limited access to resources and opportunities has left them in dire need of assistance for basic necessities and a chance at a better life. Your compassionate donations will make a significant difference in providing food, shelter, and essential support to the Doe family, enabling them to build a more secure and hopeful future. Please join us in helping this rural family overcome adversity and find the stability they deserve.",
        name: "Jeff Doe",
        homeAddress: "Denver, CO",
        description: "",
        address: "0xF1c391574E2631e804009FC617c6c2Fbc26b5735"
    },
    {
        id: 4,
        url: "https://cdn.downtoearth.org.in/library/large/2016-11-24/0.82556400_1479993701_rural-poor.jpg",
        message: "Jeffrey and his family, living in a remote rural area, are facing significant financial difficulties. They're struggling to make ends meet, provide basic necessities, and ensure a stable future for their children. Your compassionate contributions will go a long way in easing their burden, offering hope, and ensuring Jeffrey's family can thrive despite the challenges of rural life. Please donate today to make a positive impact on their lives and provide them with the support they desperately need.",
        name: "Jeffrey ShellHacks",
        homeAddress: "San Diego, CA",
        description: "",
        address: "0xd7Da7f0d221Fa3Dc73b335F311bb598AAE1779a4"
    },

]
