import React, { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    welcome: "Welcome to Agrivia",
    agriviaTagline: "The digital platform for sustainable agriculture",
    chooseYourRole: "Choose Your Role",
    farmerPortal: "Farmer Portal",
    farmerRoleDescription: "Access personalized dashboard, quests, schemes, and market updates",
    consumerMarketplace: "Consumer Marketplace",
    consumerRoleDescription: "Discover and purchase fresh, organic produce directly from farmers",
    officialLogin: "Official Login",
    governmentRoleDescription: "Manage and approve farmer schemes, track sustainability metrics",
    
    // Farmer Login specific
    farmerLoginTitle: "Farmer Login",
    welcomeBack: "Welcome back to Agrivia",
    farmerIdPlaceholder: "Farmer ID or Email",
    passwordPlaceholder: "Password",
    loginButton: "Login",
    dontHaveAccount: "Don't have an account?",
    registerNow: "Register Now",
    // ... add more translations as needed for other pages
  },
  hi: {
    welcome: "एग्रीविया में आपका स्वागत है",
    agriviaTagline: "स्थायी कृषि के लिए डिजिटल प्लेटफॉर्म",
    chooseYourRole: "अपनी भूमिका चुनें",
    farmerPortal: "किसान पोर्टल",
    farmerRoleDescription: "व्यक्तिगत डैशबोर्ड, खोज, योजनाओं और बाजार अपडेट तक पहुंचें",
    consumerMarketplace: "उपभोक्ता बाज़ार",
    consumerRoleDescription: "किसानों से सीधे ताजे, जैविक उत्पाद खोजें और खरीदें",
    officialLogin: "आधिकारिक लॉगिन",
    governmentRoleDescription: "किसान योजनाओं का प्रबंधन और अनुमोदन करें, स्थिरता मेट्रिक्स ट्रैक करें",

    // Farmer Login specific
    farmerLoginTitle: "किसान लॉगिन",
    welcomeBack: "एग्रीविया में वापस स्वागत है",
    farmerIdPlaceholder: "किसान आईडी या ईमेल",
    passwordPlaceholder: "पासवर्ड",
    loginButton: "लॉगिन",
    dontHaveAccount: "खाता नहीं है?",
    registerNow: "अभी रजिस्टर करें",
    // ...
  },
  ml: {
    welcome: "അഗ്രീവിയയിലേക്ക് സ്വാഗതം",
    agriviaTagline: "സുസ്ഥിര കൃഷിക്ക് ഒരു ഡിജിറ്റൽ പ്ലാറ്റ്ഫോം",
    chooseYourRole: "നിങ്ങളുടെ റോൾ തിരഞ്ഞെടുക്കുക",
    farmerPortal: "കർഷക പോർട്ടൽ",
    farmerRoleDescription: "വ്യക്തിഗത ഡാഷ്ബോർഡ്, ക്വസ്റ്റുകൾ, പദ്ധതികൾ, മാർക്കറ്റ് അപ്ഡേറ്റുകൾ എന്നിവ ആക്സസ് ചെയ്യുക",
    consumerMarketplace: "ഉപഭോക്തൃ മാർക്കറ്റ്പ്ലേസ്",
    consumerRoleDescription: "കർഷകരിൽ നിന്ന് നേരിട്ട് പുതിയ, ജൈവ ഉൽപ്പന്നങ്ങൾ കണ്ടെത്തുകയും വാങ്ങുകയും ചെയ്യുക",
    officialLogin: "ഔദ്യോഗിക ലോഗിൻ",
    governmentRoleDescription: "കർഷക പദ്ധതികൾ കൈകാര്യം ചെയ്യുകയും അംഗീകരിക്കുകയും ചെയ്യുക, സുസ്ഥിരതാ അളവുകൾ ട്രാക്ക് ചെയ്യുക",

    // Farmer Login specific
    farmerLoginTitle: "കർഷക ലോഗിൻ",
    welcomeBack: "അഗ്രീവിയയിലേക്ക് വീണ്ടും സ്വാഗതം",
    farmerIdPlaceholder: "കർഷക ഐഡി അല്ലെങ്കിൽ ഇമെയിൽ",
    passwordPlaceholder: "പാസ്വേഡ്",
    loginButton: "ലോഗിൻ",
    dontHaveAccount: "ഒരു അക്കൗണ്ട് ഇല്ലേ?",
    registerNow: "ഇപ്പോൾ രജിസ്റ്റർ ചെയ്യുക",
    // ...
  },
  ta: {
    welcome: "அக்ரிவியாவிற்கு வரவேற்கிறோம்",
    agriviaTagline: "நிலையான விவசாயத்திற்கான டிஜிட்டல் தளம்",
    chooseYourRole: "உங்கள் பாத்திரத்தைத் தேர்வுசெய்யவும்",
    farmerPortal: "விவசாயி போர்டல்",
    farmerRoleDescription: "தனிப்பயனாக்கப்பட்ட டாஷ்போர்டு, தேடல்கள், திட்டங்கள் மற்றும் சந்தை புதுப்பிப்புகளை அணுகவும்",
    consumerMarketplace: "நுகர்வோர் சந்தை",
    consumerRoleDescription: "விவசாயிகளிடமிருந்து நேரடியாக புதிய, இயற்கை விளைபொருட்களைக் கண்டறிந்து வாங்கவும்",
    officialLogin: "அதிகாரப்பூர்வ உள்நுழைவு",
    governmentRoleDescription: "விவசாயத் திட்டங்களை நிர்வகிக்கவும் அங்கீகரிக்கவும், நிலைத்தன்மை அளவீடுகளைக் கண்காணிக்கவும்",

    // Farmer Login specific
    farmerLoginTitle: "விவசாயி உள்நுழைவு",
    welcomeBack: "அக்ரிவியாவிற்கு மீண்டும் வரவேற்கிறோம்",
    farmerIdPlaceholder: "விவசாயி ஐடி அல்லது மின்னஞ்சல்",
    passwordPlaceholder: "கடவுச்சொல்",
    loginButton: "உள்நுழை",
    dontHaveAccount: "கணக்கு இல்லையா?",
    registerNow: "இப்போது பதிவு செய்யவும்",
    // ...
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const t = (key) => translations[language][key] || key;
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);