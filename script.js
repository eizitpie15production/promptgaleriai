// --- 💾 DATABASE LOCALSTORAGE ---
const STORAGE_KEY = 'myGalleryData';
const defaultGalleryData = [
  {
    "id": 1,
    "image": "images/1.jpg",
    "promptText": "A full-body realistic studio portrait of a male model standing confidently against a clean white background. He wears a black bomber jacket with blue-green and blue-purple accents, loose dark-gray cargo pants with multiple pockets, and white sneakers. The model carries a large black tote bag in one hand while slightly leaning forward with one leg stepping ahead, as if in mid-stride, creating a sense of motion and confidence. The camera is positioned at a low angle, making the subject appear tall and powerful, adding a dynamic and dramatic perspective. His facial expression is neutral yet composed. The lighting is soft and evenly distributed, typical of high-end fashion studio photography. Captured with a Sony Alpha A7R IV using a 50mm lens, f/4 aperture — ultra-detailed textures, sharp focus on the subject, smooth depth of field, minimalist aesthetic, editorial fashion vibe."
  },
  {
    "id": 2,
    "image": "images/2.jpg",
    "promptText": "A high-quality studio portrait of a stylish young man sitting casually on the floor. He wears a black fleece jacket, beige loose pants, black sneakers, and futuristic sunglasses. The scene is lit with soft, diffused studio lighting, creating gentle shadows and a neutral background. The mood feels modern, confident, and fashion-forward, similar to an editorial photo for a streetwear brand. Ultra-realistic photography, 8K detail, shallow depth of field, Sony Alpha camera, cinematic tone."
  },
  {
    "id": 3,
    "image": "images/3.jpg",
    "promptText": "A stylish young man with the same facial features and hairstyle as the attached photo is walking out of a trendy café entrance. He is wearing a loose black t-shirt with a small logo on the chest, loose black cargo pants, black and white sneakers, and a black watch on his left wrist while holding a dark-colored water bottle. The background features a glass door with signage and indoor plants above it, creating a trendy and casual street vibe. A full-body realistic portrait with natural lighting and youthful streetwear style."
  },
  {
    "id": 4,
    "image": "images/4.jpg",
    "promptText": "A full-body realistic studio portrait of a man sitting confidently in a black director's chair. He wears a black biker leather jacket, a white tank top, black jeans, and cream canvas sneakers. Clean, plain gray studio background."
  },
  {
    "id": 5,
    "image": "images/5.jpg",
    "promptText": "A full-body realistic studio portrait of a man sitting confidently in a black director's chair. He wears a black biker leather jacket, a white tank top, black jeans, and cream canvas sneakers. Clean, plain gray studio background."
  },
  {
    "id": 6,
    "image": "images/6.jpg",
    "promptText": "Potret profesional seorang laki laki muda indonesia berambut seperti pada gambar ini, mengenakan jas hitam. Ia berdiri dengan tangan disilangkan dan tersenyum tipis, menatap lurus ke arah penonton. Latar belakangnya berwarna merah pekat dengan efek lampu sorot melingkar di belakang kepalanya."
  },
  {
    "id": 7,
    "image": "images/7.jpg",
    "promptText": "Potret realistis berkualitas tinggi seorang pemuda Indonesia berambut pendek gelap, duduk di tangga berwarna terang. Ia mengenakan kemeja lengan panjang bergaris hitam, celana panjang abu-abu, dan sepatu kets putih. Pandangannya tertuju ke atas dan ke kiri, dengan ekspresi kontemplatif. Pemandangan tersebut diterangi oleh sinar matahari yang kuat dan hangat yang datang dari kanan, menciptakan bayangan yang jelas di dinding di belakangnya dan menonjolkan lekuk wajah dan tubuhnya. Suasana keseluruhannya penuh perhatian dan tenteram, dengan kualitas sinematik. Foto ini diambil dengan kamera profesional, 8K, ultra-realistis."
  },
  {
    "id": 8,
    "image": "images/8.jpg",
    "promptText": "Potret seorang pemuda karismatik, percaya diri, dan energik dengan rambut acak-acakan, duduk santai. Mengenakan kemeja biru lengan digulung, dasi bergaris longgar, celana abu-abu, dan jas tersampir di bahu. Ia berpose 'finger gun' ke kamera dengan jam tangan hitam. Latar belakang studio biru kehijauan, pencahayaan lembut depan, sudut rendah, DOF dangkal agak terlihat sedikit jauh."
  },
  {
    "id": 9,
    "image": "images/9.jpg",
    "promptText": "A high-resolution full-body studio portrait of a young Asian man in a sharp black suit and tie, professional corporate style, sharp focus, on a solid dark gray background"
  },
  {
    "id": 10,
    "image": "images/10.jpg",
    "promptText": "A trendy and stylish studio portrait of a young Asian man, wearing round-frame eyeglasses, sitting casually on a bright yellow cubic stool. He is dressed in a vibrant blue and yellow letterman jacket with 'Vayou' embroidered on the chest and a large 'V' on the opposite side, over a plain white t-shirt, and khaki-colored jogger-style pants. He is holding a white takeaway coffee cup with a dark lid, featuring a subtle logo, in his right hand. He is wearing clean white sneakers. The background is a warm, solid orange color, creating a striking contrast with his outfit. The lighting is soft and even, highlighting the textures of his clothing and the details of his accessories. He looks directly at the camera with a confident and slightly serious expression, embodying a modern, youthful, and urban aesthetic."
  },
  {
    "id": 11,
    "image": "images/11.jpg",
    "promptText": "Hands in Pockets - Relaxed Authority A hyper-realistic cinematic editorial portrait of the uploaded person (preserve face 100%). He stands tall in all dark moody studio, surrounded by soft drifting smoke under a dramatic spotlight.Outfit:Fit slate-black luxury suit with fit-leg trousers, paired with a slightly unbuttoned white silk shirt. Both hands tucked casually in pockets, shoulders relaxed, confident expression, head tilted slightly upward."
  },
  {
    "id": 12,
    "image": "images/12.jpg",
    "promptText": "A photorealistic 8K stock image of the same young man with the same facial features and hairstyle as the reference. He is sitting sideways on a cube, one arm resting on his knee. Outfit: oversized beige hoodie with matching joggers, paired with sneakers. Background:  solid green color, clean fashion editorial tone."
  },
  {
    "id": 13,
    "image": "images/13.jpg",
    "promptText": "A full-body studio portrait of a young Asian man, appearing confident and stylish, sitting casually on a rustic wooden backless stool. He is wearing a dark t-shirt under a fitted blue denim jacket, with the sleeves slightly rolled up, and dark grey jeans. His arms are crossed, and he is looking directly at the camera with a friendly, subtle smile. The background is a clean, solid light grey with professional studio lighting setup visible: two large rectangular softboxes with grid diffusers are placed on either side of the subject, and a prominent, bright circular spotlight creates a glowing halo effect behind his head and shoulders, providing a strong rim light. The image has sharp focus, excellent clarity, and a modern, professional aesthetic."
  },
  {
    "id": 14,
    "image": "images/14.jpg",
    "promptText": "A full-body studio portrait of a young Asian man, appearing confident and stylish, standing against a vibrant, solid red background. He is dressed in a clean, all-white casual outfit, consisting of a white crewneck sweatshirt and matching white joggers. He is wearing white sneakers and a silver-toned watch on his left wrist. He is looking directly at the camera with a friendly, subtle smile. His posture is relaxed yet stylish, with one leg slightly crossed over the other, giving the composition a dynamic feel. The lighting is soft and even, highlighting the texture of his clothing and creating subtle shadows that give depth to the image. The overall impression is modern, clean, and slightly minimalist, with a strong focus on the subject and his crisp attire against the bold background. The image has sharp focus, excellent clarity, and a professional aesthetic."
  },
  {
    "id": 15,
    "image": "images/15.jpg",
    "promptText": "Sebuah studio potret seorang pria muda yang berdiri tegak, memancarkan aura kasual namun stylish. Dia mengenakan hoodie biru muda kebesaran dengan dua garis cokelat horizontal di setiap lengan, celana kargo cokelat yang longgar, dan sepatu kets putih dengan aksen biru dan abu-abu. Rambutnya ditata rapi, dan dia melihat langsung ke kamera dengan ekspresi tenang. Tangannya berada di saku hoodie-nya, menambahkan kesan santai pada penampilannya. Di samping kanannya, ada karakter Squirtle dari Pokémon yang bersinar lembut dengan cahaya biru, tampak seperti efek hologram, berdiri di atas permukaan reflektif yang sama dengan pria tersebut. Seluruh adegan ini berlatar belakang biru muda solid yang seragam, menciptakan suasana yang bersih dan modern. Pencahayaan lembut dan merata, menyoroti tekstur pakaian dan detail karakter Pokémon."
  },
  {
    "id": 16,
    "image": "images/16.jpg",
    "promptText": "A full-shot portrait of an adult man with light skin, wearing a blue and white short-sleeved shirt with the letters MHA on it, light gray jeans, and white sneakers. He is seated on a black chair with his legs crossed, hands clasped, and is looking directly at the camera with a neutral expression. He has short, dark hair. Behind him is a brick wall with a bright neon sign that reads VAYOU coffee. Other patrons are blurred in the background, seated at tables under umbrellas. There is a drink on the table to the man's left. The lighting is dim with a warm glow from the neon sign and other lights."
  },
  {
    "id": 17,
    "image": "images/17.jpg",
    "promptText": "Seorang pria muda Asia berpose di depan mobil Jeep Wrangler berwarna oranye cerah. Ia mengenakan hoodie hitam polos, celana panjang abu-abu, dan sepatu sneakers putih. Pria ini berkacamata, dengan rambut hitam pendek tersisir rapi. Ia berdiri tegak dengan tangan terkunci di depan, menghadap kamera dengan senyum tipis. Latar belakang menunjukkan pemandangan pegunungan atau bukit yang berkabut, dengan tanah gelap di bagian depan. Komposisi foto vertikal, dengan fokus utama pada pria dan mobil"
  },
  {
    "id": 18,
    "image": "images/18.jpg",
    "promptText": "Seorang pria muda Asia berbadan agak berisi dengan rambut hitam pendek rapi dan memakai kacamata hitam berdiri di dalam sebuah kafe. Ia mengenakan kemeja lengan panjang berwarna hijau army yang digulung di bagian lengan, celana panjang putih, dan sepatu sneakers putih. Tangan kanannya memegang segelas minuman kopi dingin, sementara tangan kirinya dimasukkan ke dalam saku celana. Ia memakai jam tangan berwarna hitam. Pria tersebut menghadap sedikit ke kanan kamera dengan ekspresi datar. Latar belakang menunjukkan interior kafe yang minimalis dengan rak kayu berisi beberapa hiasan dan pajangan, serta sebuah etalase kaca berisi makanan. Komposisi foto vertikal, dengan fokus utama pada pria tersebut."
  },
  {
    "id": 19,
    "image": "images/19.jpg",
    "promptText": "Seorang pria muda Asia berbadan atletis dengan rambut hitam pendek rapi. Ia mengenakan jaket denim biru tua, kaus hitam polos, celana panjang hitam, dan jam tangan hitam. Pria tersebut menyilangkan kedua tangannya di depan dada, menghadap lurus ke kamera dengan senyum tipis. Latar belakang menunjukkan interior rumah yang modern dengan jendela besar yang menampilkan pemandangan kota di malam hari. Komposisi foto vertikal, dengan fokus utama pada pria tersebut."
  },
  {
    "id": 20,
    "image": "images/20.jpg",
    "promptText": "Seorang pria Asia dan berambut hitam dengan gaya rambut modern sedang duduk di kafe. Dia mengenakan kaus putih polos, celana pendek putih, dan sepatu kets berwarna terang. Dia memegang cangkir kopi berwarna abu-abu dengan tangan kirinya dan melihat ke samping dengan ekspresi termenung. foto dipotret dari luar dengan memfokuskan menembus kaca bening didalam kafe terlihat Latar belakang menunjukkan interior kafe yang remang-remang dengan meja dan kursi kayu, serta beberapa orang lainnya yang tidak fokus. Komposisi foto vertikal, dengan pantulan cahaya samar di bagian atas gambar."
  },
  {
    "id": 21,
    "image": "images/21.jpg",
    "promptText": "Seorang pria Asia berambut hitam dengan gaya rambut rapi dan ekspresi wajah yang tenang sedang duduk di kursi gaming kulit hitam. Ia mengenakan kaus sepak bola merah dengan logo Manchester United di bagian depan, celana pendek hitam, dan sepatu kets putih. Kaki kanannya menyilang di atas kaki kirinya, dan tangannya diletakkan di pangkuannya. Ia berada di dalam ruangan yang dihiasi dengan tema Manchester United FC. Dinding di belakangnya berwarna merah cerah dengan logo besar Manchester United FC di tengahnya. Di bawah logo, terdapat meja gaming hitam dengan monitor komputer yang menampilkan pertandingan sepak bola. Di kedua sisi meja, ada rak-rak putih yang penuh dengan piala emas dan bingkai foto. Di lantai, terdapat karpet bulat berwarna merah dengan logo Manchester United FC yang besar. Pencahayaan ruangan terang dan merata."
  },
  {
    "id": 22,
    "image": "images/22.jpg",
    "promptText": "Seorang pria Asia dengan gaya modern yang keren berdiri di tengah gambar, menatap ke arah samping. Ia mengenakan setelan jas berwarna cokelat muda, kaus putih, celana panjang putih, dan sepatu putih, dilengkapi dengan kacamata hitam. Di latar belakang, ada gambar dirinya yang lebih redup dan samar-samar dengan kacamata hitam yang sama, dikelilingi oleh cincin neon berwarna kuning yang terang, memberikan kesan futuristik dan dramatis pada keseluruhan gambar. Cahaya redup menyorotinya dari depan."
  },
  {
    "id": 23,
    "image": "images/23.jpg",
    "promptText": "Seorang model pria Asia dengan potongan rambut hitam pendek yang rapi, mengenakan setelan kasual monokrom putih yang bergaya. Ia memakai kaus lengan panjang putih berukuran besar dengan detail jahitan yang halus, dan celana pendek putih yang serasi, menonjolkan kulitnya yang kecokelatan. Sepatu kets putih klasik melengkapi penampilannya. Ia sedang duduk santai di atas kursi atau balok berwarna hijau muda yang serasi dengan latar belakang studio. Salah satu tangannya memegang kacamata hitam berbingkai tebal yang modern, seolah baru saja menurunkannya sedikit, atau hendak memakainya. Kacamata hitam ini memberikan sentuhan misterius dan keren pada ekspresinya."
  },
  {
    "id": 24,
    "image": "images/24.jpg",
    "promptText": "Seorang pria muda Asia duduk di tangga dalam ruangan dengan cahaya keras dari jendela yang menciptakan bayangan yang tajam. Dia mengenakan sweater hitam lengan panjang dan celana panjang abu-abu gelap, dipasangkan dengan sepatu kets putih tebal. Rambutnya hitam dan ditata rapi. Dia melihat ke atas dan ke samping, dengan ekspresi merenung. Latar belakangnya adalah dinding abu-abu terang, dan bayangan dirinya terlihat di dinding di sebelah kanannya. Suasana keseluruhan memiliki kualitas yang tenang dan introspektif."
  },
  {
    "id": 25,
    "image": "images/25.jpg",
    "promptText": "Seorang pria Indonesia yang modis mengenakan setelan hitam yang elegan, kemeja hitam, dan sepatu pantofel kulit hitam. Ia memakai kacamata hitam gaya dan jam tangan emas. Pria itu duduk dengan postur santai namun percaya diri di kursi hitam minimalis, memegang cangkir kopi putih sekali pakai di tangan kirinya. Ia memandang ke samping, dengan ekspresi tenang dan berkelas. Pencahayaan lembut menciptakan bayangan yang menarik di dinding cokelat muda di belakangnya, menyoroti profilnya dan menambahkan kesan dramatis pada potretnya. Foto ini memiliki estetika yang bersih dan modern, dengan fokus pada gaya dan komposisi."
  },
  {
    "id": 26,
    "image": "images/26.jpg",
    "promptText": "Foto seorang pria asia dengan kulit coklat muda dan rambut hitam pendek, mengenakan kaus merah marun polos, celana pendek hitam, dan sepatu kets putih dengan kaus kaki putih. Dia memegang sebotol air di tangan kirinya. Dia berjalan keluar dari pintu kaca ganda. Pencahayaan lembut, siang hari."
  },
  {
    "id": 27,
    "image": "images/27.jpg",
    "promptText": "Buat foto seorang pria wajah dan rambut sama persis seperti di foto , berat badan 70 kg, tinggi 168 cm . sedang berlari santai, dengan latar belakang stadion . Ia mengenakan kaos sport warna hitam dan celana panjang olahraga warna hitam . Ia memakai sepatu lari merek nike berwarna hitam dengan aksen biru. Pria tersebut berpose jogging dengan pose candid Ia memegang handphone android , memakai tws dan memakai smartwatch dengan strap warna hitam di pergelangan tangan kiri. Latar belakang dipenuhi vegetasi hijau cerah, pohon-pohon besar, dan sedikit terlihat arena stadion dan pencahayaan bokeh hangat dari lampu taman. Langit sebagian terlihat di kanan atas gambar, menandakan suasana pagi atau sore dengan pencahayaan alami yang lembut dan seimbang. Jalan yang dilalui di pinggir trotoar yang hitam putih di pinggirannya dengan jalanan cor semen . Terdapat beberapa orang lain yang sedang jogging Spesifikasi kamera dan aspek teknis: • Tipe kamera: DSLR profesional atau mirrorless full-frame (contoh: Sony A7R IV atau Canon EOS R5) • Lensa: 85mm f/1.8 (untuk menghasilkan depth of field dangkal dan latar belakang bokeh) • Aperture: f/1.8 (untuk latar belakang blur dan fokus tajam pada subjek) • Shutter speed: 1/1000s (untuk membekukan gerakan saat berjalan) • ISO: 200 (pencahayaan alami yang cukup, menjaga kualitas tanpa noise) • White balance: Daylight • Fokus: Fokus otomatis tepat pada wajah subjek • Pencahayaan: Natural lighting, kemungkinan diambil saat golden hour pagi/sore Komposisi gambar: • Subjek berada di tengah bingkai dengan ruang ke depan arah gerakan, menciptakan keseimbangan visual. • Sudut pengambilan gambar sejajar dengan tinggi mata (eye-level shot), memberikan kesan alami dan membumi. • Latar belakang blur namun tetap menunjukkan konteks stadion yang hijau dan rapi."
  },
  {
    "id": 28,
    "image": "images/28.jpg",
    "promptText": "Seorang pria Asia yang muda dan stylish berdiri di depan tembok grafiti di lingkungan perkotaan saat matahari terbenam. Ia mengenakan kaus putih bergambar grafiti hitam, hoodie abu-abu muda, celana kargo hitam, dan sepatu kets tebal berwarna hitam dan putih. Tangannya berada di saku celananya, dan ia melihat ke samping dengan ekspresi tenang. Gambar ini adalah bidikan potret seluruh tubuh, menampilkan fashion jalanan dan suasana urban. Cahaya keemasan dari matahari terbenam menciptakan highlight pada rambut dan kulitnya, serta pada grafiti di latar belakang."
  },
  {
    "id": 29,
    "image": "images/29.jpg",
    "promptText": "Seorang pria muda Asia duduk santai di sofa abu-abu, menghadap lurus ke kamera. Ia mengenakan kaus putih polos dan celana panjang hitam, serta sepatu Vans Old Skool hitam putih. Kaki kanannya menyilang di atas kaki kirinya, dengan sepatu kanannya bertumpu pada lutut kiri. Lengan kirinya sedikit tertekuk, dengan tangan kirinya memegang pahanya. Lengan kanannya diletakkan di sandaran sofa. Ekspresi wajahnya netral. Rambutnya hitam dan rapi. Latar belakang ruangan adalah dinding putih polos. Di sebelah kanan, sebagian bendera hitam bertuliskan JAKARTA berwarna putih terlihat. Lantainya berwarna abu-abu gelap dengan tekstur kasar. Pencahayaan lembut dan alami, menciptakan bayangan tipis. Komposisi foto full-body, diambil dari sudut kamera sejajar mata (eye-level), fokus tajam, warna natural, detail realistis. dan posisi duduk orang nya berada di tengah sofa"
  },
  {
    "id": 30,
    "image": "images/30.jpg",
    "promptText": "A young man in a dark olive green t-shirt, black cargo pants, and black and white sneakers is walking with a coffee cup in his left hand. He is also wearing a black baseball cap with GT in white letters on the front and a silver chain around his neck. A black backpack is visible on his back. He has short dark hair and a serious expression. The background is a dark, reflective surface, possibly a window or a polished wall, with a faint reflection of a person behind him. The lighting is bright, highlighting the man and his attire."
  },
  {
    "id": 31,
    "image": "images/31.jpg",
    "promptText": "Sebuah potret setengah badan nampak sampai celana sedikit. seorang pria muda dengan rambut hitam, berdiri di luar dengan latar belakang langit senja berwarna ungu dan oranye yang dramatis. Dia melihat ke atas dan ke kanan, dengan ekspresi berpikir. Dia mengenakan kaus putih dengan cetakan grafis berwarna-warni dan celana gelap. Latar belakang menunjukkan siluet kota yang kabur di bawah langit yang cerah. Pencahayaan lembut, menonjolkan fitur wajahnya dan detail pakaiannya."
  },
  {
    "id": 32,
    "image": "images/32.jpg",
    "promptText": "Full shot of a young man, 20s, with short black hair and a slight mustache, walking out of a modern building with glass doors. He is wearing a black t-shirt, black cargo pants, and black and white sneakers. He is holding a phone to his right ear as if on a call, and a clear plastic water bottle in his left hand. His expression is neutral, and he is looking directly at the camera. The background shows the entrance of the building, which appears to be a cafe or store, with dark interior visible. The lighting is overcast or diffused, creating a soft, even light."
  },
  {
    "id": 33,
    "image": "images/33.jpg",
    "promptText": "Seorang pria Asia berambut gelap, mengenakan hoodie hitam polos, celana panjang abu-abu, dan sepatu sneakers merk nike putih. mobil menghadap ke kamera dan terlihat mobil bagian depan. Dia bersandar dengan santai di bagian depan sisi kanan mobil Jeep Wrangler Rubicon berwarna oranye cerah. Mobilnya memiliki plat nomor Indonesia dengan tulisan 'B 12 OMO'. Latar belakangnya adalah pemandangan pegunungan yang megah dengan gunung berapi yang tertutup awan atau kabut tipis di kejauhan. Langit di atasnya sebagian berawan, dan tanahnya tampak kering dan berdebu. Suasana gambar adalah petualangan dan ketenangan, dengan pencahayaan alami yang lembut menonjolkan detail pria dan mobil."
  },
  {
    "id": 34,
    "image": "images/34.jpg",
    "promptText": "Seorang pria berdiri di pinggir sisi kiri mobil dekat lampu bagian depan, menghadap langsung ke arah kamera dengan senyum tipis dan percaya diri. Dia memiliki rambut pendek berwarna gelap dan mengenakan kaos hijau gelap di bawah jaket zip-up abu-abu dan hitam. Tangannya santai dimasukkan ke dalam saku celana gelapnya, dan dia mengenakan sepatu kets putih nike. Di lehernya, sebuah rantai tipis terlihat. Honda Civic Type R berwarna putih, dengan desain sporty dan lencana Honda merah, diparkir di jalan di belakangnya menghadap kamera. Lampu depan mobil mati, tetapi garis-garisnya yang ramping diterangi oleh lampu kota di sekitarnya. Plat nomor, yang sebagian terlihat, bertuliskan BM 805 MHA . Roda mobil berwarna perunggu atau emas, menambahkan sentuhan kustom. Latar belakang adalah blur yang hidup dari jalan kota jakarta di malam hari. Garis-garis cahaya terang dari kendaraan yang lewat menunjukkan gerakan dan aktivitas. Di kejauhan, beberapa bangunan dengan jendela yang menyala terlihat, dan lampu jalan memancarkan cahaya lembut. Suasana keseluruhan adalah urban dan keren, dengan fokus pada pria dan mobilnya yang khas. dan posisi mobil dan objek orangnya berada dibahu jalan. buat terlihat sedikit jauh agar objek orang dan mobil terlihat jelas dan lengkap"
  },
  {
    "id": 35,
    "image": "images/35.jpg",
    "promptText": "Buatkan foto seorang pemuda berswafoto saat mendaki di jalur sempit di tebing berpagar kayu, tanpa mengubah wajah menghadap formasi batuan ikonis berbentuk T-Rex di Pantai Kelingking, Nusa Penida, Bali. Pria mengenakan kemeja putih longgar dan celana pendek putih dengan sandal krem dan kacamata hitam, senyuman manis di bawah sinar matahari keemasan. Laut di latar belakang berwarna biru tua dengan ombak yang menghantam tebing. Vegetasi hijau rimbun mengelilingi jalur. Perspektif swafoto sudut lebar, sudut tinggi, komposisi lengan terentang. Pencahayaan alami yang hangat, bayangan lembut, cahaya keemasan, warna cerah, tekstur realistis, gaya fotografi perjalanan."
  },
  {
    "id": 36,
    "image": "images/36.jpg",
    "promptText": "ultra-realistic portrait of a young man (see preference photo) leaning casually against a stone wall in a modern urban outdoor setting during golden sunset. he stands with one leg bent, both hands in his pants pockets, looking confidently at the camera. he wears a white long-sleeve shirt with the sleeves rolled up, beige cargo pants, gray sport shoes, and a black wristwatch. he also wears a black sunglass. warm sunlight flares directly behind him, casting a soft golden glow on his face and creating realistic lens flares and contrast between light and shadow. the background shows modern glass buildings with reflections of sunset light. captured with a professional full-frame DSLR camera, 85mm lens, shallow depth of field, sharp focus on the subject, vivid warm tones, detailed textures, realistic shadows, and cinematic atmosphere. Angle: low-angle mid-shot, slightly from below, framing the subject from knees to head. Aspect ratio: 3:4 portrait Lighting: natural golden sunset backlight with warm highlights and soft rim light."
  },
  {
    "id": 37,
    "image": "images/37.jpg",
    "promptText": "A realistic, high-resolution photo of a stylish young man in business-casual attire (button-up shirt, slacks, and a watch), inside a modern Kopi Kenangan café. He wears a Ray-Ban sunglasses. He is standing at the counter, holding a phone and a takeaway coffee cup in the other. The background shows warm, ambient lighting, wooden textures, the Kopi Kenangan logo on the wall, and soft-focus baristas preparing drinks. The man is looking at menu with a natural, relaxed expression. Captured with a professional DSLR camera, 50mm lens, shallow depth of field, editorial style, natural lighting from large café windows."
  },
  {
    "id": 38,
    "image": "images/38.jpg",
    "promptText": "Seorang pria Asia dengan rambut hitam pendek dan kacamata berbingkai, mengenakan jaket varsity hitam dan putih dengan huruf 'H' besar di dada kiri, sedang duduk di dekat jendela di dalam Kopi Kenangan. Ia memegang cangkir Kopi Kenangan putih dengan sedotan hijau dan sedang minum. Refleksinya terlihat di jendela di sampingnya. Di latar belakang, melalui jendela, terlihat pemandangan luar yang agak buram, dan di dalam kafe, beberapa orang lain terlihat buram. Sebuah smartphone Iphone 17 pro max kamera 3 terbaru warna orange diletakkan di meja kayu di depannya. Pencahayaan lembut dan alami datang dari jendela."
  },
  {
    "id": 39,
    "image": "images/39.jpg",
    "promptText": "Seorang pria muda Asia mengenakan hoodie nike putih, celana jins hitam, dan sepatu kets putih sedang duduk kaki diangkat 1 ke kaki sebelahnya di kafe malam hari, dengan minuman es dan kue di atas meja di depannya. Dia melihat langsung ke kamera dengan ekspresi netral. Latar belakang menunjukkan bangunan kafe dengan tulisan de'caffé yang menyala, payung teras, dan orang-orang yang duduk di meja lain. Pencahayaan lembut dan hangat."
  },
  {
    "id": 40,
    "image": "images/40.jpg",
    "promptText": "Foto ultra-realistis seorang pria muda berjalan dengan percaya diri melalui terminal bandara terminal 3 jakarta modern, mengenakan hoodie Nike hitam, celana panjang jins atletik hitam, dan sepatu Nike kets putih. Dia memiliki ransel hitam dan kacamata kekinian, menarik koper hard-shell perak dengan satu tangan sambil memegang tas duffel hitam mewah di atasnya. Latar belakang menunjukkan para pelancong dan sinar matahari yang masuk melalui jendela kaca besar, memberikan cahaya alami yang hangat. Adegan ini menangkap suasana perjalanan yang stylish dan kasual dengan pencahayaan sinematik dan depth of field yang lembut, bergaya editorial mode."
  },
  {
    "id": 41,
    "image": "images/41.jpg",
    "promptText": "Seorang pria muda Asia berada ditangga melangkah turun dari pesawat jet pribadi, dengan latar belakang langit biru cerah dan landasan pacu. Dia mengenakan pakaian serba putih yang stylish: kaos oversized putih, celana panjang putih, dan sepasang sepatu sneakers nike high-top putih dengan aksen merah yang mencolok. Ia juga memakai kacamata hitam yang bergaya. Di tangan kirinya, ia memegang smartphone iphone terbaru warna orange. Sementara itu, di tangan kirinya, ia membawa tas duffel berwarna merah cerah."
  },
  {
    "id": 42,
    "image": "images/42.jpg",
    "promptText": "Seorang pria berdiri di dalam terowongan bawah air di sebuah akuarium. Dia mengenakan hoodie putih, celana hitam, dan sepatu jordan retro 4 oreo. Di tangan kirinya memegang cangkir kopi kenangan terlihat natural, dan tangan kanannya masuk saku celana dan terlihat menggunakan jam tangan dan di lehernya tergantung kamera dengan tali kecil. Dia tersenyum dan melihat ke arah penonton. Terowongan ini diterangi oleh lampu-lampu gantung di langit-langit, menciptakan cahaya hangat. Ikan-ikan berenang di air di kedua sisi terowongan. dengan pose keren dengan kaki menyila menghadap penonton."
  },
  {
    "id": 43,
    "image": "images/43.jpg",
    "promptText": "Seorang pria muda Asia mengenakan kaus hitam oversized dengan tulisan 'MHA Production' berwarna putih di bagian dada, celana kargo hitam, dan sepatu sneakers nike putih dan logo nikenya warna hitam. Dia mengenakan kacamata hitam, memegang gelas kopi take-away di tangan kirinya, dan tangan kanannya dimasukkan ke dalam saku celana. Dia bersandar santai ke dinding kaca sebuah bangunan tinggi. Pencahayaan adalah golden hour saat matahari terbenam. Latar belakang menunjukkan pemandangan kota saat senja dengan gedung-gedung tinggi yang sebagian buram dan jalanan yang lengang. Suasana keseluruhan terasa urban, stylish, dan sedikit melankolis. orang tersebut menghadap kamera dan disamping kirinya menciptakan pantulan hangat pada bangunan dan jalan. Refleksi dirinya terlihat jelas di dinding kaca, namun tulisan di kausnya terbalik."
  },
  {
    "id": 44,
    "image": "images/44.jpg",
    "promptText": "Profil samping seluruh tubuh sinematik dengan sudut rendah dari seorang pemuda (foto diunggah) berjalan ke dalam ombak laut setinggi lutut saat golden hour sedikit melihat kamera, bidikan vertikal ultra-lebar, mengenakan kemeja longgar bergaris putih dan biru dengan kerah terbuka serta celana pendek hitam, kain semi-transparan yang basah menangkap sinar matahari, santai dengan tangan di saku, kacamata hitam Wayfarer gelap, rambut sedikit acak tetapi bentuk rambut seperti gambar ini yang lembap berkilau dengan cahaya, busa detail dan pantulan pasir basah. Cahaya tepi keemasan, air tenang, langit biru pastel dengan awan lembut, suasana nostalgia yang damai, pencahayaan dan tekstur ultra-realistis, nada filmik, bayangan dalam dan warna hangat."
  },
  {
    "id": 45,
    "image": "images/45.jpg",
    "promptText": "used the image I uploaded and kept the original. A very handsome young man is reading a book quietly while leaning against the roots of a large, shady tree on a rocky shore. He is wearing a white shirt, white pants, and white shoes. He is looking towards the camera. In the background is a vast, calm blue lake or lagoon with the sky reflected, and a large, lush green volcano towering above the water. The scene is framed by vibrant green foliage and has a bright atmosphere with a dynamic cloudy sky. The lighting is golden hour style, high-detail, photorealistic, a la National Geographic. 9:16."
  },
  {
    "id": 46,
    "image": "images/46.jpg",
    "promptText": "Ultra-realistic outdoor portrait of a young man with a naturally soft face and dark hair, sitting on a fallen tree trunk in a peaceful forest near a small stream. The reference image is the same face. He is wearing a red t-shirt with a cute panda pattern on the chest, long white cargo pants, and red sneakers. A watch is on his wrist. Next to him, a real giant panda sits comfortably on the same log, holding bamboo and eating it. The panda looks friendly and natural. 9:16."
  },
  {
    "id": 47,
    "image": "images/47.jpg",
    "promptText": "Hyper realistic, Edit foto ini dengan 100% tanpa merubah bentuk dan detail wajah aslinya, seorang pria muda tampan dengan kulit putih dan cerah sedang duduk di pohon tumbang yang sudah kering. Ia memakai sweter hitam hodi, celana cream panjang, sepatu putih running keren. Latar belakang sebuah kali besar , pohon-pohon hijau , bukit hijau yang jelas dan besar, di samping ada batu besar , foto sore hari matahari terbenam langit orange ke emasan, mega hitam, foto cinematic blur dikit."
  },
  {
    "id": 48,
    "image": "images/48.jpg",
    "promptText": "Hyper-realistic low-angle shot of a young man (25-28) sitting on the edge of a wooden bridge over a calm forest stream at sunrise. Turning towards the camera. Wearing a light jacket, jogger pants, and sneakers. Reflection in the water, golden mist, birds flying in the distance. Shallow depth, soft bokeh, cinematic tone, 8K detail. 9:16."
  },
  {
    "id": 49,
    "image": "images/49.jpg",
    "promptText": "Seorang pria Asia muda dengan senyum ramah dan rambut hitam pendek, mengenakan kaus putih polos dan celana jins hitam, duduk di atas batu besar di tengah sungai yang jernih. Kaki kanannya terendam air sungai. Di sampingnya, seekor bayi gajah abu-abu yang lucu sedang bermain air, menyemprotkan air ke atas dengan belalainya, menciptakan percikan air yang indah. Latar belakang gambar adalah hutan tropis yang rimbun dengan pepohonan hijau yang tinggi, menciptakan suasana alami dan damai. Cahaya matahari menembus dedaunan, menciptakan efek bokeh yang lembut dan hangat. Komposisi gambar menampilkan interaksi yang harmonis antara manusia dan hewan di alam."
  },
  {
    "id": 50,
    "image": "images/50.jpg",
    "promptText": "Seorang pemuda duduk penuh kemenangan di puncak gunung yang terjal, memegang bendera merah putih dan benderanya berkibar. Dia mengenakan hoodie hitam dan jins panjang hitam, dengan sepatu nike putih dengan logo nike hitam. Pria itu memiliki rambut hitam rapi sesuai dengan gambar ini dan tersenyum ke arah kamera. Latar belakangnya adalah pemandangan panorama pegunungan berkabut yang menakjubkan membentang jauh di bawah langit yang sebagian berawan, menunjukkan lanskap alam yang tenang dan luas. Pencahayaan tampak seperti siang hari alami, memberikan cahaya lembut pada pemandangan. posisi pose fotonya duduknya berada diatas tebing tinggi dibawahnya jurang"
  }
];

// Fungsi untuk MEMBACA data dari localStorage
function getGalleryData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        try { 
            const parsedData = JSON.parse(savedData);
            return Array.isArray(parsedData) ? parsedData : defaultGalleryData;
        } 
        catch (e) { 
            return defaultGalleryData; 
        }
    } else {
        return defaultGalleryData;
    }
}

// Fungsi untuk MENYIMPAN data ke localStorage
function saveGalleryData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    // Perbarui data global kita setelah menyimpan
    galleryData = data;
}

// --- 🌟 State Aplikasi ---
let galleryData = []; // Data utama kita, diisi saat load
let currentPage = 1;
const itemsPerPage = 9; // Ubah ini untuk jumlah item per halaman
let currentSort = 'newest'; // 'newest' atau 'oldest'
let currentView = 'grid'; // 'grid' atau 'list'


// --- 🎨 FUNGSI GALERI UTAMA ---
function loadGallery() {
    // 0. Terapkan mode tampilan
    document.body.classList.toggle('list-view', currentView === 'list');
    
    // Perbarui tombol aktif
    document.getElementById('grid-view-btn').classList.toggle('active', currentView === 'grid');
    document.getElementById('list-view-btn').classList.toggle('active', currentView === 'list');

    const container = document.querySelector('.gallery-container');
    container.innerHTML = ''; 
    
    // 1. Ambil data yang relevan (berdasarkan pencarian)
    const searchQuery = document.getElementById('search-bar').value.toLowerCase().trim();
    let filteredData = galleryData.filter(item => 
        item.promptText.toLowerCase().includes(searchQuery)
    );

    // 2. Sortir data
    filteredData.sort((a, b) => {
        return (currentSort === 'newest') ? b.id - a.id : a.id - b.id;
    });

    // 3. Paginasi data
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToRender = filteredData.slice(startIndex, endIndex);
    
    // 4. Render item ke halaman
    itemsToRender.forEach(item => {
        const imageUrl = item.image.startsWith('data:image') 
            ? item.image 
            : item.image; 

        const galleryItemHTML = `
            <div class="gallery-item" data-id="${item.id}">
                <img src="${imageUrl}" alt="Gambar AI ${item.id}">
                <div class="prompt-description">
                    <p><strong>Prompt ${item.id}:</strong></p>
                    <p class="prompt-text">
                        ${item.promptText}
                    </p>
                    <button class="copy-btn">Salin Prompt</button>
                    
                    <div class="item-actions">
                        <button class="detail-btn">Detail</button>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Hapus</button>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', galleryItemHTML);
    });
    
    // 5. Render kontrol paginasi
    renderPagination(filteredData.length);
}

// --- Fungsi untuk Render Tombol Paginasi ---
function renderPagination(totalItems) {
    const paginationContainer = document.getElementById('pagination-controls');
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) return; // Tidak perlu paginasi jika hanya 1 halaman

    // Tombol "Sebelumnya"
    const prevButton = document.createElement('button');
    prevButton.textContent = '«';
    prevButton.disabled = (currentPage === 1);
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            loadGallery();
        }
    });
    paginationContainer.appendChild(prevButton);

    // Tombol Halaman
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', () => {
            currentPage = i;
            loadGallery();
        });
        paginationContainer.appendChild(pageButton);
    }
    
    // Tombol "Berikutnya"
    const nextButton = document.createElement('button');
    nextButton.textContent = '»';
    nextButton.disabled = (currentPage === totalPages);
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            loadGallery();
        }
    });
    paginationContainer.appendChild(nextButton);
}


// --- Fungsi Import / Export Data ---
function exportData() {
    const dataString = JSON.stringify(galleryData, null, 2);
    const blob = new Blob([dataString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gallery_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showNotification('Data berhasil diekspor!'); // NOTIFIKASI
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const importedData = JSON.parse(e.target.result);
            if (Array.isArray(importedData) && importedData.every(item => item.id && item.promptText && item.image)) {
                if (confirm('Ini akan menimpa semua data galeri Anda saat ini. Lanjutkan?')) {
                    saveGalleryData(importedData);
                    currentPage = 1; // Reset ke halaman pertama
                    loadGallery();
                    showNotification('Data berhasil diimpor!'); // NOTIFIKASI
                }
            } else {
                showNotification('File JSON tidak valid atau tidak sesuai format galeri.', 'error'); // NOTIFIKASI
            }
        } catch (error) {
            showNotification('Gagal membaca file. Pastikan file JSON valid.', 'error'); // NOTIFIKASI
            console.error('Import error:', error);
        }
        // Reset input file agar bisa import file yang sama lagi
        event.target.value = null;
    };
    reader.readAsText(file);
}


// --- Fungsi Helper untuk Base64 ---
function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// --- Fungsi Notifikasi Toast (Versi 2.0) ---
/**
 * Menampilkan notifikasi toast yang lebih baik
 * @param {string} message Pesan yang ingin ditampilkan
 * @param {'success' | 'error'} type Tipe notifikasi
 */
function showNotification(message, type = 'success') {
    // 1. Buat Elemen Utama
    const notification = document.createElement('div');
    notification.className = 'notification';
    if (type === 'error') {
        notification.classList.add('error');
    }

    // 2. Buat Ikon
    const icon = document.createElement('span');
    icon.className = 'notification-icon';
    icon.textContent = (type === 'success') ? '✔️' : '❌';

    // 3. Buat Teks Pesan
    const msg = document.createElement('span');
    msg.className = 'notification-message';
    msg.textContent = message;

    // 4. Buat Tombol Close
    const closeBtn = document.createElement('button');
    closeBtn.className = 'notification-close-btn';
    closeBtn.innerHTML = '&times;'; // &times; adalah kode HTML untuk simbol 'X'

    // 5. Tambahkan Event Listener ke Tombol Close
    closeBtn.addEventListener('click', () => {
        // Memicu animasi keluar secara manual
        notification.style.animation = 'slideOutToRight 0.4s ease-in forwards';
        
        // Hapus elemen dari DOM setelah animasi selesai (400ms)
        setTimeout(() => {
            notification.remove();
        }, 400);
    });

    // 6. Gabungkan semua elemen
    notification.appendChild(icon);
    notification.appendChild(msg);
    notification.appendChild(closeBtn);

    // 7. Tampilkan ke halaman
    document.body.appendChild(notification);

    // 8. Atur auto-remove setelah animasi selesai
    // (Durasi animasi: 0.4s masuk + 2.6s tunggu + 0.4s keluar = 3.4s)
    setTimeout(() => {
        // Cek jika elemennya masih ada (belum ditutup manual)
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3400); 
}


// --- 🚀 INISIALISASI HALAMAN ---
document.addEventListener('DOMContentLoaded', () => {

    // Ambil data dari localStorage saat halaman dimuat
    galleryData = getGalleryData();
    // Ambil preferensi tampilan
    currentView = localStorage.getItem('galleryViewMode') || 'grid';
    
    // 1. Muat galeri secara dinamis (fungsi ini sekarang melakukan semuanya)
    loadGallery();

    // 2. Ambil elemen-elemen statis
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('modal-image');
    const modalPrompt = document.getElementById('modal-prompt');
    const closeModalBtn = document.querySelector('#lightbox-modal .close-btn');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const galleryContainer = document.querySelector('.gallery-container');

    // Ambil Elemen Form Tambah/Edit
    const addPromptBtn = document.getElementById('add-prompt-btn');
    const addModal = document.getElementById('add-modal');
    const modalTitle = document.getElementById('modal-title');
    const closeAddModalBtn = document.getElementById('close-add-modal');
    const cancelAddBtn = document.getElementById('cancel-add-btn');
    const addPromptForm = document.getElementById('add-prompt-form');
    const promptImageInput = document.getElementById('prompt-image');
    const promptTextInput = document.getElementById('prompt-text-input');
    const editPromptIdInput = document.getElementById('edit-prompt-id');

    // Ambil Elemen Modal Detail
    const detailModal = document.getElementById('detail-modal');
    const closeDetailModalBtn = document.getElementById('close-detail-modal');
    const detailModalImage = document.getElementById('detail-modal-image');
    const detailModalPrompt = document.getElementById('detail-modal-prompt');
    
    // --- INI ADALAH SELEKTOR BARU ---
    const detailCopyBtn = document.getElementById('detail-copy-btn');
    const detailGeminiBtn = document.getElementById('detail-gemini-btn');
    const detailChatGptBtn = document.getElementById('detail-chatgpt-btn');

    // Ambil Elemen Kontrol Galeri
    const searchBar = document.getElementById('search-bar');
    const sortSelect = document.getElementById('sort-select');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const listViewBtn = document.getElementById('list-view-btn');
    const exportBtn = document.getElementById('export-btn');
    const importBtn = document.getElementById('import-btn');
    const importFileInput = document.getElementById('import-file-input');

    // --- BARU: Ambil Elemen Modal Konfirmasi Hapus ---
    const confirmModal = document.getElementById('confirm-modal');
    const confirmMessage = document.getElementById('confirm-message');
    const confirmYesBtn = document.getElementById('confirm-yes-btn');
    const confirmNoBtn = document.getElementById('confirm-no-btn');


    // --- Listener untuk Kontrol Galeri ---
    searchBar.addEventListener('input', () => {
        currentPage = 1; // Reset ke halaman 1 setiap kali mencari
        loadGallery();
    });
    
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        currentPage = 1; // Reset ke halaman 1
        loadGallery();
    });

    gridViewBtn.addEventListener('click', () => {
        currentView = 'grid';
        localStorage.setItem('galleryViewMode', 'grid');
        loadGallery();
    });

    listViewBtn.addEventListener('click', () => {
        currentView = 'list';
        localStorage.setItem('galleryViewMode', 'list');
        loadGallery();
    });
    
    exportBtn.addEventListener('click', exportData);
    importBtn.addEventListener('click', () => importFileInput.click());
    importFileInput.addEventListener('change', importData);


    // --- Fungsi Buka/Tutup Modal Tambah ---
    const openAddModal = () => { 
        modalTitle.textContent = 'Tambah Prompt Baru'; 
        editPromptIdInput.value = ''; 
        addPromptForm.reset(); 
        promptImageInput.required = true;
        addModal.style.display = 'block'; 
    };
    const closeAddModal = () => {
        addModal.style.display = 'none';
        addPromptForm.reset(); 
    };
    addPromptBtn.addEventListener('click', openAddModal);
    closeAddModalBtn.addEventListener('click', closeAddModal);
    cancelAddBtn.addEventListener('click', closeAddModal);
    addModal.addEventListener('click', (e) => {
        if (e.target === addModal) { closeAddModal(); }
    });

    // --- Fungsi Buka/Tutup Modal Detail ---
    const closeDetailModal = () => {
        detailModal.style.display = 'none';
    };
    closeDetailModalBtn.addEventListener('click', closeDetailModal);
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) { closeDetailModal(); }
    });

    // --- BARU: Fungsi Buka/Tutup Modal Konfirmasi Hapus ---
    const closeConfirmModal = () => {
        confirmModal.style.display = 'none';
        delete confirmYesBtn.dataset.deleteId; // Hapus ID saat modal ditutup
    };
    confirmNoBtn.addEventListener('click', closeConfirmModal);
    confirmModal.addEventListener('click', (e) => {
        if (e.target === confirmModal) { closeConfirmModal(); }
    });


    // --- Logika Submit Form (Tambah & Edit) ---
    addPromptForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        const saveButton = addPromptForm.querySelector('.btn-save');
        saveButton.disabled = true;
        saveButton.textContent = 'Menyimpan...';

        try {
            const text = promptTextInput.value.trim();
            const editId = editPromptIdInput.value; 
            const file = promptImageInput.files[0];
            let currentData = getGalleryData(); // Ambil data terbaru

            if (editId) {
                // LOGIKA EDIT
                const itemIndex = currentData.findIndex(item => item.id == parseInt(editId));
                if (itemIndex === -1) throw new Error('Item tidak ditemukan');
                
                if (file) {
                    currentData[itemIndex].image = await toBase64(file);
                }
                currentData[itemIndex].promptText = text;
                saveGalleryData(currentData); 
                showNotification('Prompt berhasil diperbarui!'); // NOTIFIKASI EDIT

            } else {
                // LOGIKA TAMBAH
                if (!file) {
                    showNotification('Anda harus memilih file gambar!', 'error'); // NOTIFIKASI
                    throw new Error('Tidak ada file dipilih');
                }
                const imageBase64 = await toBase64(file); 
                const newPrompt = {
                    id: Date.now(), 
                    image: imageBase64,
                    promptText: text
                };
                currentData.push(newPrompt);
                saveGalleryData(currentData);
                showNotification('Prompt baru berhasil ditambahkan!'); // NOTIFIKASI TAMBAH
                
                // Saat menambah, pergi ke halaman 1 & sortir terbaru
                currentPage = 1;
                currentSort = 'newest';
                sortSelect.value = 'newest';
            }

            loadGallery(); 
            closeAddModal(); 

        } catch (error) {
            console.error('Gagal menyimpan:', error);
            if (error.message !== 'Tidak ada file dipilih') {
                showNotification('Gagal menyimpan prompt. Silakan coba lagi.', 'error'); // NOTIFIKASI
            }
        } finally {
            saveButton.disabled = false;
            saveButton.textContent = 'Simpan';
        }
    });

    // --- INI ADALAH BLOK LISTENER BARU ---
    // --- Logika untuk Tombol Aksi di Modal Detail ---

    // 1. Tombol Salin di Modal Detail
    detailCopyBtn.addEventListener('click', () => {
        const promptText = detailModalPrompt.textContent;
        navigator.clipboard.writeText(promptText).then(() => {
            // Beri umpan balik visual
            const originalText = detailCopyBtn.textContent;
            detailCopyBtn.textContent = 'Tersalin!';
            detailCopyBtn.classList.add('copied'); // Gunakan style 'copied'
            setTimeout(() => {
                detailCopyBtn.textContent = originalText;
                detailCopyBtn.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Gagal menyalin:', err);
            showNotification('Gagal menyalin ke clipboard.', 'error');
        });
    });

    // 2. Tombol Buka di Gemini
    detailGeminiBtn.addEventListener('click', () => {
        const promptText = detailModalPrompt.textContent;
        // Encode teks agar aman digunakan di URL
        const encodedPrompt = encodeURIComponent(promptText);
        // Buka tab baru ke Gemini dengan prompt di query URL
        window.open(`https://gemini.google.com/app?q=${encodedPrompt}`, '_blank');
    });

    // 3. Tombol Buka di ChatGPT
    detailChatGptBtn.addEventListener('click', () => {
        const promptText = detailModalPrompt.textContent;
        
        // ChatGPT tidak mendukung query URL seperti Gemini.
        // Solusi terbaik: Salin teks ke clipboard, lalu buka situsnya.
        navigator.clipboard.writeText(promptText).then(() => {
            // Gunakan notifikasi yang sudah Anda buat!
            showNotification('Prompt disalin! Silakan paste di ChatGPT.', 'success');
            window.open('https://chat.openai.com/', '_blank');
        }).catch(err => {
            console.error('Gagal menyalin:', err);
            showNotification('Gagal menyalin, buka ChatGPT secara manual.', 'error');
            window.open('https://chat.openai.com/', '_blank');
        });
    });
    

    // --- FITUR Event Delegation (Salin, Lightbox, Edit, Detail, Hapus) ---
    galleryContainer.addEventListener('click', (e) => {
        const clickedElement = e.target;
        const itemEl = clickedElement.closest('.gallery-item');
        if (!itemEl) return; // Klik di luar item

        const id = parseInt(itemEl.dataset.id);
        const itemData = galleryData.find(item => item.id === id);
        if (!itemData) return;

        // Aksi 1: Tombol Salin
        if (clickedElement.classList.contains('copy-btn')) {
            navigator.clipboard.writeText(itemData.promptText).then(() => {
                const originalText = clickedElement.textContent;
                clickedElement.textContent = 'Tersalin!';
                clickedElement.classList.add('copied');
                setTimeout(() => {
                    clickedElement.textContent = originalText;
                    clickedElement.classList.remove('copied');
                }, 2000);
            }).catch(err => console.error('Gagal menyalin:', err));
        }

        // Aksi 2: Gambar Lightbox (Zoom) - Hanya di mode Grid
        if (clickedElement.tagName === 'IMG' && !document.body.classList.contains('list-view')) {
            modal.style.display = 'block';
            modalImg.src = clickedElement.src;
            modalPrompt.textContent = itemData.promptText;
        }

        // Aksi 3: Tombol Edit
        if (clickedElement.classList.contains('edit-btn')) {
            modalTitle.textContent = 'Edit Prompt';
            editPromptIdInput.value = itemData.id;
            promptImageInput.required = false; // Tidak wajib saat edit
            promptTextInput.value = itemData.promptText;
            addModal.style.display = 'block';
        }

        // Aksi 4: Tombol Detail
        if (clickedElement.classList.contains('detail-btn')) {
            detailModalImage.src = itemEl.querySelector('img').src;
            detailModalPrompt.textContent = itemData.promptText;
            detailModal.style.display = 'block';
        }
        
        // --- DIMODIFIKASI: Aksi 5: Tombol Hapus ---
        // Sekarang hanya menampilkan modal konfirmasi
        if (clickedElement.classList.contains('delete-btn')) {
            // Tampilkan pesan spesifik
            confirmMessage.textContent = `Anda yakin ingin menghapus prompt ${itemData.id}?\n\n"${itemData.promptText.substring(0, 50)}..."`;
            // Simpan ID di tombol "Ya" agar bisa diakses nanti
            confirmYesBtn.dataset.deleteId = itemData.id;
            // Tampilkan modal
            confirmModal.style.display = 'block';
        }
    });
    
    // --- BARU: Listener untuk Tombol Konfirmasi Hapus ---
    confirmYesBtn.addEventListener('click', () => {
        // Ambil ID yang disimpan dari tombol
        const idToDelete = parseInt(confirmYesBtn.dataset.deleteId);
        if (!idToDelete) return; // Tidak ada ID, jangan lakukan apa-apa

        // Ini adalah logika HAPUS yang kita pindahkan dari atas
        let currentData = getGalleryData();
        currentData = currentData.filter(item => item.id !== idToDelete);
        saveGalleryData(currentData);
        showNotification('Prompt berhasil dihapus.'); // NOTIFIKASI HAPUS
        
        // Cek jika halaman saat ini jadi kosong
        const totalItems = currentData.filter(item => item.promptText.toLowerCase().includes(searchBar.value.toLowerCase().trim())).length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        if (currentPage > totalPages && totalPages > 0) {
            currentPage = totalPages;
        }
        
        loadGallery(); // Muat ulang galeri
        closeConfirmModal(); // Tutup modal setelah selesai
    });


    // --- Fungsi tutup modal Lightbox ---
    const closeModal = () => { modal.style.display = 'none'; }
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) { closeModal(); }
    });

    // --- FITUR Dark Mode ---
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️';
        } else {
            body.classList.remove('dark-mode');
            darkModeToggle.textContent = '🌙';
        }
    };
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    darkModeToggle.addEventListener('click', () => {
        let newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

});