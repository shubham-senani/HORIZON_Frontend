import { useState } from "react";
import "./tribute.css";
import soldier_img from "./images/ycg.jpg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";

const Tribute = () => {
  const arr = [
    {
      firstname: "Wazir RS",
      lastname: "Pathania",
      story:
        "Ram Ram Singh Pathania Indian FighterSingh Pathania was born on 10 April 1824 at the residence of Shyam Singh, a minister of the state of Nurpur . His father was the minister of Raja Veer Singh in the state of Nurpur.Due to the British-Sikh Convention in 1846, most of the princely states of Himachal Pradesh were under the British Empire. At the same time, King Veer Singh died. At that time his son Javsant Singh was the successor of the throne.",
      link: "https://hpkangra.nic.in/war-heroes/",
      image:
        "https://cdn.s3waas.gov.in/s348aedb8880cab8c45637abc7493ecddd/uploads/2018/10/2018103022-150x150.jpg"
    },
    {
      firstname: "Major SN",
      lastname: "Sharma",
      story:
        "Major Somnath Sharma, an Indian Army officer, was the first recipient of Param Vir Chakra (PVC), India’s highest military decoration. He was son of Major General Amarnath Sharma, born on 31 January 1923, in Himachal Pradesh District Kangra. He was commissioned in the Kumaon Regiment on 22 February 1942. During the Second World War, he had fought in the Arakan Operations.",
      link: "https://hpkangra.nic.in/war-heroes/",
      image:
        "https://cdn.s3waas.gov.in/s348aedb8880cab8c45637abc7493ecddd/uploads/2018/10/2018103031-150x150.jpg"
    },
    {
      firstname: "Capt. Vikram",
      lastname: "Batra",
      story:
        "Captain Vikram Batra, PVC (9 September 1974 – 7 July 1999) was an officer of the Indian Army, posthumously awarded with the Param Vir Chakra, India’s highest and most prestigious award for valour, for his actions during the 1999 Kargil War in Kashmir between India and Pakistan. He led one of the toughest operations in mountain warfare in Indian history.",
      link: "https://hpkangra.nic.in/war-heroes/",
      image:
        "https://cdn.s3waas.gov.in/s348aedb8880cab8c45637abc7493ecddd/uploads/2018/10/2018103062-150x150.jpg"
    },
    {
      firstname: "Major Sudhir",
      lastname: "Walia",
      story:
        "Major Sudhir Kumar, 9 Parachute (Special Forces), SM plus Bar to SM hailing from District Kangra (Himachal Pradesh), was commissioned into the 3rd Jat Regiment on 11 June 1988. . On 29 August 1999, Major Kumar led an assault on a militant hideout in Kupwara district. He killed four militants before succumbing to their bullets.",
      link: "https://hpkangra.nic.in/war-heroes/",
      image:
        "https://cdn.s3waas.gov.in/s348aedb8880cab8c45637abc7493ecddd/uploads/2018/10/2018103018-150x150.jpg"
    },
    {
      firstname: "Brigadier SJ",
      lastname: "Thapa",
      story:
        "Brigadier Sher Jung Thapa also revered as The Hero of Skardu, is one of the few recipients of Indian Army’s second highest gallantary award, the Mahavir Chakra (MVC).On 11 February 1948, Skardu was attacked and surrounded by the enemy of approximately 600 strong strength. The enemy was routed under the determined leadership of Lieutenant Colonel Sher Jung Thapa.",
      link: "https://hpkangra.nic.in/war-heroes/",
      image:
        "https://cdn.s3waas.gov.in/s348aedb8880cab8c45637abc7493ecddd/uploads/2018/10/2018103075-150x150.jpg"
    },
    {
      firstname: "Captain Saurabh",
      lastname: "Kalia",
      story:
        "Captain Saurabh Kalia was born at Amritsar (Punjab), hailing from Palampur in District Kangra, Himachal Pradesh. Captain Saurabh was posted with the 4 JAT Regiment (Infantry) IC No. 58522F in the Kargil Sector. In the first fortnight of May 1999, he went out for Patrol Duty three times to check the infiltration in the Kaksar area of Kargil.",
      link: "https://hpkangra.nic.in/war-heroes/",
      image:
        "https://cdn.s3waas.gov.in/s348aedb8880cab8c45637abc7493ecddd/uploads/2018/10/2018103121-150x150.jpg"
    },
    {
      firstname: "Mary",
      lastname: "Kom",
      story:
        "Mary Kom was the only female boxer from India to qualify for the 2012 Olympics. She’s the most successful boxer in history who earned a bronze medal for the country and also won 8 World Championship medals (male or female). She had to overcome a lot of disapproval to make a career in boxing. Her parents were subsistence farmers, and she used to help them in the fields. She lacked the financial means to pay for boxing coaching.",
      link:
        "https://mews.in/indian-sports-heroes-who-had-an-inspiring-journey-to-success/",
      image:
        "https://akm-img-a-in.tosshub.com/aajtak/images/author/mary-kom.jpg"
    },
    {
      firstname: "Bhawna",
      lastname: "Jat",
      story:
        "The 24-year-old from Rajasthan qualified as India’s first female race walker for the Tokyo Olympics. To reach here, she had to move past numerous social barriers apart from her financial problems. The village panchayat banned her from training on the mud field because she trained in shorts. She started practicing as early as 3 am to escape the eyes of the villagers.",
      link:
        "https://mews.in/indian-sports-heroes-who-had-an-inspiring-journey-to-success/",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/03/Bhawna_Jat.jpg"
    },
    {
      firstname: "Neeraj",
      lastname: "Chopra",
      story:
        "Recently, Neeraj Chopra has won the javelin throw In Tokyo Olympics that took the internet by storm. He has now become a popular crush for many girls all around the world. By grabbing gold at the Tokyo Olympics, he made the nation proud. We all know about his amazing performance in Olympics. But, what we don’t know are the struggles he faced to reach that goal. Due to the lack of the platform available in his village, the athlete had to travel 15 to 16 km daily to practice on the ground.",
      link:
        "https://mews.in/indian-sports-heroes-who-had-an-inspiring-journey-to-success/",
      image:
        "https://images.livemint.com/img/2022/07/01/1600x900/0eeca53a-7bb1-11ec-92d4-e30affc03428_1643799575566_1656633654895.jpg"
    },
    {
      firstname: "Lovlina",
      lastname: "Borgohain",
      story:
        "Lovlina Borgohain is currently the highest-ranked Indian female pugilist, World No. 3 (69 kg). She bagged a bronze medal in the 2020 Tokyo Olympics. Her journey to the Olympics began from a tiny village in Assam. She was drawn to kickboxing at an early stage as her father was a sports enthusiast. She even participated at the national level. Later, she decided to switch to boxing.",
      link:
        "https://mews.in/indian-sports-heroes-who-had-an-inspiring-journey-to-success/",
      image:
        "https://c.ndtvimg.com/2021-08/h55eucv_lovlina-borgohain-afp_625x300_09_August_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
    },
    {
      firstname: "Deepika",
      lastname: "Kumari",
      story:
        "Deepika Kumari earned a gold medal in women’s individual recurve at the 2010 Commonwealth Games. She is the perfect example of an individual fighting her way out of obscurity. She went to the Kharsawan training camp only to lessen the burden of her family because they provided accommodation and food to the learners. At first, she got rejected because she lacked intent. However, she requested three months to prove herself worthy of selection.",
      link:
        "https://mews.in/indian-sports-heroes-who-had-an-inspiring-journey-to-success/",
      image:
        "https://static.toiimg.com/thumb/msid-64768502,width-400,resizemode-4/64768502.jpg"
    },
    {
      firstname: "Devendra",
      lastname: "Jhajharia",
      story:
        "At the Rio Paralympics, Devendra became the second gold medalist in India, after breaking his world record in the men’s F46 Javelin Throw. He became the first Indian to win two individual Gold medals. He lost his left hand after accidentally touching an electric wire at the age of 8. Without getting disappointed, it became the beginning of this soon-to-be star athlete’s journey.",
      link:
        "https://mews.in/indian-sports-heroes-who-had-an-inspiring-journey-to-success/",
      image:
        "https://mews.in/wp-content/uploads/2021/08/Devendra-Jhajharia-768x512.jpg"
    },
    {
      firstname: "Deepa",
      lastname: "Karmakar",
      story:
        "Deepa was born with flat- feet which are quite unfavorable for gymnasts. However, by presenting the life-threatening stunt- Produnova Vault at the Rio Olympics, she created history. It is a stunt that has been performed by only five women worldwide to date.Her commitment was unshakable despite the insufficiency of financial support and training facilities from the Sports Ministry.",
      link:
        "https://mews.in/indian-sports-heroes-who-had-an-inspiring-journey-to-success/",
      image:
        "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcT9L1BjVUCXZKEoQwoHKzs4SBOxdzBX6tOv5AGJQm34IMZpCtiULkqzWmvtUqpH9lG1RXezko_KraIx734"
    },
    {
      firstname: "Dattu Baban",
      lastname: "Bhokanal",
      story:
        "At the 18th Asian Games in Indonesia, Dattu won a gold medal for India in the sailing event. He was in the fifth standard when he had to decide to work as a daily laborer and earn with his father. However, after his father’s death, he joined the army. Under the guidance of his coach there, he overcame his fear of water and started training in sailing. He was inducted into the Army Rowing Node (ARN) in 2013.",
      link:
        "https://mews.in/indian-sports-heroes-who-had-an-inspiring-journey-to-success/",
      image:
        "https://mews.in/wp-content/uploads/2021/08/Dattu-Baban-Bhokanal.jpg"
    },
    {
      firstname: "Bhawani",
      lastname: "Devi",
      story:
        "Bhawani Devi always wanted to pursue a career in sports but didn’t know which sport. Fortunately, the MBA graduate was introduced to fencing. Because the Fencing swords were costly, she started training with Bamboo sticks. Her parents went out of their financial competence to support her in every way. Her mother had to pawn her jewelry to keep her fencing career going. Her first major achievement was when she won silver in the 2014 Asian Fencing Championship.",
      link:
        "https://mews.in/indian-sports-heroes-who-had-an-inspiring-journey-to-success/",
      image:
        "https://mews.in/wp-content/uploads/2021/08/bhawani-devi-768x427.jpg"
    },
    {
      firstname: "CV",
      lastname: "Raman",
      story:
        "Chandrasekhara Venkata Raman won the Nobel Prize for Physics in 1930 for his pioneering work on scattering of light. Born in Tiruchirapalli on November 7, 1888, he was the first Asian and first non-White to receive any Nobel Prize in the sciences. Raman also worked on the acoustics of musical instruments. He was the first to investigate the harmonic nature of the sound of the Indian drums such as the tabla and the mridangam.",
      link:
        "https://www.thebetterindia.com/10725/12-indian-scientists-changed-the-world-inspiring/",
      image:
        "https://en-media.thebetterindia.com/uploads/2014/05/cv-raman.jpg?compress=true&quality=80&w=768&dpr=1.3"
    },
    {
      firstname: "Satyendra Nath",
      lastname: "Bose",
      story:
        "Born on January 1, 1894 in Calcutta, SN Bose was an Indian physicist specialising in quantum mechanics. He is of course most remembered for his role played in the class of particles ‘bosons‘, which were named after him by Paul Dirac to commemorate his work in the field.\n" +
        "Bose adapted a lecture at the University of Dhaka on the theory of radiation and the ultraviolet catastrophe into a short article called “Planck’s Law and the Hypothesis of Light Quanta” and sent it to Albert Einstein.",
      link:
        "https://www.thebetterindia.com/10725/12-indian-scientists-changed-the-world-inspiring/",
      image:
        "https://en-media.thebetterindia.com/uploads/2014/05/SatyenBose1925.jpg?compress=true&quality=80&w=768&dpr=1.3"
    },
    {
      firstname: "Srinivasa",
      lastname: "Ramanujan",
      story:
        "Born on December 22, 1887 in Tamil Nadu, Ramanujam was an Indian mathematician and autodidact who, with almost no formal training in pure mathematics, made extraordinary contributions to mathematical analysis, number theory, infinite series, and continued fractions.\n" +
        "By age 11, he had exhausted the mathematical knowledge of two college students who were lodgers at his home. He was later lent a book on advanced trigonometry written by S. L. Loney.",
      link:
        "https://www.thebetterindia.com/10725/12-indian-scientists-changed-the-world-inspiring/",
      image:
        "https://en-media.thebetterindia.com/uploads/2014/05/RamanujanSrinivasa.jpg?compress=true&quality=80&w=768&dpr=1.3"
    },
    {
      firstname: "Vikram",
      lastname: "Sarabhai",
      story:
        "Considered as the Father of India’s space programme, Vikram Sarabhai was born on on 12 August, 1919 in the city of Ahmedabad in Gujarat. He was instrumental in the setting up of the Indian Space Research Organization (ISRO), when he successfully convinced the Indian government of the importance of a space programme for a developing nation after the launch of the Russian Sputnik.",
      link:
        "https://www.thebetterindia.com/10725/12-indian-scientists-changed-the-world-inspiring/",
      image:
        "https://en-media.thebetterindia.com/uploads/2014/05/Vikram_Sarabhai.jpg?compress=true&quality=80&w=768&dpr=1.3"
    },
    {
      firstname: "Har Gobind",
      lastname: "Khorana",
      story:
        "Born on January 9, 1922 at Raipur village in West Punjab (now in Pakistan), Khorana was an Indian-American biochemist who shared the 1968 Nobel Prize for Physiology or Medicine with Marshall W. Nirenberg and Robert W. Holley for research that helped to show how the order of nucleotides in nucleic acids, which carry the genetic code of the cell, control the cell’s synthesis of proteins.",
      link:
        "https://www.thebetterindia.com/10725/12-indian-scientists-changed-the-world-inspiring/",
      image:
        "https://en-media.thebetterindia.com/uploads/2014/05/08_khorana_pu.jpg?compress=true&quality=80&w=768&dpr=1.3"
    },
    {
      firstname: "Amartya",
      lastname: "Sen",
      story:
        "Another shining name in the list of Nobel laureates of India is Amartya Sen, who was awarded the Nobel Prize in Economics for his significant contributions to Welfare Economics and his exemplary work for the causes and prevention of famines. Sen was born in erstwhile Calcutta. He is currently working his time teaching in the USA and UK. He has written books that carry a vigorous intellectual depth. Amartya Sen is the fourth Indian to be honoured with Nobel Prize to India.",
      link:
        "https://leverageedu.com/blog/nobel-laureates-of-india/#:~:text=Amartya%20Sen%2C%20Nobel%20Prize%20in,Prize%20in%20Economic%20Sciences%20(2019)",
      image:
        "https://leverageedu.com/blog/wp-content/uploads/2021/12/Amartya_Sen_2017-edited-1.jpg"
    },
    {
      firstname: "Kailash",
      lastname: "Satyarthi",
      story:
        "Kailash Satyarthi is an Indian social reformer who campaigned against child labour in India and advocated the universal right to education. He was the co-recipient of the Nobel Peace Prize along with Malala Yousafzai. He is the founder of several social activist organizations like Bachpan Bachao Andolan, Global Campaign for Education, Global March Against Child Labour and Kailash Satyarthi Children’s Foundation.",
      link:
        "https://leverageedu.com/blog/nobel-laureates-of-india/#:~:text=Amartya%20Sen%2C%20Nobel%20Prize%20in,Prize%20in%20Economic%20Sciences%20(2019)",
      image:
        "https://leverageedu.com/blog/wp-content/uploads/2021/12/kailash-satyarthi-1412937686-8077810-edited-1.jpg"
    },
    {
      firstname: "Lt. KC",
      lastname: "Nongrum",
      story:
        "Born in Shillong, Meghalaya, in March 1975, he was entrusted with assaulting the feature of the South-Eastern direction in the operation to seize Point 4812 in the Batalik Sector. He guided his column over the nearly vertical cliff face. For almost two hours, the enemy used automatic fire to pin down Lt. Keishing Clifford Nongrum's column. Despite this, he threw grenades into it, killing six enemy soldiers without regard for his personal safety.",
      link:
        "https://news.abplive.com/news/india/kargil-vijay-diwas-2022-10-indian-army-heroes-of-kargil-war-india-will-always-be-proud-1544433",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Capt_K_C_Nongrum_%28MVC%29.jpg/225px-Capt_K_C_Nongrum_%28MVC%29.jpg"
    },
    {
      firstname: "Naik Digendra",
      lastname: "Kumar",
      story:
        "Born in the month of July 1969 in Sikars, Rajasthan. During his company's assault on the Tololing feature in Drass Sector, he was the commander of the Light Machine Gun Group. The major goal was to take a well-defended enemy position. During his company's assault on the Tololing feature in Drass Sector, he was the commander of the Light Machine Gun Group. ",
      link:
        "https://news.abplive.com/news/india/kargil-vijay-diwas-2022-10-indian-army-heroes-of-kargil-war-india-will-always-be-proud-1544433",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/IMG-20180917-WA0001.jpg/330px-IMG-20180917-WA0001.jpg"
    },
    {
      firstname: "Brigadier KS",
      lastname: "Chandpuri",
      story:
        "Brigadier Kuldip Singh Chandpuri MVC, VSM (22 November 1940 – 17 November 2018) was a decorated Indian Army officer.[2] He is known for his leadership in the Battle of Longewala during the Indo-Pakistani War of 1971, for which he was awarded the Maha Vir Chakra, the second highest Indian military decoration, by the Indian government. The 1997 Hindi film Border was based on the battle, with his role played by Sunny Deol.",
      link: "https://en.wikipedia.org/wiki/Kuldip_Singh_Chandpuri",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/KuldipsinghchandpuriGujjar.jpg"
    },
    {
      firstname: "Ajit",
      lastname: "Doval",
      story:
        "Ajit Doval KC (born 20 January 1945) is an Indian bureaucrat, spymaster, former RAW spy and Intelligence Bureau chief, serving as the fifth and current National Security Advisor (NSA) to the Prime Minister of India, with the precedence equivalent to Cabinet Minister.\n" +
        "He previously served as the Director of the Intelligence Bureau (IB) in 2004–05, after spending a decade as the head of its operation wing.",
      link:
        "https://en.wikipedia.org/wiki/Ajit_Doval#:~:text=Doval%20joined%20the%20Indian%20Police,anti%2Dinsurgency%20operations%20in%20Punjab.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Ajit_Kumar_Doval.jpg/300px-Ajit_Kumar_Doval.jpg"
    },
    {
      firstname: "Major Somnath",
      lastname: "Sharma",
      story:
        '"The enemy is only 50 yard from us. We are heavily outnumbered .We are under devastating fire .I shall not withdraw an inch but will fight to the last man and the last round". Among those uncountable brave soldiers who have given their lives during the Indo-Pakistan war in 1947 , there was a man who did something so extraordinary and  proved the true meaning of leadership .From the very beginning of his career in the Indian army. Major Somnath Sharma was known for praiseworthy work.',
      link: "https://www.4ono.com/army-interesting-stories/",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/77/Somnath_Sharma_2003_stamp_of_India.jpg"
    },
    {
      firstname: "Subedar YS",
      lastname: "Yadav",
      story:
        "\"It was 1999 when Kashmir was once again under the attack Pakistan army had invaded the Indian military lines of the border and have successfully captured several bunkers . They have captured the Tiger hill and soon the Indian army was in danger as they were completely surrounded by the enemy\". It was May when subedar Yogendra Yadav who was part of the 'Ghatak' commando platoon, an elite special force unit received their order to attack the enemies and recapture the fort at any cost.",
      link: "https://www.4ono.com/army-interesting-stories/",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Sub_Maj_%26_Hony_Capt_Yogendra_Singh_Yadav%2C_PVC.jpg/330px-Sub_Maj_%26_Hony_Capt_Yogendra_Singh_Yadav%2C_PVC.jpg"
    },
    {
      firstname: "Havildar Hangpan",
      lastname: "Dada",
      story:
        '"A hero was born in Boduri village in far flung Arunachal Pradesh .He joined Indian army as a soldier in the 3rd\n' +
        "Battalion the Parachute Regiment on 28 October 1997\". Among his battalion members , Hangpan was popularly known as 'Dada' a name that represents something more than respect .In 2016 , he was transferred to the Rashtriya Rifles battalion on operations in Kupwara district Jammu and Kashmir.",
      link: "https://www.4ono.com/army-interesting-stories/",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e5/Hangpan_Dada.jpg"
    },
    {
      firstname: "Air Cmde Mehar",
      lastname: "Singh",
      story:
        "Air Cmde Mehar Singh was born in the district of Lyallpur on 20 Mar 1915.  Mehar Singh was attracted by the idea of flying at a very young age which led him to join Royal Air Force College Cranwell, England in 1934, and soon Mehar Singh earned the respect of his fellow airmen with his flying skills.  Formally known as Baba Mehar Singh, he earned an image of a strict disciplinarian amongst his subordinates, but also looked after them with a lot of care and affection.  As a 29 years old Squadron Commander he was awarded Distinguished Service Order (DSO) for effective leadership and personal bravery.  Out of his many achievements, the mission led by Baba Mehar Singh carrying the first contingent of Indian Army in a Dakota aircraft to Srinagar in 1948 is the most memorable.  Baba Mehar Singh retired in 1948 from the IAF. His life was cut short when he died in an air crash on 11 Mar 1952.",
      link: "https://indianairforce.nic.in/our-stalwarts/",
      image:
        "https://indianairforce.nic.in/wp-content/uploads/2021/08/mehar-1.jpeg"
    },
    {
      firstname: "Air Marshal Subroto",
      lastname: "Mukherjee",
      story:
        "Air Cmde Mehar Singh was born in the district of Lyallpur on 20 Mar 1915.  Mehar Singh was attracted by the idea of flying at a very young age which led him to join Royal Air Force College Cranwell, England in 1934, and soon Mehar Singh earned the respect of his fellow airmen with his flying skills.  Formally known as Baba Mehar Singh, he earned an image of a strict disciplinarian amongst his subordinates, but also looked after them with a lot of care and affection.  As a 29 years old Squadron Commander he was awarded Distinguished Service Order (DSO) for effective leadership and personal bravery.  Out of his many achievements, the mission led by Baba Mehar Singh carrying the first contingent of Indian Army in a Dakota aircraft to Srinagar in 1948 is the most memorable.  Baba Mehar Singh retired in 1948 from the IAF. His life was cut short when he died in an air crash on 11 Mar 1952.",
      link: "https://indianairforce.nic.in/our-stalwarts/",
      image:
        "https://indianairforce.nic.in/wp-content/uploads/2021/08/mukherjee.jpeg"
    },
    {
      firstname: "Flying Officer NJS",
      lastname: "Sekhon",
      story:
        "Flying Officer Nirmal Jit Singh Sekhon was born on 17 Jul 1945 in the village of Rurka in Ludhiana District, Punjab.  He was the son of Hony Flight Lieutenant Tarlochan Singh Sekhon.  He was commissioned into the flying branch of the Indian Air Force on 04 Jun 1967. He was posthumously awarded the Param Vir Chakra, India’s highest military decoration, in recognition of his lone defence of Srinagar Air Base flying a Gnat against Sabres during a Pakistani air raid in the Indo-Pakistan War of 1971.",
      link: "https://indianairforce.nic.in/our-stalwarts/",
      image:
        "https://indianairforce.nic.in/wp-content/uploads/2021/08/nirmal.jpeg"
    },
    {
      firstname: "AVM Harjinder",
      lastname: "Singh",
      story:
        "Harjinder Singh joined the Indian Air Force (IAF) as a Hawai Sepoy (Air Soldier), a rank lower than that of a soldier. He was commissioned into the Royal Air Force on 03 Sep 1942. One of his many initiatives was the construction of an aircraft at IAF Station Kanpur in early 1958.  He was an engineering genius who had a vision ahead of his time. He rose to the rank of Air Vice Marshal and became the first Commander-in-Chief of the prestigious Maintenance Command at Kanpur. He passed away untimely on 06 Sep 1971.",
      link: "https://indianairforce.nic.in/our-stalwarts/",
      image:
        "https://indianairforce.nic.in/wp-content/uploads/2021/08/harjinder.jpeg"
    },
    {
      firstname: "Air Chief Marshal PC",
      lastname: "Lal",
      story:
        "Air Chief Marshal Pratap Chandra Lal was born in December 1916 at Allahabad, in a family of lawyers. He had an early interest in aviation, and became the youngest Indian to earn Amateur Pilot’s Licence at the age of 17, in January 1934.The outbreak of war in 1939 resulted in the expansion of Royal Indian Air Force and all those with pilots’ licenses were invited to join up. Thence began his glorious journey in the Indian Air Force. He served the IAF from 1939 until his retirement in 1973. During his illustrious career, he commanded No. 7 Sqn (in the Burma campaign), was AOC-in-C of HQ Western Air Command, Managing Director and Chairman of HAL, the VCAS and the Chief of Air Staff during the Indo-Pakistan War of 1971.",
      link: "https://indianairforce.nic.in/our-stalwarts/",
      image:
        "https://indianairforce.nic.in/wp-content/uploads/2021/08/pclal.jpeg"
    },
    {
      firstname: "Captain Pradeep",
      lastname: "Singh",
      story:
        "Captain Pradeep Singh is the recipient of the Nao Sena Medal for Gallantry for his meticulous planning of one of the most daring operations during Operation Rahat in 2015. As the commander of INS Tarkash, his actions led to the safe evacuation of around 600 people of 18 different nationalities from Al Hodeidah and Aden harbours in the face of great hostility and backdrop of violence. He also evacuated 10 nurses who were stuck in heavy crossfiring, as well as the body of the first Indian casualty in the Yemen conflict.",
      link: "https://www.thebetterindia.com/39694/heroes-indian-navy/",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6e/Captain_Pradeep_Singh.jpg?20150824084828"
    },
    {
      firstname: "S O Kalyani",
      lastname: "Sen",
      story:
        "The Women’s Royal Indian Naval Service was established as part of the The Royal Indian Navy (RIN) during World War II. Although the women did not serve on board the ships, this did give them a role in the navy. The first Indian service woman who visited the UK was second officer Kalyani Sen. Sen went there to make a comparative study of training and administration in the Women’s Royal Naval Service.",
      link: "https://www.thebetterindia.com/39694/heroes-indian-navy/",
      image:
        " https://en-media.thebetterindia.com/uploads/2015/12/14.jpg?compress=true&quality=80&w=700&dpr=1.3"
    },
    {
      firstname: "Captain Rajesh",
      lastname: "Dhankhar",
      story:
        "Captain Rajesh Dhankhar received the Nao Sena Medal for Gallantry for saving hundreds of lives amidst heavy shelling in war-torn Yemen as a part of Ops Rahat. Undeterred by the dangerous security scenario ashore, the officer led his team from the front and fought hard to evacuate stranded personnel even during dark hours. This Commanding Officer of INS Mumbai was responsible for the safe evacuation of 441 Indians and foreign nationals.",
      link: "https://www.thebetterindia.com/39694/heroes-indian-navy/",
      image:
        "https://en-media.thebetterindia.com/uploads/2015/12/19.jpg?compress=true&quality=80&w=400&dpr=1.3"
    },
    {
      firstname: "Ravinder",
      lastname: "Kaushik",
      story:
        "Story of RAW agent, who worked as a Pakistan Army Major\n" +
        "Kaushik is regarded as India's best spy to ever penetrate the ranks of the Pakistan army. Kaushik loved theatre and performing characters as a teenager and that's how RAW spotted him. It is said that Kaushik had learned Urdu, acquainted himself with Muslim religious texts and the terrain of Pakistan during his training.He was sent to Pakistan with a new name- Nabi Ahmed Shakir, while all his records in India was destroyed. He later completed his LLB from Karachi University and joined Pakistan Army and became a commissioned officer.",
      link:
        "https://economictimes.indiatimes.com/news/defence/story-of-raw-agent-ravinder-kaushik-who-worked-as-a-pakistan-army-major/-the-greatest-spy-of-india/slideshow/58240718.cms",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/98/Ravinder_Kaushik_former_RAW_agent.jpg"
    }
  ];

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const [element, setElement] = useState(arr[randomNumber(0, arr.length - 1)]);

  return (
    <div className="tribute_main">
      <div className="tribute_body">
        <div className="per_suy">
          <img className="tribute_soldier_mob" src={element.image} alt="" />
          <div className="tribute_content">
            <span className="l1_suy">{element.firstname}</span>
            <br />
            <span className="l2_suy">{element.lastname}</span>
            <p className="l3_suy">{element.story}</p>
            <div className="a_suy">
              <a className="btn a1_suy" href={element.link}>
                Read Full Story
              </a>
              <a
                href="#"
                onClick={() => {
                  setElement(arr[randomNumber(0, arr.length - 1)]);
                }}
                className="btn a2_suy"
              >
                Load More
              </a>
            </div>
          </div>

          <img className="tribute_soldier" src={element.image} alt="" />
        </div>
        <div className="tribute_end_line">
          <div>
            Let this story not go unnoticed. Share on your social media with
            #tributeByHorizon! &ensp;
          </div>
          <div>
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="instagram" />
            </a>
            &ensp;
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="facebook" />
            </a>
            &ensp;
            <a href="https://twitter.com/">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tribute;
