'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "86a2bdaabb0ce766587fc98eeff46711",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "deaa9cf4d7af4953ddb472a43bc9b32f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c0b1d844501e7bc26ec1a082d8361b8a",
".git/logs/refs/heads/main": "c2e27c9de7c02241b6089e34a75a622d",
".git/logs/refs/remotes/origin/main": "516217e0e5758561295502f3b0efd11b",
".git/objects/01/7728f37b03bee1d377b14954b2cc18aecf7ae2": "080b7e668d50696487c2dd6471fb0c40",
".git/objects/06/603c67a968420eebbf8814121821c8352488a2": "e522eaf9507f2e27bab9f17ae350c09a",
".git/objects/06/fcc8e3e45f2d4835e7b607f788c87e52dbcd78": "bf2a5529c3cdeadb1c8f8e81bd04375e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/a2c44b41deb5fa76a26041ebd8f91ef1f4fd76": "3eded293eb936437c673f16937a5c399",
".git/objects/09/a68c831f9eea2f07bbc4c2ca137ee1bfe536bd": "0e91ec70f6dfcf3f107f349a9e76201c",
".git/objects/0c/406dff72ae3dd03190b9edbd2329ade35687c9": "8a5c4880c8660d40855720dba3d034e0",
".git/objects/14/2515950aa483902707b7d9bbc8046947c8a4d3": "cc74f97d756360c99358887871c28408",
".git/objects/17/0ea564d1166f3dafe8eef1ab3146caa4976c97": "f3ae976754112ee8d2b1a3914694d4b6",
".git/objects/17/500d6a52f6f76ef7882dc667d029d962d94380": "f67a06878ffc610a47832e453b75487d",
".git/objects/1e/4d67bd5f84670d838cf091683964fa1be40554": "8bfaf93a9519c9750a83ee6d59b78782",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/02643084f43087bf8d7e4a33c2eb3a558df06d": "523fafe5a944ddc233e161ab8425e012",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/0bed025a14b3e7009a8f2af20bbd9d6dcd6303": "61f5187250c868f8bf7406169bcc89fd",
".git/objects/2c/323e6ece359433d19375266cefb21f00d26d89": "86091b2a17d8333143a0080805f78345",
".git/objects/2f/83f21fdd734b3900853f0c17475c51691fbdb5": "5f945e694991b2b2fbc69f082ee82db8",
".git/objects/30/797a26c453c56856331f9d65e9aa832ec60ee5": "f33c510504ed9eca2ae82bee05867ef7",
".git/objects/30/7d8bfba4edb47d07ae3a04ab74a834c5b5e837": "3a08f830889909e7f9833247fcb7e92a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/91936af06935a3c2f04a5bac47691ce533921f": "70435305ed777bf35711eafbb6b07be9",
".git/objects/34/03c20c7f0ae2a0086a18b2d525dae7a0fe51b8": "66d51363ae1fc6bb51e079c9a49f2b1b",
".git/objects/34/333e96930ebc2188793918239fef412e62be39": "954e317b9612708373bd3444c943c217",
".git/objects/39/3e5ed9d4350da9e65cd05ea22292cbf904486c": "88b679d0da809e5f387c820b62353b55",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/119012dcc1b417925fdf7a527e0d3276e29a0e": "5383a20d93437ee4fcfeec37bd29b60b",
".git/objects/3e/7613ac20525c66da89a5aad0e84584e4800c1f": "f3559428bc1d950033b3fd54a948c007",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/3bf037c90cdc4bba5a637a122f949b78724cdd": "518d1baa24fbe5e0f60e0a081d21c804",
".git/objects/42/8e8ff783cafd624ca6d13877386e141b334e12": "bf9bf17cba011d5b0277716446cc62be",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/3d2e3a3bdfa3b023dd89c6facf17e92fbcd7eb": "3db7df4dddcfc697559ca969db5bfdca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/10061893a7315a648a9ef1c9ba105694ceb6e5": "01f20c07d26f3eaed207c8e2de8c3ff4",
".git/objects/49/24dd90c6779cb79076f018ad23b87e1890dba9": "721240ea64a435c2922f1a5dc947c9b7",
".git/objects/4d/652abbfc96eb578a80d59f376306e68997eaef": "1aec9c2ede8ae9323be6d18cd4b9d628",
".git/objects/4d/ad61bd2f76caeb91419d7cd2cff99847367de5": "4e1e5c30c1416a27f046491e59ec09e0",
".git/objects/4e/a72bc55a1b983b60e407fdd6b68f54a46321b1": "fd462875cb962df4bfbda4f0294d9e96",
".git/objects/4f/4c53d8e29ff9d0a88340c449dcbcf2f2b54e37": "108436c9e865d1a3d0bcadd420893fdd",
".git/objects/4f/c0bd8e9975d3331bf7fcd80ddc48ed27d79b95": "56b5c6be400718193bad1927a7edfd91",
".git/objects/52/a4d24c23f86c59253073d2459d1650b9fe24ef": "47a90c216d5aad23ee6e02ebd69913b6",
".git/objects/52/aa5167d5b43c7ad9a9c2ccc0bdd80254bf40cb": "303a7ec167e36820dbd6a495618f7de7",
".git/objects/54/256827b56b3e9e6e7e975754906a9037706972": "80014a2f9f8fa7598eb4836eecb53184",
".git/objects/55/2bc3920f3a7d15a075eda59c43cbef8936b936": "4bf589529a7247ab88a4065166873b47",
".git/objects/56/570c7dd405bc42d137e3cd832a73ac83edd2ec": "3e2f83dd27cbe78de78abd829c3fdec4",
".git/objects/5a/2119a01c782e8879ff9fdc5d0ed4d9f2b1a881": "c6f541ac743dde6fac69df2833db7004",
".git/objects/5c/6646b330f792d037984c558bdca558337571ee": "09c5de27dd27cd9d9543374a9fb5cd77",
".git/objects/5c/7de69b0c65de63defe47110240750626f1fee5": "59ec8a8340538214e81344bea8ba267b",
".git/objects/5d/0d2d0a666a33abd6b425d152ba07ed5127f2f3": "e2f2783318b71e67453e168be6393e6b",
".git/objects/5d/65f9447910fbcb1ce109cdb968eb4a3986479c": "1aa4d3de5e5c9acdd9bd9155c42c27fc",
".git/objects/61/21e1191a0ad24d411d02baa5c4dc35c96e0f7b": "d304c515409f4ad359c7632ce800d004",
".git/objects/62/09eab81d5d72c6dc0b41bdffb9baf2fe0e1910": "3894efe6b64214d3a8d45c60742ffee7",
".git/objects/65/c895d216aec5b192d8c00b64aa4bc26165eb55": "5ddb8337063ec5a2bcd8108ac6d6ddf1",
".git/objects/66/f0b4d27edc239b2066bb9cb09af5db45ad6b2d": "3aed839f42a0770c3e231d07444df570",
".git/objects/68/ad7199de067d56db1cb0334092a7542dd3fd74": "4b246ca8ad5b03c0736a16d2d037498c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/74/f932d332ef371c727466fda4270cf6c68ea0d1": "598c4bea196935b03a1549b4db09c0f6",
".git/objects/79/2bd495e9aa18b96dd0d9a073c488387faef808": "931644fb2634b5c63ae32a86410239ec",
".git/objects/7c/88263245d60ac21e2e1f57e194375ac9b4807b": "9cfc696eb7568805ed74209dbf6efc95",
".git/objects/7c/e95e3d05e64353e90846e763090ce5163e7822": "cdc991b90a2a8a3632b738bebc186a4e",
".git/objects/7d/fc96e580f988d0896b1f20e46746632e1ee3cf": "da4d03d726bdfd728762bbd3bce82257",
".git/objects/7f/5057e142cc7b4d5a4f353359717354997e7da6": "13510869c65f604f125f93d22df171e4",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/3249a8bb912666ad8799d14f8df521a2f16897": "cd64914d9e5e5694c1518b26f57b8ddc",
".git/objects/88/cbb2ade75ab1572b4401d0f74e023e9c992254": "fba8102b067534f64c499d81ca6097d6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/481310c5f51c9750a7e699047841b46173602b": "34fd9619f55a9ff2cf28f150d06e289a",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/f234ec163aa9124bd29f5d116f578821304ff5": "4ff24042e23620b690acde03a3469d9d",
".git/objects/92/fd8cce45198257b7d2c921c273a775b51be7c2": "74eef0193b0f328927df413551a34d0f",
".git/objects/97/0c42707f6159a2cb5b2bca67a950a155380509": "c513b4a3d994acb62f650c9ac87d9fae",
".git/objects/97/47784ff7bd967f99b8cdf4a99b0e94efab81b7": "e1e975ea7ea61cd06cc9110212dd92ac",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/77ed940474657e4c2e38f0de1b1407f0be01f2": "b772d1954ef53af4cc3ba35b04c206b3",
".git/objects/9c/d623352f437fbef376d6a97919958f1583e313": "90d5e3c9f28a4959980f341ff0ff923b",
".git/objects/9c/edb56eb584b514c4e3d39965b4f0273b957974": "05ea56c06533b599dd25a22648659215",
".git/objects/a6/eddb2e220f82076414a76a3aa2e3fcd8dbd695": "f032739d4774e3270e9ba71a4964bb19",
".git/objects/a9/d5957088b5383eaad82f3277803c680a17a959": "ab62d9e16b13feb518b631080b4249e5",
".git/objects/aa/97fd2643144126fca9d7dbd7b99c5e1f016cb5": "bc8692505257fc219b573140b67bc46d",
".git/objects/ab/beb0a4a86e8b59371edc6a3f2bdcf9d1f4b76e": "6914ed607c873a9ecd37d29a6ab0da46",
".git/objects/ae/c3e4459466b07a929a8705393aa2ec809ade59": "754444efe9b7e06c2334995757b1e188",
".git/objects/af/7e763c2fdca904d1d693deed5aff4cfbc59ae7": "50976e36606c1250690db9d53fcf349f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/f15e011674c26543d90de6e2a6042be03396f5": "0518393b5e7997467394861903736d1d",
".git/objects/b6/61e956d0381bbc3ae6173ff20711ba9394ee50": "e3525952a07ded102b8e9d3031d03333",
".git/objects/b6/e95dc42c18503986ffd04425c9fe9ed65739ec": "8c6d700973cfb2eee28076a69a544d7f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/5461eb3d48db28f62482480412d891db4ac969": "f6d85744ce118d0ec33834fc5996581d",
".git/objects/ba/7445dc58918ca2b5566323cee53de2c5491841": "8a9e4b09087233324cb18c83931dc1e6",
".git/objects/bc/718616b900059b944350d65531fa13f762f8b1": "5ab1e18023568352a0f5f9d7d4ad441c",
".git/objects/bd/e7004d92807154ad8007694d7aecd5f804f80e": "dd232eafe36b323508f8ebf96190e0a2",
".git/objects/bf/0a06286874446a8c5e5c9f1665a39ec53235fc": "46b5a4517452117e7ba150d6e7b55173",
".git/objects/c2/07ea6fdee96904dc19eabce13505397d1b07b8": "77616e2cfaa247c715d1adbe8d8b73f4",
".git/objects/c2/f1d7b83f0602e8d189f68bbb97e89c4251c011": "608b1fbe7c3807776fb0f64007236572",
".git/objects/c6/94168dee4555e333bdd0889be2f237ba37d3f2": "6bc5defb5322164df9cfa39a162db9d8",
".git/objects/c8/0259b5fc9fae35c9bbdf57f7f6ebca532178a7": "a18308fd63402205f3f226db0c5efb3b",
".git/objects/c8/bc5fcb3602686791d4b8e197714e4ca3d85200": "62604a06f20e56ab1d4559ed7bde64df",
".git/objects/c9/eefdf60132f5856e068af72510a33c438c0bbd": "ea1e191df0850fc8233be30fed084415",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/955f92aa9687b82115cc284a5c69c93450a27a": "0191e6aacaba16434f2c4a997537fbd2",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/4d2d7a3f9a927fb564311d0a34c30ac2190332": "8ad150fa819b4c22c0dcdbca30c1c10b",
".git/objects/dd/260a158f151cde9ab36b9cd3c888e3ee88ebfe": "17ac1747270023c2a016c51629417bb3",
".git/objects/dd/de055d29da8972e28f9cf2e8f638efaa217b02": "f90a7f4956e26e83fda44c180c66652e",
".git/objects/e2/06ef9f6f9893f23ff2f08739655dd6d06b8b20": "6990ee2aeb079231fcf200b10b488612",
".git/objects/e6/235d1580af6cb8d773f9818c8b1185380440d1": "e50180b8477e3e00da9e07557523557e",
".git/objects/e6/f3cf42ec1bccf9a6dfc8fc1e7524f44775a32f": "54d19bcf57b306b47b58d54fb336792b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a7cbdbe9032e47e8917c2aa33ffb3b9ba1d9ce": "057abbb0f4108add39c14f35eb62f93e",
".git/objects/ee/3fefd170e257b97f09103ba20aea43d51b7552": "19bd945d95194461cfc80c7f44841be2",
".git/objects/ef/07b461b88a06e793b24e835f0fd0695d3c867e": "fc04bf9b0f055d3a74fdee3d21e7283d",
".git/objects/ef/719333aa2ed8db71bba5610953c89e106e8343": "c662fe0c84a8203db20ca5eb36e6ef72",
".git/objects/f0/272a5aca71bb8ac7243ee54051483a89c202d4": "97c20044497d462a106e1efce4d0425b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/e26e071847a309654d61bba3617af007e6185b": "11c530e1d6d0e8f1d5e316dc6335e785",
".git/objects/f3/ef4cf6575a0cc9117ccaef0a84e9168e563f39": "a141a939956e11a03fee33118b24eb15",
".git/objects/f4/3e4dbdfb4a1189fa28be1ba6ef71a5537f46db": "166c2eda091a86e0614553cc40d93b86",
".git/objects/f6/c00b9efff6ee2c4eba2402191e24e7f70c5f30": "215efd6a3e5906e45fedae822f225b65",
".git/refs/heads/main": "32a32f18a694f6dc7f25cf15b991f8e6",
".git/refs/remotes/origin/main": "32a32f18a694f6dc7f25cf15b991f8e6",
"assets/AssetManifest.bin": "a8ec12696aad0d6c879119b990373e73",
"assets/AssetManifest.bin.json": "c530b05edcc16a6415207f5b9eed9c06",
"assets/AssetManifest.json": "6a1ac3fd276b626cee67e93382131ed7",
"assets/assets/audio_bullshit.mp3": "a8e744f7d4ef70cd8e21a5ab44841b0f",
"assets/assets/audio_difichento.mp3": "0e626f24b9738c46fa6ea00b745329cf",
"assets/assets/audio_rot_kazino.mp3": "d90af331654be24d9f7a50d682e82fec",
"assets/assets/audio_ti_bredish.mp3": "b687fb029e6f10e4441efd0122b21981",
"assets/assets/audio_tvoi_rot.mp3": "8e4fe67c5580fa32c90499078e5d4602",
"assets/assets/audio_v_drugom_poradke.mp3": "54a9b50a138f14a8ea85ba767a3f93c6",
"assets/assets/images/background_hd4.jpg": "77acb4c3ec375b421f800bfc5e13d48e",
"assets/assets/images/bomb.png": "83db04d59038fec7e8e2113eacf4d7b5",
"assets/assets/images/game_background.jpg": "9078594f054f94170ad27b90750d6ff5",
"assets/assets/images/gold.png": "b09df02260efe681bba4819e6bfbd0ec",
"assets/assets/images/icon_promo_code.png": "2b3b0e944e4c629b82813b904d0e62d7",
"assets/assets/images/icon_roulette_rb.png": "ed3140d0af8f3d3d3e5715ad1e5f1d3c",
"assets/assets/images/leaderboard.png": "da3e3e3bf6d90641dbe59d21f21d751e",
"assets/assets/images/main_button.png": "b7c59d63f2505bbf22c28051586b8503",
"assets/assets/images/rb_pointer2.png": "1a2bf6f4869e49b8fdd75427073451ac",
"assets/assets/images/rb_roulette.png": "3ddfe6caab1f21dfbd9a78577271efb6",
"assets/assets/images/rb_roulette_border.png": "f98ba49bfd296caec9d67050253bf356",
"assets/assets/images/roulette100.png": "4a000a56fb931a2ec838c2c110de0a21",
"assets/assets/images/roulette1M.png": "fa9be5fbccd86d18dbf5645f47c99233",
"assets/assets/images/roulette250.png": "fa74e4f238c27ca1374b5477f7cd57f7",
"assets/assets/images/roulette50.png": "3554fe73e7b13a5974d6fc50a4414460",
"assets/assets/images/roulette500.png": "31b01992e93333b2ae88a5067f5acc14",
"assets/assets/images/roulette_pointer2.png": "1659c8373a7ef8c73524c1318df238f7",
"assets/assets/images/the_island.jpg": "0966b13d166a887100181d3332256bc8",
"assets/assets/images/wheel_icon2.png": "dd7acfcf95b68e82f49917dae241bb07",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7ad08c2b0805de6cd4de5323e82bfa4f",
"assets/NOTICES": "6aa090d9e56656047325f14df3073643",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "467d3c48baf10ebc296a7a018e481800",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e6e6fdf468cff5e291058ea84b397c2",
"/": "2e6e6fdf468cff5e291058ea84b397c2",
"main.dart.js": "f64416eb3a2ef4c72d3b7dabd1649390",
"manifest.json": "5a3d09a5e47b3d8995641a700ed3e891",
"version.json": "674a4f3f8aec59a92bd96deefa8bf801"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
