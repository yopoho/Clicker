'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "c5ae28be7b385ae3bf0cc7bd61ade59d",
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
".git/index": "229be21d5b374906814c127800a8a259",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "621842c7a780c460abe39b06a79ef0f4",
".git/logs/refs/heads/main": "621842c7a780c460abe39b06a79ef0f4",
".git/logs/refs/remotes/origin/main": "8d9b855eab8257968cd142e6b7d4961a",
".git/objects/00/33fe51655b7eea8360703ddf7411b3dc6a8f81": "fc88e7275cfd1b8e997c56a4593a2ce2",
".git/objects/00/d14bd0cd844f4c73978286acd34244db69010c": "760185d356924132e23ad87a6eaf9706",
".git/objects/02/3d29de6614c9f2be6e90aefde435ce553d0d03": "f8a018af6c9e44520b7e0a30f3045f82",
".git/objects/03/68734ccb16251e73b24ce0dece27e741bba540": "7b9d72ba0f002e1e4d078ea6dd8e66af",
".git/objects/06/8fdba50de2260c409ba9a26c0fb08454d8533c": "94190ce576087c93ba101476c46847bc",
".git/objects/09/a68c831f9eea2f07bbc4c2ca137ee1bfe536bd": "0e91ec70f6dfcf3f107f349a9e76201c",
".git/objects/09/f669dc34b9f22bbd4ca9775fae5fb291ecbad0": "df10a33b89e6583ae4b0667ba3ee8dc1",
".git/objects/0a/4e8c3a049b9a8de0a40e4a2b4d2d391f22fb9b": "2bdecf6ac42e2561d6fd504c8156c7a6",
".git/objects/0a/5c1cdad8c1438946b5f9638cbc73b596c4d51e": "ba2c5c1d916e3ffbbf19e7cd11dc2202",
".git/objects/0f/5d33cd89f8ad5f4f0f56dfc4c9d0d85200c2ea": "fcf11bbdf3e69539dcfc22e0e2bd24a5",
".git/objects/0f/80abfa43b821d227b893dda2bc522977dd1329": "e34a3da035d19728d9b54364b6f7f8fd",
".git/objects/0f/e1fc0d1d8601b0423877c3fde923a44e3089ca": "e420d1ae5d3b6a56fc70a03ab3f22bf5",
".git/objects/11/b752c510284d307a8cd65df0384f7dcda67cce": "bba1bd644b21ba08c88ac61d9ef3cbca",
".git/objects/13/45b46243ac7e77c31824649219361299dcdefe": "147c0e742d64e9b73f0658667c8c3b39",
".git/objects/14/bbab0cb1bc511d06892e665e390a153dd6c183": "be52958f807c2b824cb1856a68f1a540",
".git/objects/16/f13746ab3e010ff41a160bdb97946aafdd29b6": "660fd756873caae55d80b3c5f633dd05",
".git/objects/17/b1c266a511301fa3a3173be6f2f990c32b7d1a": "8f7e49fa4c466b25e2707f50a6888d41",
".git/objects/19/519379f96829061e2efabcfd9ffd73eca20a99": "6269e1df014b3f47936c2fd8bb39da90",
".git/objects/19/8b5d94709a2bbc24d7f9be72a4e47c84242037": "acdb897cf1bca6b177f6dfc729ac0ea0",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1e/c2fcacee5e94f70ebaaa0eae4fb617da565d7f": "b41c7acbdc7a1a873b8eccca8465faae",
".git/objects/20/94e6e7843289898ad171f98253383dbbd8f104": "f16cfc0e7218a30fa500f3cfdcf06004",
".git/objects/25/3780e4c1eef994bcc9a236f55b2de2392d513c": "e9815e6d5927b222ffdf506a346484e2",
".git/objects/26/12435c7195c78a587a89fff8660ecda26d8a86": "b7433b42220bbe94319eadb3ddc9df77",
".git/objects/28/069183ab4ca9a3d99b887bf996334e77bbb6d7": "22ca9d991e89f027cfd547f477e5b98e",
".git/objects/28/fc9a2a7335068dfe00a0a6aa29ff2f231996b2": "8ffc6f5dfa960a9c1aed9d31701ae9bd",
".git/objects/2a/8dd94b9d8b037a18f8ddf3bb290c89fc72251e": "6c457042979b7bbc0ad632ae53f3fdc9",
".git/objects/2b/22bd99ab46ea2f9cf7bb54dc388567506316ac": "c8009a7a1790b7dc502f24115a5457fd",
".git/objects/2b/b2d7a916b5a7fb64badd5d279f1d3bd5c9867a": "8bf2bcddcf947ee0160c015c4735c871",
".git/objects/2c/852fa33eeff327408342b560158add06b0172b": "aba6dd6ef9aeff5b8389df0ed442e61e",
".git/objects/2d/5ff017d009921f5259f7411511be8c2d2f30be": "f00abb5a452ff4cf7aa21e3832371388",
".git/objects/2d/a5ac094d8e63bf189218e5be2ae1980b8c7a20": "cac3410fba635ea369764c5d0cfbd7d1",
".git/objects/2d/c96808a07e70012dac39b961d9af35dff7c13c": "2b79232dcd4f4a4be6baa527de2fbe18",
".git/objects/2e/33488dc535ef1ab193295c80d756080349432f": "dbb276b2656853588ff8fb695bb0ffcb",
".git/objects/2e/e99fe929d3754b8b27b47061d7e3994ca8327a": "d8cda759092521a469c71049ac52b246",
".git/objects/2f/05ae23fe3f50e085e1205a2f7d1ed16a1c3c6f": "713091809520e448921c66633bf62acd",
".git/objects/30/31d80183d1d686dc6569ca9c8fb0856e749445": "adbcd763ccb5d17e496b9a47ccb378d3",
".git/objects/30/7d8bfba4edb47d07ae3a04ab74a834c5b5e837": "3a08f830889909e7f9833247fcb7e92a",
".git/objects/31/1bbae48461e21acf9d5b73365867c6e547d6b1": "9f1419f363a2b2b16cf9b17b15c3c9e8",
".git/objects/31/8c6b8a35e1daef7484649bdd67fb5d0964e898": "63982c3b4bf6235dcff7f2f96166441a",
".git/objects/33/91936af06935a3c2f04a5bac47691ce533921f": "70435305ed777bf35711eafbb6b07be9",
".git/objects/35/cfe425a30201c75329e321443a31f9c6958796": "37f08ad0d0e2a1d62f58572ba1c68304",
".git/objects/35/f9bd09167874ed61ed61bbc1eed94c02d146c3": "9e79d6db30a6c44919e9aae7981a7d52",
".git/objects/36/dc999a887637093d90d41a811fdfd44fb450e8": "82ce48c4e3963424130cacbdb49d3f1b",
".git/objects/37/4799dff4db404cd3aeb0aade410d8542af85a2": "e333b4cba7485efa55a09546b78a3c2e",
".git/objects/37/78b4724807adcb20267798016d6d1630c10fed": "e433d2a511fd658ce9e37fe99ee50124",
".git/objects/38/038973907b91a4a7c8368d8208104108371317": "19770cd0378f5f20523adf52de504519",
".git/objects/38/62ad6361746af42d2fa7181eb77d261441a2e9": "c037ac5421005d1997aa27019eaff345",
".git/objects/39/4096be7dcad69b79fbe066c3959b237325c529": "49cb02f8a1ba82303755cc54b14aabb5",
".git/objects/39/4fbb5f44763678144f19b629ae96f6acbb0bea": "799191e96fb8083043f3747623e145fa",
".git/objects/3a/909beae00cb00a5ecca9b9d00b87054b708d5f": "d40d7f2e0bb7dfa42f634d035523794b",
".git/objects/3a/ad5764824cb17c0cbab570f562afbce96df690": "ce0aec34ba915d8ad0b26937fe3015e5",
".git/objects/3c/42c00fc5ab99b12ef6df49ba271f1012e08ba1": "dc8d6ebeb315f23099a0b42bbb84468d",
".git/objects/3d/caf86fef663e265d99f4bc5324c1993cc6a3fe": "071eb0ce7690b08cb3254615f2f90d22",
".git/objects/3e/49a3ec0aabacf25dc49230259e10015f43b475": "9e6245f6812c81d2193be33d4b48b509",
".git/objects/3e/6a43c67c332caf4aaf1306325b5ec18e7923d3": "6359bcebcec94b7e88f17250b736e577",
".git/objects/3e/f0f8162dff2bed486434d135616b4e9ecffea3": "1c033ddbd1338f8337ac3c7ad377695b",
".git/objects/3f/85f084281bece88202082636cc66d271e0cb31": "ccde68e1937e3870226227a9e0f74888",
".git/objects/40/eab25c086ced107121906ae0f116c506b14cce": "b147e4be5b1693b44bf268ea31189cbe",
".git/objects/41/b78a186ba8600e52bd34b007d2b050af95d11a": "acd6a13fba5f6f49fca80c300be060a6",
".git/objects/43/67fa8302446cccb345087d0c35d82bcda51209": "dd220b516e494ec9590e61841999cf7c",
".git/objects/44/057e9d6e256410b89a7d0f50f58584541e8c31": "0a76be9250994a4a49911b22a031e777",
".git/objects/44/d5ac8e5d8be57a658696d03639dbb386432c7a": "bc256c4deb4d54cdeb0e8a619489890c",
".git/objects/47/9955858093580a002ac53c04da6ffb87846777": "12c92a8e3fc45844e6cfe419e3f2300d",
".git/objects/48/788179681cbc7db4022ce9995ee55cc4976ee9": "82ad5c5d30de0a286f8aa7f41476054e",
".git/objects/49/397ec7839a522c2f136a6b6e2270d66acb3157": "bd2f655df43f881c83e092024284f941",
".git/objects/49/69ec1602566a73007dfa43dceaef8d2d9b754a": "7a7b6ad991864190a228b7575e49450e",
".git/objects/49/f88f41407d0d0233d62779c753ccd8537b6cea": "67c0591c48e13423880a4e08d8fca3c7",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/060b8b562c3907dd68bac6ec3d112016b0205e": "0f553c5ffbb964a4aa21ace6c818023d",
".git/objects/4d/c9dafc6ec01bffbbf5da9bc4b55f43992889f6": "01fdf58c01dca1b1684d1c6ea2335669",
".git/objects/4f/c0bd8e9975d3331bf7fcd80ddc48ed27d79b95": "56b5c6be400718193bad1927a7edfd91",
".git/objects/4f/f8666370982ed65309523bda93ca847cec84b6": "425c9b7f83e2c3251a4688241947cea1",
".git/objects/50/0853605a9a5b7d2b16ad655b4e22c57253dac4": "48e17e06775b39b5fceb94c4860ca03d",
".git/objects/52/a4d24c23f86c59253073d2459d1650b9fe24ef": "47a90c216d5aad23ee6e02ebd69913b6",
".git/objects/52/bf082c16630b3adf126c08d531cb5d8d84ffd2": "78c28b0372ea8c6d8c8966d5ccf9a824",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/56/1f543485931cb31da263a4bb5a78006ee6be20": "d20f1dccf42920386262635e229713d9",
".git/objects/56/43640a742ee7e1dd46858cc18f41d0c0f68957": "7d5ecb6a12b55e5b3736945b38da203e",
".git/objects/5c/06d3f6b0f236fc1b5ac78ffb260e984bbf31a9": "ee25db3e0023873125faa4995c6ba88b",
".git/objects/5f/db4e04d4c45204b6721db205c4a45d18997c23": "affc01afc066f73cdf5b76a11cc67e0d",
".git/objects/60/24e76e47b188c21aebafc8db877790c34e88c9": "fe9b08c5d3dd4036de9173908779db81",
".git/objects/63/62fa34686e5059ae49a0ef08228fdfa9caff2e": "d8a597ead6c6952fe72a124f2bee6da1",
".git/objects/64/1eb38d8b0ce4740ead972c4116d200050d36f2": "8de372140c65b9be4936ee1b3b839d3a",
".git/objects/65/77400cb1c5546614a19f31f15a8bee946b536f": "f56c4258fde10956c580b604fa2db406",
".git/objects/66/2185fecf9e69862338fbb546a6e6959d60bf42": "906f1c4463dff06c8be4580c2fab48c4",
".git/objects/66/a533e9a4e05f11a49fb99e43a55fa55588d2e3": "84944afbf8119b8ec26d6acec9b8b112",
".git/objects/66/f0f2690744d2e7dbc732476b7bdf6799599f5d": "382c2e158066b351d6e0b20f4837fe30",
".git/objects/67/c4f6afeeb9c0f27a8745e3dc8a8eaf049f1e2e": "242df6ca62f04a3d35869ebbb2f18d87",
".git/objects/67/cef720f3ff83b402fd2083f467792b6a58e638": "231a3815140ae427dec98418180bcdee",
".git/objects/69/ebf8735ff0c923814c149fe60acb84e321eb4b": "77c8ba8891ccde13f9b69f6e25c3e921",
".git/objects/69/fa78833da6d4b7573aa7d7ad8b69b3fae0094a": "61da9e7dd2d1c0462dc7e3db29d2049f",
".git/objects/6b/05b5281717197fae224ba664c96578dcf6793c": "2a075b48ec749c7c8cf6d4c646147f24",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/41b483a3cbc7ec417888d21e0678abbe945bf7": "e91d2b858840b913dc743f97a444e7cb",
".git/objects/6d/cabe1b3edecf574425a61d2a648834214b9748": "fecbf33d7d331134bb475f5300727932",
".git/objects/6d/ebaa90dcd6c6ada6aec6dc087563680e3c6750": "42f37d4c38645cc32afe580f3ee5de82",
".git/objects/6e/2050f88852d073cff8d2a5afc7e23d3f1d9182": "0d5fbbf0242fd158eb01184d7ae9fe00",
".git/objects/6f/e740621c0458f678b72b8f3113e72dc6ed3c7f": "e13f9b02dc62e286be35554698592740",
".git/objects/6f/eb2e9c84da0fb0ee13b9ef8fe41f673c1ec556": "b5f535b4180d3b9b8572836afa59377e",
".git/objects/70/334fef8581ab3903541fcadc2ef60026cd574e": "807d503f1f0d025e591579a26de777bf",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/165b3ee2391b9cc37679553fcda1b540bdcaca": "644808bf0d8a24c46b963abbcf75e24e",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/02b6a95cedd3dd1740be186dc3418b4fb40f1e": "3beb22c9981031751371ace3c548ec58",
".git/objects/75/a997718614e3fe772c30e0ea8b66af13f7ad1f": "7a10414546ebf5b9f7447d3b5ef00939",
".git/objects/76/1fbe3b5432c20bf3cf667a36b2c19389581ab4": "7a4121f070656f270ad0308fe539cb1c",
".git/objects/77/e664bf1023c67155ca7f02afdcb7dcd5f9effa": "f54634696d084808c5690df22acdaba8",
".git/objects/78/36fbf379c7ca7e5a55739c360c0208f40222fb": "44f5aaf88d03f098916392623b41d0a4",
".git/objects/78/63bd9f14a5e5a44f7bd43d5f1b6203d4f36948": "6c914a9762da0bac0b43d9e8d55e4753",
".git/objects/78/6c833e77188c11f3af503897b14ae8f204705b": "d57f118052ae707c48c59afa5511b6f5",
".git/objects/79/2bb7bdffe01f69d6ca16b8309f69680bae7028": "bc4e2fbc503fff4a5fad5652af98f23b",
".git/objects/79/57b2308318332186a42c497d825ed085370b5b": "f8e29e7009576557fd02a7d14f107d70",
".git/objects/7a/3223b343b212e7122e0c8a70224cbb0d58852b": "fa6d023696721a648451e55a20581872",
".git/objects/7a/331f375a865cbbe283d2069e0fe6457cf18eaa": "97386436adcaff9c033c60e18651bf61",
".git/objects/7a/ba9041bbd3d7e28ab714850dacb59146431977": "fd415a829046223d8c0a14c8e9a2b1d4",
".git/objects/80/495956586dd7c527e14b3d3686f506ba0c4c41": "857f27654ef6884ae51b71cf69fd300d",
".git/objects/80/a5937db186aa5bf6dcc966b54fbef1e950304d": "b19066558435e0bd75174301f94407d5",
".git/objects/81/3e04da2f9b65a80f2ac0bc6ba9ecfcbaf79524": "bbf1784c6277e4d09352c159ab3c045f",
".git/objects/86/6bb00faebb2f164774766a79d100801f4f7b16": "2061e22ac7132957026ea8f13b7ca044",
".git/objects/86/df5ed687ccf8cd04e1c2c0182b09f04e182952": "4d18df07fdf91ba315988a6b50cbaeb9",
".git/objects/86/ed373bc28d960ea1aee17edf82b8717828eb14": "22d83a7a689ba43c5bf66bd15ac2c697",
".git/objects/87/06223477057f68b97ad42ed9c48da593d1b9d5": "0198f82ebcc6c29337080913e48ea710",
".git/objects/87/526e03b0146e13fcde04fcbdc254311c036ebc": "817250c2cf25d6662cf6eea22bcd4086",
".git/objects/88/cbb2ade75ab1572b4401d0f74e023e9c992254": "fba8102b067534f64c499d81ca6097d6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/eaac7160bbc25930b8410a4cb0e7df8229ed0b": "7146aec3cc720ad15c04d084ea3995ce",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/8ade65c2ec139a16145405311bcee421cd1c58": "87d88972154e3c3e02673d4d32a9b425",
".git/objects/91/e216b90f79c7eaaea0832efc79d35dbde57eb8": "116f3a9b9a048cca94c9b95e70fcd8ef",
".git/objects/92/9cb1dcee009eaf162834091d41ff08e33f563b": "fbf919f26798d63cd71bedd11cf92f1e",
".git/objects/92/fd8cce45198257b7d2c921c273a775b51be7c2": "74eef0193b0f328927df413551a34d0f",
".git/objects/96/6a602efa95bff79212f049321ef799b9bb5c90": "569dcccd5fcc23453e42c805f05ea902",
".git/objects/97/f51c93368480e1286721020a6ab3ac1c612b1f": "a9d41436904cf109f2076776a7f13b9e",
".git/objects/9a/037ff39afa549fd2f969e2fcb302f61e55c240": "ca41280911d16fa1b25d0ec418e6da35",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/2f84abfb107cffcf675b06fd0492cc23ebb212": "0029e649e0cc2cca129ba9e34104405f",
".git/objects/9e/7ccde3a830912b84cda4ca02b617520a8af607": "f5e5ee7f9c671f0d14632e23c02d7993",
".git/objects/a0/8fa3551c6a74d702e40119dd70f7398dd5ce17": "be58b80c3c76aa9a06fb95a3ef570d1b",
".git/objects/a1/3171d1d1e397941ba018f2f8466406a24b38b9": "46db0a001b7d653af49c73ead0a4d8f5",
".git/objects/a3/dc6f6173b6879302c9e4a1d92e12403ae62bff": "8830907d69a8460b37a4339e35224065",
".git/objects/a7/5663d0e3a724c97278e6a5508411dd878c800c": "c8a4023824a3fd350ac1ce3357db6672",
".git/objects/a7/ba88dfdaf1aaf8063ecb401aae3b08a5b5ce0b": "a4a3933e89ee3a06939784d0c03e2e9d",
".git/objects/a8/b39057510b08674afb8a86e96850af2a7a99aa": "ee5db4b04e874d5f7c2cc15fda1ffd97",
".git/objects/a9/255b7ae8174d3dd23b5e6668c4bb2fa268fc3f": "45d8b3a8b6ef85de528e3d2701eac9bf",
".git/objects/a9/6544d483a5151f137d09959a36253e2f889bca": "e3c6d83db7d2cf6cb4ae8ac27f050927",
".git/objects/a9/b69182ca4ce8c6d13b3dcae060c3b30e8d9ab3": "8022f7a6f512d4acdbbc717bb9abf124",
".git/objects/ae/395a3818bfd0f788c1ecb3e85d330086ea3693": "aed504d45dc275b6c89984af3a7fb81d",
".git/objects/b1/95ba5ac497edfba5c5230091d1c578157e9f8f": "4db2b1021e751d4a83ffe12ed0794edd",
".git/objects/b2/fa44852254b889a13f652aae128ae5e24c697b": "867014c97d3069e55cf69b5c5d6f88d6",
".git/objects/b4/542f6109d3960735a7e93f94e81cb3cad5fb16": "aed280b29695a396797f7ab59bd56b89",
".git/objects/b5/29c376bdbda2569ff10d6bd1f7ce14345ac4d1": "123062e6589b4c6bc3da42457dbc205e",
".git/objects/b6/e95dc42c18503986ffd04425c9fe9ed65739ec": "8c6d700973cfb2eee28076a69a544d7f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/4b8b5de26376f96f5f2aa4ff0e72ae8432f4c4": "1f4dc05199763c438149076063eac600",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/5461eb3d48db28f62482480412d891db4ac969": "f6d85744ce118d0ec33834fc5996581d",
".git/objects/ba/7445dc58918ca2b5566323cee53de2c5491841": "8a9e4b09087233324cb18c83931dc1e6",
".git/objects/ba/f2891e8893e29305288efffd0357b33c118abc": "c7632e202ec811eda610844a3d1a0a88",
".git/objects/bb/e7d853033754d8701630bc4ad6249f3a4c9c55": "d0e0668b69f1822c0f51cc027b5b7ab9",
".git/objects/bd/84a5505208ad7b3a1d11516fd4f1a261f3e0a2": "543e498aa6dcff17ee01535927e36dc6",
".git/objects/bd/e7004d92807154ad8007694d7aecd5f804f80e": "dd232eafe36b323508f8ebf96190e0a2",
".git/objects/bf/a78fb8abe0c3b972090903bd523ebac3913fbf": "3f1fa97ab4210c399300b63ce4ece5fb",
".git/objects/c1/e313d097d26c4e2535b0331f71ebb88a9cb168": "219f75d1cf0f9dbb5ec857a355c7df93",
".git/objects/c2/07ea6fdee96904dc19eabce13505397d1b07b8": "77616e2cfaa247c715d1adbe8d8b73f4",
".git/objects/c2/1b38a7734d8faf7088eb85dd80ef09b1758aa4": "a5a4992e5a7e6ea9c2becb74b0e5c098",
".git/objects/c2/d2309b2db3a74279cfb79af01c9bff8ea46c0a": "f276e480c8506d76ee71d97a0aeb7ff5",
".git/objects/c4/a561e816d03dd211e41745c80a9d4d81bf7912": "32f1521468e25d20ffe54a9e80f87ae6",
".git/objects/c6/978289cf9b9550ca877a0ed21d711bca25e92b": "575a60ea7afcd81e4ae79f944ede3ee4",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/2b7dadc7d7aa75b2ed940f9b715c2aea017544": "613ab7d458a579dfbd2017c6a2c65014",
".git/objects/ca/83e6235479a0a210a2f05f7a11c1d09011ad20": "8f9bce3ef70cd0e8ac10c41c92b7428a",
".git/objects/cb/d173bb887f488bc8e202407f60012a5c937786": "a923eeff81dd1d7d13cbdcac33fb09a8",
".git/objects/cd/394f50940e7cab9e9a681ce4a9174c24ab57ca": "fa68b6019a2cce6af322d452d75f7b75",
".git/objects/cd/f7f0e670f98352c4c4acab1b781eabf2614e18": "033a0ed4fc05277f4ee373787c603835",
".git/objects/cf/d5316e6bd5faa4bd4c07af499f4fe4a65a70a7": "20f91be7db50958509681e7c56fb7bb9",
".git/objects/d0/9bbf2ff5ea046547979424541f40edd1ebb410": "041c11f438259771332c346c2a0bf1bd",
".git/objects/d1/8e38634b0a49d11103428dba8a20de487ee5be": "a743dc7f181af8ac9f3f5e517de5dc8e",
".git/objects/d2/e9bf0ab2b00953952fa04ce1d062b58fcf615d": "c3d8bf32adf140a86cf06f50b5e4b0c5",
".git/objects/d3/91e3a3048dbcbebd613e7f5b57418648ed46be": "df7b8820154e036c7c7cff2eb6709bb8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/801b28bec7bedfae40047ab86973ec06308331": "f63e81be721665c53578f26808e1a9b0",
".git/objects/d4/cc087c70b522a05b2cab14c4212f9dcc8ba561": "04f64113ad38c4269fceaee62089c283",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b0a137fe68d20258eb11062098a39447e8e403": "664b56223e7c2511a2d6a8a98e53ce8a",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/04866da820eb1857b7a8cb1b837afdbb184396": "09f5e6aa7e7d55376add60e6ae8473cd",
".git/objects/da/381e9a6e16526656f42cc839881062c7946c28": "1153ba5dd375464c448852507d403d54",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/434f19a5b0663d1fe1a1543e9aa11756b1c2c2": "365874a3f612e30ab1dbc86efb11d01a",
".git/objects/dc/96ee916da43eb12697f3a4545cd39045926a98": "126c3900217d80974a6e4bf4559c93c5",
".git/objects/df/0e3184fd70c33de773688127b9dbf1ee3832d3": "411ed3716e0741831c93ba15e7160133",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e6/235d1580af6cb8d773f9818c8b1185380440d1": "e50180b8477e3e00da9e07557523557e",
".git/objects/e9/06955deebea81fa2f596b87ec62f7c631d9aed": "4d50ecdd830b8357a9a55f83ce1d8262",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/35c7cafa38800d4344a1247eebb988868d8f58": "3a35e0a9365cba72b3fe10e8e3b45eed",
".git/objects/ea/786593b77f90784f3dadc8b54b439da57c63dc": "8610799357be3c31671bd12df3af47ac",
".git/objects/ea/fad4476b4cf56ad95bb2b8362ab546e58f69e8": "2aafccdcae1b1999cbd3ffead9aa5f90",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/bb99a263415c16ea46aa2035f1dd17d3c6a3ba": "12f32e80189ca5f54ace13bc8066da8e",
".git/objects/ef/f641ffae86bae1356ccb170cb448b2a0b049e4": "d87836611f410e3ddd67e875f483f961",
".git/objects/f0/1fad357250ee1517aa8f469def2a7ceb8b09ea": "26ceef32f325409767b88899f33d760d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/b669f05b9893385a20e1773db620993535d9e0": "1ce64fe769a1d4cea7a365a6ed9dfbd8",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/01f7c6fbb7e24b7427e46b1f8a8eac693ca99b": "3486d961a2728135ef4608598099f237",
".git/objects/fa/4c4a37a4f49835afc814485ef78d5c27d611b2": "34abda58fcd75d9bdd9926dc04e49c74",
".git/objects/fa/c2af5669706c3e4ee5c25ef2bc76c5769dae12": "6f112f95549babb94cb01231c33c152f",
".git/objects/fa/cce8ade2a438e1d6b323acb96e361c7d14ebb8": "b4c66e1c5bb14e04966dfa79a1c031ca",
".git/objects/fa/e7b903da24a90867d55d04dd010d8c7186f0d6": "480f562cfe00e6fa6d49e69ac2a386d1",
".git/objects/fb/e5077e6dc23cd95321b28346e03329463d03b2": "a470b232f045e94b0e0fc49631b21a45",
".git/objects/fd/3e11150370a7b88cde3215ca959a009942ea3d": "57cdf6749bf08cb5f3f208e37e4ec7ad",
".git/objects/fe/b909b337d125d8df946c5370dde74e3e81b417": "c47fa0093c62e710f6c0da07b7937f1c",
".git/refs/heads/main": "74acb55138bfae9680cc580e81f85895",
".git/refs/remotes/origin/main": "74acb55138bfae9680cc580e81f85895",
"assets/AssetManifest.bin": "a59bff94db5b1734f9079c1416260ab2",
"assets/AssetManifest.bin.json": "3c206abc14acc4d2a0db9fab74325901",
"assets/AssetManifest.json": "195ec120d7461a4da28586f55852a8c7",
"assets/assets/audio/adpcm_slots_win_jackpot.m4a": "52993d615fd706176c7adc710a883540",
"assets/assets/audio/adpcm_slots_win_med.m4a": "439615497a282c072bd36d3d4ba06fd4",
"assets/assets/audio/adpcm_slots_win_small.m4a": "1f154ae27f8bf658a331b23755cdf85a",
"assets/assets/audio/audio_bullshit.mp3": "a8e744f7d4ef70cd8e21a5ab44841b0f",
"assets/assets/audio/audio_difichento.mp3": "0e626f24b9738c46fa6ea00b745329cf",
"assets/assets/audio/audio_jingle_bells.mp3": "7e7c8728e923a8fad954c3e91cdb2467",
"assets/assets/audio/audio_rot_kazino.mp3": "d90af331654be24d9f7a50d682e82fec",
"assets/assets/audio/audio_ti_bredish.mp3": "b687fb029e6f10e4441efd0122b21981",
"assets/assets/audio/audio_ti_kto_takoi.mp3": "4237c9bb245b759ca4aa52c7c9b84ae4",
"assets/assets/audio/audio_tvoi_rot.mp3": "8e4fe67c5580fa32c90499078e5d4602",
"assets/assets/audio/audio_v_drugom_poradke.mp3": "54a9b50a138f14a8ea85ba767a3f93c6",
"assets/assets/audio/slots_spinning.wav": "dd42627f54af692a787d76da2f1979ad",
"assets/assets/fonts/medals_and_others.ttf": "4169e9dfcd05fa4b31eb2cfed25bc77d",
"assets/assets/images/ain_dubai.jpg": "5152236aaf452c8fe60b32a0efb94641",
"assets/assets/images/background3.jpg": "659184b83b63e55d1aa3ff938bc12570",
"assets/assets/images/background_evening5.jpg": "37b1bda7dee1cabaa74277ece71e5c22",
"assets/assets/images/background_wheel2.jpg": "84cdb06b63f96eee2bcb9b698a5fb79d",
"assets/assets/images/bank2.webp": "996848bdbd8ed8ff627ce8788e8a0053",
"assets/assets/images/bellagio.jpg": "a6a1d33e5d1f19cac13084bd8a857b4f",
"assets/assets/images/bomb.png": "83db04d59038fec7e8e2113eacf4d7b5",
"assets/assets/images/bomb_vegas2.webp": "7a5baeff4b97b37ba852b3cc0fc8c391",
"assets/assets/images/caesar_palace.jpg": "77c211be89cf8840ca3f876da7d6bc02",
"assets/assets/images/car1_2.jpg": "01448b3f6e6a0a2778a369763da6861f",
"assets/assets/images/car2_.jpg": "b7430da6f242e44dd6de8b4c799d6083",
"assets/assets/images/car3_2.jpg": "79771ce60400537cd34251e9c8d372ea",
"assets/assets/images/car4_.jpg": "d59223f9cc0f904e84e8cc1da5b9e32c",
"assets/assets/images/car5_.jpg": "abe411372503d9026c721d07ee51e8c1",
"assets/assets/images/chip_1.webp": "9e1cfa2153df45fc28245f5e05249183",
"assets/assets/images/chip_100.webp": "8ade801e2293f658446ce373e0f18032",
"assets/assets/images/chip_25.webp": "37c6e16782efc805aa56fca83fb1ff37",
"assets/assets/images/chip_5.webp": "8770885dd6f5c49f9942150991154767",
"assets/assets/images/dubai_bank.jpg": "0ce012095878bd7309cf4de8f7e39a85",
"assets/assets/images/dubai_mall.jpg": "76cfe8b0e65fa665ff57855590a2445d",
"assets/assets/images/dubai_tree.jpg": "3b1066683a0a395445104574516d63ca",
"assets/assets/images/dubai_yacht.jpg": "a3f73466f6cdfdb9b2be18f1d5110071",
"assets/assets/images/frog.webp": "f9c7478c6dd9caee1330d47644a91a02",
"assets/assets/images/game_background_.jpg": "d8b5205f12ed5792f5842007d30b8299",
"assets/assets/images/home1.jpg": "9d0e30caf70931d292301e280a2c90c6",
"assets/assets/images/home2.jpg": "9fa74f3cc2ee55bbe06b1f4bb0c1c745",
"assets/assets/images/home3.jpg": "2ede4d0a7a8c617d06bb93bb23457d4e",
"assets/assets/images/icon_invest_.png": "a7ff3ef33611be66726da7d4834054c2",
"assets/assets/images/icon_leaderboard_2.png": "7352cd6aa5dbbada544549b9c36394bf",
"assets/assets/images/icon_promo_code_2.png": "e831ab951494dd41a62a8c2a629495ac",
"assets/assets/images/icon_roulette_rb.png": "ed3140d0af8f3d3d3e5715ad1e5f1d3c",
"assets/assets/images/luxor_las_vegas.jpg": "7c14a5da6f4cf453a673cec9e41e1d47",
"assets/assets/images/main_background_3.webp": "dbefd2198e1140890b204a754d39d77e",
"assets/assets/images/main_button_.png": "cd266a253eb88b019a4b1e86ec418f5e",
"assets/assets/images/mandalay.jpg": "3e7a3912b1bc65bcc3e75d562874b55f",
"assets/assets/images/oil_derricks_small.jpeg": "4990cbb8b0d805475e3ba5b9761471ae",
"assets/assets/images/oil_derrick_sea.jpeg": "d2d18808170c43b15caa2cbe23f0c095",
"assets/assets/images/palm_jumeirah.jpg": "5962798cc37a957e8eda0cfb26418913",
"assets/assets/images/paris_las_vegas.jpg": "220883232a6e1b762f674a9bb122f6ef",
"assets/assets/images/rb_background_2.jpg": "f2992f4768847645ad72448c7c27feba",
"assets/assets/images/rb_investment.jpg": "d1a8b71b6e4f182599b1a27c29d442c9",
"assets/assets/images/rb_pointer2.png": "1a2bf6f4869e49b8fdd75427073451ac",
"assets/assets/images/rb_roulette.png": "3ddfe6caab1f21dfbd9a78577271efb6",
"assets/assets/images/rb_roulette_border.png": "f98ba49bfd296caec9d67050253bf356",
"assets/assets/images/restaurant1_.jpg": "d50e2f81de764399cd2e2e86dc942452",
"assets/assets/images/restaurant2_.jpg": "3cc0827bdb5f674b9f1942060fe5506f",
"assets/assets/images/restaurant3_.jpg": "0010cd721ad5b1d37afac4c8cd3e69da",
"assets/assets/images/roulette100M.png": "2cb81129f397c886705b0991b37b106c",
"assets/assets/images/roulette100_2.png": "7c019401669214f4a0326e9e8bde4da9",
"assets/assets/images/roulette10B.png": "f14361c7229ab399cb91413d049f5102",
"assets/assets/images/roulette10M_.png": "79ca010434c7227333635b6f7b3edb98",
"assets/assets/images/roulette1B.png": "197cfc9dadd8346c54366e0883a82b50",
"assets/assets/images/roulette1M.png": "17526ffa0d53e7ec5353c3581cf7ef1d",
"assets/assets/images/roulette250.png": "9b27d728416142ae32d4cdc6d2d9e59b",
"assets/assets/images/roulette500.png": "4c733f08a1a84bdde480ad038c093308",
"assets/assets/images/roulette50_.png": "0c3ffd8cb54de105349c072afa89aa0b",
"assets/assets/images/roulette_pointer2.png": "1659c8373a7ef8c73524c1318df238f7",
"assets/assets/images/slots_icon3.webp": "b3b9d7ff47db9367207d211a4742e611",
"assets/assets/images/slot_base.webp": "a0ac99e2b2472d0fd56c3f74fe343919",
"assets/assets/images/the_strat.webp": "db8140dc2ac4aa577d4f0c2f3fe07221",
"assets/assets/images/venetian_and_palazzo.jpg": "038dc669117cc11e73d22663394e8e58",
"assets/assets/images/wheel.webp": "829bf71193077d586c9ffd2c6ed12bc5",
"assets/assets/images/wheel_background2.webp": "8f59b7c8eb0796a66a5d38dbe1c30fd9",
"assets/assets/images/wheel_icon2.png": "1af799b0776ef689b1b4fcdc20b6586c",
"assets/FontManifest.json": "552de2b23268c47854d28632b106f96a",
"assets/fonts/MaterialIcons-Regular.otf": "6ab8ad88ab6bf5d19c6d2cd3e065dda4",
"assets/NOTICES": "2b780f04740cd78fe7c107fe18460540",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ceba344519d36bd55d4756d761416ecb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e6e6fdf468cff5e291058ea84b397c2",
"/": "2e6e6fdf468cff5e291058ea84b397c2",
"main.dart.js": "31c4fc594acbb9180232e14b4811ebbf",
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
