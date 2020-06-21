import python from "../../img/devrank/python.jpg"
import js from "../../img/devrank/js.jpg"
import rails from "../../img/devrank/rails.jpg"
import ruby from "../../img/devrank/ruby.jpg"
import aws from "../../img/devrank/aws.jpg"
import beginner from "../../img/devrank/beginner.jpg"
import php from "../../img/devrank/php.jpg"
import docker from "../../img/devrank/docker.jpg"
import laravel from "../../img/devrank/laravel.jpg"
import react from "../../img/devrank/react.jpg"


const initialState = {
    articles: [
        {title : "Harry Potter and the Philosopher's Stone", id: "this_english"},
        {title : "Harry Potter en die Towenaar se Steen", id: "is_Afrikaans"},
        {title : "هاري بوتر وحجرالفيلسوف", id: "arabiaan"},
        {title : "哈利·波特与魔法石", id: "in_chinese"},
        {title : "Hari Poter kaj la Ŝtono de la Saĝulo", id: "where_is_esperanto"},
        {title : "ハリー・ポッターと賢者の石", id: "we_allknow_this"},
        {title : "Harry Potter a Kámen mudrců", id: "czechbeer_good"},
        {title : "Harry Potter en de Steen der Wijzen", id: "Haineken_"},
        {title : "Harry Potter und der Stein der Weisen", id: "german_"},
        {title : "Harry Potter At Ang Pilospong Bato", id: "tagalog_"},
        {title : "Ἄρειος Ποτὴρ καὶ ἡ τοῦ φιλοσόφου λίθος", id: "ancient_greek"},
        {title : "Harry Potter ujarallu inuunartoq", id: "green_landic"},
        {title : "Harry Potter és a bölcsek köve", id: "hungarian"},
        {title : " Harry Potter dan Batu Bertuah", id: "indonesian_migoren"},
        {title : "Harry Potter agus an Órchloch", id: "whiskey_irish"},
        {title : "Harry Potter e la Pietra Filosofale", id: "italia_n"},
        {title : "해리 포터와 마법사의 돌 ", id: "is_korean"},
        {title : "Harrius Potter et Philosophi Lapis", id: "latin_defficult"},
        {title : "Harry Potter dengan Batu yang Berhikmat", id: "malay_sian"},
        {title : "Харри Поттер ба Шидэт Чулуу", id: "mongolian"},
        {title : "هری پاتر-سنگ جاد", id: "persian_hard"},
        {title : "Harry Potter i Kamień Filozoficzny", id: "polish"},
        {title : "Гарри Поттер и философский камень", id: "russian_bolciti"},
        {title : "Harry Potter agus Clach an Fheallsanaich", id: "scottish_gaelic"},
        {title : "Hari Poter i kamen mudrosti", id: "serbian_latin"},
        {title : "Harry Potter a kameň mudrcov", id: "slovak"},
        {title : " แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์", id: "thai_land"},
        {title : "Harry Potter ve Felsefe Taşı", id: "melhaba_turkish"},
        {title : "Гаррі Поттер та філософський камінь", id: "u_krainian"},
    ],
    users: [
        {name : "Professor Severus Snape", id: "severus_snape", number_of_contributions : 777},
        {name : "Hermione Granger", id: "granger_hermione", number_of_contributions : 555},
        {name : "Sirius Black", id: "serius_black", number_of_contributions : 444},
        {name : "Professor Albus Dumbledore", id: "albus_dumbledore", number_of_contributions : 322},
        {name : "Lord Voldemort", id: "who_you_know", number_of_contributions : 222},
        {name : "Dobby", id: "dobby", number_of_contributions : 211},
        {name : "Draco Malfoy", id: "doraco_foy", number_of_contributions : 188},
        {name : "Professor Minerva McGonagall", id: "macgonagall_", number_of_contributions : 155},
        {name : "Rubeus Hagrid", id: "hagrid", number_of_contributions : 100},
        {name : "Bellatrix Lestrange", id: "lenst_range", number_of_contributions : 80},
    ],
    tags: [
        {name : "Python", img : python, number_of_contributions: 287},
        {name : "JavaScript", img : js, number_of_contributions: 205},
        {name : "Rails", img : rails, number_of_contributions: 159},
        {name : "Ruby", img : ruby, number_of_contributions: 150},
        {name : "AWS", img : aws, number_of_contributions: 122},
        {name : "初心者", img : beginner, number_of_contributions: 109},
        {name : "PHP", img : php, number_of_contributions: 101},
        {name : "Docker", img : docker, number_of_contributions: 82},
        {name : "Laravel", img : laravel, number_of_contributions: 74},
        {name : "React", img : react, number_of_contributions: 62},
    ],
    companies : [
        {name : "株式会社　グリフィンドール", number_of_contributions : 20},
        {name : "株式会社　ハッフルパフ",  number_of_contributions : 18},
        {name : "株式会社　スリザリン",  number_of_contributions : 16},
        {name : "株式会社　レイブンクロー", number_of_contributions : 15},
        {name : "株式会社　A", number_of_contributions : 13},
        {name : "株式会社　B", number_of_contributions : 9},
        {name : "株式会社　C", number_of_contributions : 9},
        {name : "株式会社　D", number_of_contributions : 7},
        {name : "株式会社　E", number_of_contributions : 6},
        {name : "株式会社　F", number_of_contributions : 6},


    ]
  };
  
  function rootReducer(state = initialState, action) {
    return state;
  };
  
  export default rootReducer;