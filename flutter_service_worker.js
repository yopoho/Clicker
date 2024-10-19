'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aac8b92d4f60cb2855698b9c5e1c6905",
".git/config": "b54821844823733876d960c9cd91e1e5",
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
".git/index": "c14c3a3febde64030d43f65fed050e13",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "55ac84276d3b623832b5d59b8a8b935e",
".git/logs/refs/heads/main": "fe26cb3960e13424c70e2ac9358f05c4",
".git/logs/refs/remotes/origin/main": "4e3600b501f4b9d2433f55e6a58e6772",
".git/objects/00/19ff3026584933d705390c0f991506e461c607": "6d4fdaa5f64676cfa7e5c1c2a726ebbb",
".git/objects/00/baa4dbade10cc7116c663a834b96f4e8df02ce": "804b1a50aeb42cbbb36dd3a35388bf45",
".git/objects/00/be0ec833774c6a951018306affbf66a2b3501f": "c984448deadb8e9872d078013e01115f",
".git/objects/01/1dad45552d55aae8589d5aa93a41ed3ba3e137": "179a7ae437e8a8413482cbd00088d4f9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/73de409f9983fcb3c6da4e4e048c88d3c50c61": "77389876fb2907c611bd22834a34a96a",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/ae9c909892f3e4e920bc71d00474743ad34ec0": "9df1fd0f3a4f0ce9072e350a929d4630",
".git/objects/09/f46d75a1702d72845b6bc579ee4cae993adc88": "f0c03577dc1281252d21a4e622cdb400",
".git/objects/0c/ff09f16a3ad803a5b2063f083e74e5628f420a": "e8482deb7dbb181f16264e3c1695fcef",
".git/objects/0d/4a7e8291c3d7f8221d77749c5babc8ec58a37f": "4c4a32e052498e1cde05a989cf595a78",
".git/objects/0f/a627e20f0f148c151134001ce1d8e6794b4f65": "d2b05ca79722c0beb98376615eefa445",
".git/objects/0f/c503801edfdefa3f431417e3366559afcbde9d": "827aa5d9b4682b7b4113180a2c2471aa",
".git/objects/10/185472ee90636d64f0d02ab8815b0487cdfa93": "6d75024f11069862ca9a36decd9d64bc",
".git/objects/10/6909f23773f5af3d2599224b1190cc739c5eef": "696e41ea355c561b774c237b5f30d301",
".git/objects/17/fa36ca0247a84546c7517b50bf57572d84f5aa": "f6aa762ae1b5bd6bbc153a783f2e77cd",
".git/objects/18/9215cc859101b130dc823d399689422ab9087a": "7d527de7af20574237ecafb25ba150df",
".git/objects/1a/c1f74e47aa944479adddd8e45e82b0e675b988": "d8a379fb57758a8879e27bd4acdfff71",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/183d92594efbba52a135335e483d33f0461a43": "314f481bac0b9cc923e3a31309c49718",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/43eb8f1232f1cda651a270f18eed0efb8aa3b6": "e1bb04df6a4c70df296258357eae1191",
".git/objects/2a/2608785ebd9168e9ed30ba15942bcac5bc1910": "3369c07902dd69ebf9ae642abec681a0",
".git/objects/2d/ca79d5036431ebc2bd0ce5b4560e60b4acc29b": "692eaee2be569470fd33d0a381862db6",
".git/objects/32/3ec36128c302a3c8d3cd0b436bd76ed2a26f8b": "ea6610e21f0e79e330ff876bf3fe0e47",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/8ccfa72cffb37178834334ef6960a307334510": "36a7eaad3345951c5b4180c07ca57988",
".git/objects/34/6490d82887c99955bb1ef79e7f8aee6c8a477b": "a9d84f2ae357b48cab9795236db25b4c",
".git/objects/35/1b1a4b811d5752b5e3a3ea5f5cde8182ee63ce": "f5a00268224ef4817c8a8101f51795ad",
".git/objects/36/a2e05d711f8572a9eb958e9182640f56810f17": "31ed4394f787b0af41524dfb77c7d480",
".git/objects/37/bc950a1c383eca9b2b41d66334f41b6cfa7da0": "029681a2369a880402eede4b8f607731",
".git/objects/38/466cf91631b43b625936a3cd7fe256394c494d": "09715373d529f6688a834939544a5ad8",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/9736b36b6e59fa21a1d2e78860b96b8a349acd": "5099c89d3b5e1c1fef542233213546ea",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/0fc97c678dd116d8fc5de77f4ae13c3a3e7c1a": "9b76a462905a763a07fb2b7d37676d99",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/05fddb5bdcd02c5157edb212bcc2d4075cd7cf": "cb7f9ce95de961e97efb953a1eaef180",
".git/objects/45/82988b67bef3b58480738db76e2b85acb2e1d2": "1bd6ad1d3db32a4d698a25bf37a6c7a5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/d18728117c168d75c63ec84fef3f547c1421cf": "8a228d367478e26c1b5439bb6e31ce47",
".git/objects/4b/428c6ec4b8855f5c2879bdf4720ab0d2d2089d": "5d1d2d8324c977119cb9d9114c71dff6",
".git/objects/4f/595d9557d67554db481dfe28f0dec97f97cb72": "742d1bea58f2c7a964529619454ef860",
".git/objects/50/2eddaae2f21b11ced882bbd4b88ab357f3fc60": "1c8649bd28dab47b0cf12e8faff02f66",
".git/objects/50/740af7520dbd79037e578e88ba558524c4ca0e": "42279811e6fdedd2edf0471e7c3f70c7",
".git/objects/51/54e93ebc6708e39fdab41796ff07b59b0108e8": "9548ab38cf31e006dac03296549f3c5f",
".git/objects/53/12ebb897efb4da2564d1137edaf6962c514ec3": "41794d67e5654b16f3e19513b6d58693",
".git/objects/55/7532593866471aa5cbbd4d7b7b87eceed7ca89": "b1a3ecde6f6c2ee3580136241785fa83",
".git/objects/58/ce1adad31a4a3d5206104e19845e12e1a7c26e": "06170af08137285cc9f92c778aca109b",
".git/objects/59/844457035042697219b8277573d87cd7e7a4e4": "9a71aebd3d8c0cafa28fb7a77b473f19",
".git/objects/5b/2a6a7991783710ade2c68599866a8435f502d8": "789f39d099031520fb734ca7c91128d2",
".git/objects/5c/74310d6e39f1a967a367f45b80f759c8980eef": "06b38011f15690e8bf553e5432f46c29",
".git/objects/5f/546b0e7b5c7177ef9bfb7c6b010d5c1ae7b0c2": "ce16319512b093479f216e50268342fd",
".git/objects/64/88e47d9ebd9c76b162e9d87eac65bbbf0fbdce": "ec03f2985b904108911a0562a81a4376",
".git/objects/65/ae2e682ea1fdf6558812c8d82f338c0a92fe78": "5f52f03d72a1e88dfea1f6f8279e8be5",
".git/objects/68/5b2274a844862768ef0034a39445a546b74899": "7160722931e1717a54d0f132b2d59322",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/cfcf3f24419c0f3e86e7938b56523147f80af4": "e95e3f83be5b44518467cde671db7bc1",
".git/objects/6c/f39100434bfc2a738186903fadad7723b918f3": "5f8baffb6947bea7f17c8ce78748635a",
".git/objects/71/83b3e121257bda948db1fc52151c3870d76824": "db90c4ffb13dc3282c901b3b62498add",
".git/objects/72/4ad768be0cc90fbd60d8af635d3db7199131e2": "64326c41396fe6f1f6fa70c65cac3cf3",
".git/objects/72/5fb08a194442af10fd624c6e7fbaaa1811c2ea": "d31ca9d9454582f6c5ecf74570936621",
".git/objects/76/f7f51af9811df3cf6589a73e071b36e512b1e7": "35fe7e59c7d641c9bbc316363e9012e6",
".git/objects/79/123a4ff55297f85223270fb42598c6c873127d": "d96f69c70c8a2ce3db9389e76e96ed2b",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7e/552d67b17fe04f68657fde91354b091139a7a2": "ddb1df5aa4de07ecd1a3094d2a0a52b4",
".git/objects/7e/c3843017d8e5df76f5b3be3bd8dd11bf823d4d": "05cdd07ef145d12ed3460dce126f0cbb",
".git/objects/7f/04110a42dc87c1ff8a19b1b4dc3916129ddfed": "15a246e76a3f580cda70307f696f0342",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/0a6e8d2044f539f6f8b17b4e048500e9111246": "03862032530f70dff822e2c940580688",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/a6571aa7e1ca5173628bd93772cc6dbb8cd8d0": "67ad59df5e8794d0086596e9d04e3e4d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/31f25ac5c88c7c51f5410bd75ae8fa1a65bf43": "1ef706ad982ada42dbebe44f62a9c26a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f3c15c19796c545c61338e2176dac45b91ed56": "87cc7b7b059a6a1add6bf3052921992c",
".git/objects/8b/34b03eb530fb02fdbb2bce108ddd904ae50d1c": "ace717872bccae7a7ddb78ec032a1fc9",
".git/objects/8e/07cc4f6f250f6de727935388a180a9490d7503": "aa080aecd4915ec38747e2407d083182",
".git/objects/8e/61b8803b4dbde399f0d9159ff5e2ad273b2e8a": "3590b3999871077ccd2da094ad7ebf65",
".git/objects/8e/b6099e634965ea606bda12949947d643508104": "6a1937a0e40962e2901b6c3ce2050ac3",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/1fb43b56656a1980636a2f3ea3da0eae6d742c": "1fe22b2e1db52167e148359b29aa2670",
".git/objects/97/3e54797759b8ff6462bd056d288c09ddda5fc3": "6c316b934778910a3748593979e5db55",
".git/objects/97/66b288aaed6708eee759a2b48b4b593bce49e2": "9269cc99100dfd90b0a1e9f244e0806f",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/0127ad7cb7f6770c7157612c974b448ce5de75": "0d0913c1570098927c1404148ec818c3",
".git/objects/9e/c73878eee823dfc117ab4fde23b5854360c394": "14641fed77d0cd75ec36a0214a59c0a8",
".git/objects/9f/32e535bf24fd77e7b9ed3e67b7c9e7895ec650": "2d6b28bf53fc14273c3c95b7d67e5729",
".git/objects/9f/dc420e9d34afb7c73efc2d95606bc533174e6b": "132ad53846115a6d6e0267133dfe83f6",
".git/objects/a0/f739c7c7272e2aaf511934d83891ce31588603": "516317687174423a52c31909e6a59a04",
".git/objects/a1/40d4cd9cd8831846be29aabf751262d53259a9": "92d5094fe57f5be43c687bc614f955f4",
".git/objects/a2/54158cfa2eb0de927afcd5dd68e556ff9139c6": "c2cc881cedcad42e7fd2abb977fcbdbf",
".git/objects/a3/c96c60311d42fb1b7ec197f729f743c7597705": "ee0743d1438562a53057c1bb8c9217cc",
".git/objects/a8/c3b068bb2e3b84523fead3caf7855a04bdd809": "c5b45e4d530204f83fe484c1d07207e2",
".git/objects/ac/d5f74345b1199e3b03e6df54bb85638da0a780": "1d45238b9850fd92ef22d7c1bb17fb85",
".git/objects/ad/99f8b526b6d38237fd29bc189455c1abdcedb8": "4113d204fd226ce1cdc0cf8bb7ab2471",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/d6414cf30eb4306a66f4325310128bff7b98d9": "13b43f6b389179e56a9f978ef6221d23",
".git/objects/b6/7171e12261fc0054f7c567a2c69215e00b4373": "0e58ff9641c64a3db156d99d62249ad6",
".git/objects/b6/e879077f69b68562bee67053771e3ef59022a4": "1c0a622ed0b06fec633bc292f7bbbb03",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/eea054c3f41557c1a0f77ca31ad699fceb88dc": "9aa801acd4959f45a710010dce3b8bdc",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/5461eb3d48db28f62482480412d891db4ac969": "f6d85744ce118d0ec33834fc5996581d",
".git/objects/bb/8edfadbe92f848a46ae4c6d45a9a82e19e5b6c": "903fe0ec7cfc47c1434e11d70a29582b",
".git/objects/be/e472cbbbe1a82cc6e65bf600feba5719b89989": "5d9890d1a4dcc83600ae2108f7ba3e61",
".git/objects/bf/92229c57cbb0205ec0ed37a08ba150b499485c": "c0c42a801419c6423dfefffaa1d819c7",
".git/objects/c3/c6e4ff62e93df048cdeaae730ed30a16e9aecb": "bf05352f07b40a04212bbc18ee95f65b",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/aa6430e5b5a0eb646e30602cdc942e6a59bdab": "33b6d81ca2638ea76c7d773f6b1530f4",
".git/objects/cc/8d8b35d363b83a372b6fdae3bb35bd8db5b4b8": "7d4e8d7a79162fb27e69f0a6c886452a",
".git/objects/cf/2c2b62059e158123af4b86f14fe338f0f8babb": "912fcae87970661ea7f9f0f35efa131c",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/ea0454af97ca25d2230b5872d551b9d69c19a3": "0a9d68ccbf1a779f486577c036e7d8c3",
".git/objects/d2/1ed97463f886af372521c5c59339b61e60566b": "f0d647a3342bb4310d2890fce762e866",
".git/objects/d2/661ee7efe198de09d4f63c6b97d20def5d9ce4": "ce90ebc18c5e03008fd85704402f0909",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/4158b36b26e9369c620293eb742b1986395d2a": "8b4bbb248ee2712e4b3ebcb7510f2fac",
".git/objects/d9/eab1babfc9f3ac11ffa4a6d469d310c4a28524": "f56d2e7d312991411c2d87c607a61218",
".git/objects/da/760a27a57e10a356094e51ef84ea5800304ce3": "bfdee96e49059c6cdcf7e51723f67a07",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/4d2d7a3f9a927fb564311d0a34c30ac2190332": "8ad150fa819b4c22c0dcdbca30c1c10b",
".git/objects/dc/f62f7661b71faafd4499be4e00564d9116da95": "1e76171af4d35d6a61c7fc71928f0b15",
".git/objects/de/34f4f10c20ceaf5b40817c9ecccad582da1b12": "651aa983ec137049dc839ccffbbfc5a5",
".git/objects/de/757c3a5b3e34ff0f33e69eb60e4d884c333ec0": "34347e8c75aebd0db546026a16455f72",
".git/objects/df/589b44c03d874b3a98e626561a1ba7057bc3f0": "c64666041cefb81f4d0fb4e6c8fe9610",
".git/objects/df/b3cf11a0610d34afd530cd34b510e618213886": "2ba6f8fa56e8437203df11103db8700d",
".git/objects/e0/ff1c31af66d21dfc57ff8859ca1f903f6d18da": "f156fe75d6ddbd27a44a0188efc22949",
".git/objects/e1/f6fd0bfc8b428f9e948afe74834be2acd23221": "c378c66afdf139003b9728667657c409",
".git/objects/e2/df02c4a85dc9db6a227c334eabdb0344496745": "90ff3c52f3029e3ae9db663f46242d18",
".git/objects/e4/dbf65c0c0d4bb4f42fcba65a356b1dc189a943": "588584e5eb7691c273ddb9d7e01ea8e0",
".git/objects/e5/5ddee8639068675e9e166fec042cad73a9a943": "6b304100fc563c9783709c1e1540e221",
".git/objects/e6/18ae00d5028b573215b7d2c0744ec1676b6c3d": "2fbfd1ca7f1985d60767e82ca070d436",
".git/objects/e7/7d48aea452ed34e37fe40bb9f7dbcdacb8ff29": "46d2147f8adec71bbe0a6294588cddf8",
".git/objects/eb/7716774b6f0bb4d3ac882380a2a10f67aee9ed": "e386db5ed68966e9a2965ae264503ead",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/eb1bb17921779ee33317974f9eefacd317cc6f": "c311791ac740a7b60918c325626c4015",
".git/objects/ef/e85e4389bdc2b9142bfe0e94cbd5e76c76b4ee": "e8cd9767284bbfbb7136fce3036329f6",
".git/objects/f0/4acdf16a3ff2ec1f80fe81a62f3f3a95d463bc": "ba73bfcb692e42c2f367adefe6f6aec3",
".git/objects/f1/e82cbace96a239ea893389e5e673ac5764aac0": "f8a4c57dd83064c8b3f4f7b4f5a8939b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c838620d65c91d4f64a9fa5b532fb2f2f18319": "5d1f88daddf00fc7cd9c0204c666200a",
".git/objects/f5/ddbc3c82eac8d77279fc4f595b52ec690c1f97": "032f4a5f26cb88460ba9eb9516afb6f1",
".git/objects/fb/4cfd7a10ef71b5220554d7ea142d7eb87c61c2": "5468257ba94102174687fa048e34896b",
".git/objects/fc/fedb2deed45d3420f7aca69eb4d277bba947a1": "1cc4f7f4d978b3a0c4b7b11a7ea9d6af",
".git/objects/fe/dac4b20eecacdf6e4b7eb3c8a5ffb77edfceb6": "662e8ab7fe34e4aa1de318f2bbb20275",
".git/objects/ff/c45c70f14a4f1dbd133acd92e2fda4b1efd8a8": "15d665c3ea6e37802635f305b98a159b",
".git/refs/heads/main": "86ce332023dd75c45461ad48e0a293f8",
".git/refs/remotes/origin/main": "86ce332023dd75c45461ad48e0a293f8",
"assets/AssetManifest.bin": "d585717c3350a692ef1e581f9f57ce6d",
"assets/AssetManifest.bin.json": "3f5b1134316cdf11d1ee8eafaf9381b1",
"assets/AssetManifest.json": "906d52becc0a3f343634378bbfb8f9b5",
"assets/assets/images/background.jpg": "8085ea4b800f4bf068f2bede461edf05",
"assets/assets/images/main_button.png": "b7c59d63f2505bbf22c28051586b8503",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "a2f06b9a7e4bdcbdeb4209fe60c00809",
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
"flutter_bootstrap.js": "37829c4128f7fd57f121b2cf2c3ffe7f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3954469d511f46e580e7a97389974040",
"/": "3954469d511f46e580e7a97389974040",
"main.dart.js": "e96086f16212ea35b5e7636e2a7b88b5",
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
