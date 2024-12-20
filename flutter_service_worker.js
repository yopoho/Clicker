'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "86a2bdaabb0ce766587fc98eeff46711",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "86b03fd1967497f6de986f4896dd1ed0",
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
".git/index": "74e348be0aa3124f9652098c33d12baf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "15dcaa6deaedc149a675ce95edd73062",
".git/logs/refs/heads/main": "15e61e992d9e087e366c53eaf3a03960",
".git/logs/refs/remotes/origin/main": "3180bf2adfa529d9da6bba02cdfcf6d8",
".git/objects/00/c7711a6c3448cf73d00f2742246d74d58b9aae": "d5f24ec01697b25085bdecaf1151c323",
".git/objects/01/7728f37b03bee1d377b14954b2cc18aecf7ae2": "080b7e668d50696487c2dd6471fb0c40",
".git/objects/05/04f857b2d225a49bedd6f6d0872c024498cf60": "c744b806967b153b6abcb33d8aa93ba7",
".git/objects/06/603c67a968420eebbf8814121821c8352488a2": "e522eaf9507f2e27bab9f17ae350c09a",
".git/objects/06/91aab51f05935386a5d482a7106be4a250f915": "fdb87e98ea756b3eca72512c5bb38939",
".git/objects/06/fcc8e3e45f2d4835e7b607f788c87e52dbcd78": "bf2a5529c3cdeadb1c8f8e81bd04375e",
".git/objects/07/0e4c00ceabd740b93f96bea590c894a425a663": "5cf73b0dcc0ae7b9fd5d63238eaeef85",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/a2c44b41deb5fa76a26041ebd8f91ef1f4fd76": "3eded293eb936437c673f16937a5c399",
".git/objects/09/a68c831f9eea2f07bbc4c2ca137ee1bfe536bd": "0e91ec70f6dfcf3f107f349a9e76201c",
".git/objects/0a/3c3d1ed4134199be536c28109d5f13c3798205": "394b2806b829b6a9ec155a05cf391e5f",
".git/objects/0a/f2012c38f47d321d964d3dbfbafdb783348a72": "a4bf4e84545edbc6a85345639aeb3973",
".git/objects/0b/6f7bed5f082458059da72b6c09122bc198d0f7": "c63806e2e14b43b38222d9eaa68b6c5d",
".git/objects/0c/406dff72ae3dd03190b9edbd2329ade35687c9": "8a5c4880c8660d40855720dba3d034e0",
".git/objects/0d/61d130b6166e8588ec6d37889961c35aeb264c": "f8d76c4656fd977576bb84a913e42604",
".git/objects/0f/457001280487367bafd11bfbaa77fc0fda53ff": "67e8da646dfab89a8147e0adb697fccc",
".git/objects/12/0c928149b3c14f8388df219b57c83410796372": "4f1d2035dd5aaea2c32624b17a85c44b",
".git/objects/13/b0ff9230b5e92f56bbf4d714c2a8a30d372201": "2d5d8718f449f1285eaadbfba7edd31c",
".git/objects/13/e0043bb4a89181f307e7ab311de0100e293504": "b5c25b3c2d9f116452c1cb5f1948923e",
".git/objects/14/2515950aa483902707b7d9bbc8046947c8a4d3": "cc74f97d756360c99358887871c28408",
".git/objects/17/0ea564d1166f3dafe8eef1ab3146caa4976c97": "f3ae976754112ee8d2b1a3914694d4b6",
".git/objects/17/500d6a52f6f76ef7882dc667d029d962d94380": "f67a06878ffc610a47832e453b75487d",
".git/objects/19/9035ce3e51cbf94b977b4eb415865b5eadd3c0": "567b955abf68b7cf3a7eff27ebbb1059",
".git/objects/19/e9838e50c73eb0609b64cd1e30f994b9474358": "c0c1fac2ddc094db5f00bf79e4f8c793",
".git/objects/1c/1322783ab50cf0d60424c6eceeae0901b318b9": "0bf4ccb3769e4f5746b19e2dff445145",
".git/objects/1d/a0762c2bef7e7cacd6eed6c0c6269a45033951": "7f5ba6ce2e700dc089e32f886340f4e8",
".git/objects/1d/c82967f4fe6a40528138c0a2d68d63f0deecbb": "0f286569e333cc77d3b494b0ac4aebe1",
".git/objects/1e/4d67bd5f84670d838cf091683964fa1be40554": "8bfaf93a9519c9750a83ee6d59b78782",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/5c7d80f7d9d6b0dcfdd30ba2c2c83f51f7afa4": "02ce06635d0f93f226c33bb673c7b18f",
".git/objects/20/02643084f43087bf8d7e4a33c2eb3a558df06d": "523fafe5a944ddc233e161ab8425e012",
".git/objects/23/ebc87ebbf4f1aa657a0794d15aa1147b2f9219": "e7505d53a08dd5e6ee81c2160e27127a",
".git/objects/23/ef12ab3c6279e570aec1059d14ddedcfc6afc3": "5125d28fdc7109ee6b34c3cc2bb7dddf",
".git/objects/24/0dfa572ba7264cc89d5ffdb1fb9ad16f64ee9f": "0144816da12191b800e961c8a64f5df5",
".git/objects/24/26566705f807a0e02e6327b42ad92aecfd605b": "63064e4f8f5ce0afce76c3918f42f34e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/9167a58df88ddb29057e1b96434b90ca94820c": "507ccd98384716999ce261400225c233",
".git/objects/25/95b908021a8f31c7087eec8c3b2d7cd9afe9f9": "ccb6b21b95735abba69a52646d8022b9",
".git/objects/26/0bed025a14b3e7009a8f2af20bbd9d6dcd6303": "61f5187250c868f8bf7406169bcc89fd",
".git/objects/26/5ddd161ea7602c6c2b6f345dae38bef3b34d1e": "ab2fe0e4e4bc59fcb1658fada50ff5f6",
".git/objects/2a/346d03d003ad743a3c5fbacdd7a4431e933822": "6534b822a7c9a4c5f5de3901239a3ea9",
".git/objects/2c/323e6ece359433d19375266cefb21f00d26d89": "86091b2a17d8333143a0080805f78345",
".git/objects/2e/930b65c15f56552264c2ad5ec5bfe572bf8beb": "2167f450f72e4b7bc37941b36897c9eb",
".git/objects/2f/83f21fdd734b3900853f0c17475c51691fbdb5": "5f945e694991b2b2fbc69f082ee82db8",
".git/objects/2f/9b95909ff9c92c7dcf65d8fed412b2055f11d4": "8b3715fb8357c5cc2cc6b54cb481613e",
".git/objects/30/797a26c453c56856331f9d65e9aa832ec60ee5": "f33c510504ed9eca2ae82bee05867ef7",
".git/objects/30/7d8bfba4edb47d07ae3a04ab74a834c5b5e837": "3a08f830889909e7f9833247fcb7e92a",
".git/objects/30/a4a118ea9691462037dc1039b67d692e62beb3": "13cd50ffbe4cbeec6f3b8279431f760c",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/91936af06935a3c2f04a5bac47691ce533921f": "70435305ed777bf35711eafbb6b07be9",
".git/objects/34/03c20c7f0ae2a0086a18b2d525dae7a0fe51b8": "66d51363ae1fc6bb51e079c9a49f2b1b",
".git/objects/34/333e96930ebc2188793918239fef412e62be39": "954e317b9612708373bd3444c943c217",
".git/objects/35/09591fc54b83c1970f65b70db08aa399316c90": "bb528f365259dec288979831430043e1",
".git/objects/35/cf383abc9ab31bfc7b3ef0260542e7573c2a26": "1f507592b71718a5737f43c27c4c3739",
".git/objects/36/86346f69203df136d15c04d92ffb29fa81b3b4": "9c0b370b53174023cd9f82187a54705b",
".git/objects/36/bb1b2d7d1d25d6a3c041dbaeebd7696a93e706": "89c679b1f7bab77f320c6ea9e6434680",
".git/objects/39/3e5ed9d4350da9e65cd05ea22292cbf904486c": "88b679d0da809e5f387c820b62353b55",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/947b5f3f28aa9b0ff1557ce74f6fdf7d46d16b": "3167ccd495baf1f227b49d3b17862b0f",
".git/objects/3b/119012dcc1b417925fdf7a527e0d3276e29a0e": "5383a20d93437ee4fcfeec37bd29b60b",
".git/objects/3b/7ab49b3e649f7a964401b29ad652ec20a99b37": "f6277adf8547446e04233866df0de1d3",
".git/objects/3b/dc94844d5119fa18cca3c0c5ce06077e3e834c": "5c87d56d28b74f0d0e40301ae0e1c402",
".git/objects/3d/a83d9b22cd5a3b1ac1f42dfa185cd9969cf75b": "d9641b0d46a8da73d6eccc7f69c21284",
".git/objects/3e/7613ac20525c66da89a5aad0e84584e4800c1f": "f3559428bc1d950033b3fd54a948c007",
".git/objects/3e/f9437b432ffc5d37745a02c27afa61712cd424": "e643d0e087d95b4306d6dc0086690ad5",
".git/objects/3f/03e415787118856d3162eeb2061392f6d2adff": "3541c702de9cf9c8a98b87e5383e1071",
".git/objects/3f/5cb6ab6d7bcb54e0e568256de4b73eb8f0b6bc": "bbf03f770a15235cc054fce29b9adcc0",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/270ae91652a2fa2e1c76ec6c0caf6cf337ac38": "226bb26cbcf0c2f422efaa7aff1b607b",
".git/objects/41/fbfe236aa761265660e702568aae4fc9d9ac49": "50de33e9d5a61e491d535ed9caf42895",
".git/objects/42/3bf037c90cdc4bba5a637a122f949b78724cdd": "518d1baa24fbe5e0f60e0a081d21c804",
".git/objects/42/8e8ff783cafd624ca6d13877386e141b334e12": "bf9bf17cba011d5b0277716446cc62be",
".git/objects/43/f6ae86c515fef69ad49700f9275761c01c91fa": "e270a18c741259a6f998e8e5c006cf1c",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/3b18de7c0785e3b17d61e15354175c622b5aeb": "cc08968aeac073a293bf235e3c512239",
".git/objects/45/3d2e3a3bdfa3b023dd89c6facf17e92fbcd7eb": "3db7df4dddcfc697559ca969db5bfdca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/595558185fda841e0abac91a8fbc5e7c0ba9df": "8d9c9628da10fce427d115318fb0f46b",
".git/objects/46/6d4246cbbf1ef130c91b79a8c23aaf57ec5d56": "d0e01f46b3ea2d5b8834b42e830091b9",
".git/objects/46/8f9e115472996aa9d84e7fe719cf1414ed12b3": "2c527a104a20bd8b5520b83e64054a44",
".git/objects/47/10061893a7315a648a9ef1c9ba105694ceb6e5": "01f20c07d26f3eaed207c8e2de8c3ff4",
".git/objects/48/00371e9f6e0dd7154f4aa2d38c75f47421433b": "2cce2ddbdae8ac90b329f53c07d8bcc1",
".git/objects/48/5bb157bfd974d95ed3a8c1a5f5ded7d970ec0a": "45272cccedc432326d4128bbd37cc91d",
".git/objects/48/68b226c2f1893c02d4add9a4a52ff58ac722a8": "e3367fee1d50a7a2137b54697d64f586",
".git/objects/49/24dd90c6779cb79076f018ad23b87e1890dba9": "721240ea64a435c2922f1a5dc947c9b7",
".git/objects/49/9640c2fa702b28839f9d2b6fe1f9e40721cbec": "a9d59bfc3d5b3d30870326c74050fb26",
".git/objects/4b/7455c8f0b695cb8d73aeca7b0b8e3026025603": "93e045b7e5a53d0fd0fa50ecac0a8c5b",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/652abbfc96eb578a80d59f376306e68997eaef": "1aec9c2ede8ae9323be6d18cd4b9d628",
".git/objects/4d/ad61bd2f76caeb91419d7cd2cff99847367de5": "4e1e5c30c1416a27f046491e59ec09e0",
".git/objects/4e/a72bc55a1b983b60e407fdd6b68f54a46321b1": "fd462875cb962df4bfbda4f0294d9e96",
".git/objects/4f/4c53d8e29ff9d0a88340c449dcbcf2f2b54e37": "108436c9e865d1a3d0bcadd420893fdd",
".git/objects/4f/c0bd8e9975d3331bf7fcd80ddc48ed27d79b95": "56b5c6be400718193bad1927a7edfd91",
".git/objects/51/03b8e7a5a63b60ec9a47955a1c5a7d108e6df4": "211ba15a0819e0ff0b5a0a8220701e51",
".git/objects/51/0a0cecb4464925cc5fa7249326394462b4882c": "ac94396b1e9c7cea6f18fdc23d745a0e",
".git/objects/52/a4d24c23f86c59253073d2459d1650b9fe24ef": "47a90c216d5aad23ee6e02ebd69913b6",
".git/objects/52/aa5167d5b43c7ad9a9c2ccc0bdd80254bf40cb": "303a7ec167e36820dbd6a495618f7de7",
".git/objects/53/e59ae0126481f1346e5cfee12aa414e018f2c2": "3be6b7a04bb7200d8a7093cf988cec49",
".git/objects/54/256827b56b3e9e6e7e975754906a9037706972": "80014a2f9f8fa7598eb4836eecb53184",
".git/objects/54/a8cec2d743b8eb3d8c5d59ae5d290fc818fd62": "0e2c2c37ffd237a68d0529288973270e",
".git/objects/55/2bc3920f3a7d15a075eda59c43cbef8936b936": "4bf589529a7247ab88a4065166873b47",
".git/objects/56/47605e2aaef0ac500622fe299ce348282cd596": "aff919ed4e491d847628415ffba83f81",
".git/objects/56/570c7dd405bc42d137e3cd832a73ac83edd2ec": "3e2f83dd27cbe78de78abd829c3fdec4",
".git/objects/58/1f5ddeb141e04a8cfcd2c18541a4df4d816a98": "85c2aa230d576290b4d33f7ad8a3e42c",
".git/objects/5a/2119a01c782e8879ff9fdc5d0ed4d9f2b1a881": "c6f541ac743dde6fac69df2833db7004",
".git/objects/5c/6646b330f792d037984c558bdca558337571ee": "09c5de27dd27cd9d9543374a9fb5cd77",
".git/objects/5c/7de69b0c65de63defe47110240750626f1fee5": "59ec8a8340538214e81344bea8ba267b",
".git/objects/5d/0d2d0a666a33abd6b425d152ba07ed5127f2f3": "e2f2783318b71e67453e168be6393e6b",
".git/objects/5d/65f9447910fbcb1ce109cdb968eb4a3986479c": "1aa4d3de5e5c9acdd9bd9155c42c27fc",
".git/objects/5d/761012e85f14f0271a52740f265481a512e2e0": "d4ad4c80c135ada90bb7100398d5d37a",
".git/objects/5d/de40c48208f6838a32e59a5840349571dd6cbe": "92d92b87d3c401b09475637bbd5e9b9e",
".git/objects/5e/6dcdb39fce88ff3afe7d6dcf27a0eadc9cb7a2": "8e46308ab71f7b9fdb911440d9b8786e",
".git/objects/5f/30a66a5021c070575c98d81b69470bb4355226": "1e854484a86e387e4377dedbeb6a0b80",
".git/objects/5f/4cbee10234fc767973f46a8653f8974eae6f80": "aca64d0855a154f4d4c14b3a55b15b01",
".git/objects/5f/bbb3879e540bdabd737ec97e7e6efc8e70a46d": "4703b29aff6da9cd430282d2e2356d4f",
".git/objects/5f/e55e1876fb8e8ab7ca1ab8cde4795f3e7a4c4e": "d3be042d274bef8d757b615b26626bef",
".git/objects/61/21e1191a0ad24d411d02baa5c4dc35c96e0f7b": "d304c515409f4ad359c7632ce800d004",
".git/objects/61/5f357ac87b02c000cd8ff58fe6d40e82563af5": "d1ee1b1c2abf2c0ac69d4af2e90e3609",
".git/objects/62/09eab81d5d72c6dc0b41bdffb9baf2fe0e1910": "3894efe6b64214d3a8d45c60742ffee7",
".git/objects/63/c6f623d71fcd1b3c0d1d350c498dac97461fdc": "21946f3abb80b93dcc4daa63936e3636",
".git/objects/64/0b5541a0dc3e922fb230f32e629f6e20b9cc5c": "39ba9df36356ef9334e53a7aa83275b8",
".git/objects/64/d3181b0f60413c13172408dd30329010fdbe2b": "6e5cf2e60c21e9ebb10595ff95773992",
".git/objects/65/3ab9275c8758cfd30901770882671895934064": "9116c50db2117d6d3fbf3dff507f087f",
".git/objects/65/c895d216aec5b192d8c00b64aa4bc26165eb55": "5ddb8337063ec5a2bcd8108ac6d6ddf1",
".git/objects/66/f0b4d27edc239b2066bb9cb09af5db45ad6b2d": "3aed839f42a0770c3e231d07444df570",
".git/objects/68/855055cdee2da70e8a43c97376bafc31b7031b": "3c9bb46a38944520a0fc8627a84fbdb3",
".git/objects/68/8d7c36a3c456a3b43ed43136dc34d7e84ef585": "c2a46fde0851eb4ebf2db1d9f6f61776",
".git/objects/68/ad7199de067d56db1cb0334092a7542dd3fd74": "4b246ca8ad5b03c0736a16d2d037498c",
".git/objects/6b/6e7776930c6474c374bf09a1135a1ab4a2b63a": "3ff7c355a3b010f22d26634ca96545a8",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/eb98e9b7b78c50d5e59d782ef3190c11f90ad2": "b4763a9389b518f09e8d8a8c31fa1c3a",
".git/objects/6d/3ce6b8cd0066a725cdbf9b5b96a9ac6a68ee69": "7dac67051484aa01e269163c9dc8acac",
".git/objects/6e/22595bcb20eda14977a92b869071f9db1ffe0e": "ab539f0ff0a07885caa92fa03c363e13",
".git/objects/6f/45a28f826d8eedfeaa36f3686620c1f3b88776": "0f7ffb806aafc79a7106f74de59e0106",
".git/objects/6f/6937faa13b4c872aa89490954fb179bdb37612": "0104fd7c3577bc70a749793ac464312e",
".git/objects/73/7f6cfbfca508d97ef3f7de001edcf2517d0212": "03fc35536a6aaf6750c8f0ba7f2abbc0",
".git/objects/74/5f6d416bb4a636867a15820da76fcf072ff385": "8ac04db949f5dbee127ee5889ad010bd",
".git/objects/74/80f402aedc5c5a08f36aee4f9f6949ab895b9d": "846c18479d0779c3838f46cd4a54fe59",
".git/objects/74/f932d332ef371c727466fda4270cf6c68ea0d1": "598c4bea196935b03a1549b4db09c0f6",
".git/objects/75/64541d6f3379f42ce9ce831052034d4e7c3b1d": "b3f8e91f584277a0aee5c33c4202f77f",
".git/objects/75/f2ba5d40c55a8b5779f37a26fac4bda28aab0a": "0dc4b905364ce40198d88c2834699884",
".git/objects/77/17f0ccbd07daa5ee55231f36df2a03f8f133b1": "93a4f1c6a0d20c7453d9438187188008",
".git/objects/79/2bd495e9aa18b96dd0d9a073c488387faef808": "931644fb2634b5c63ae32a86410239ec",
".git/objects/79/e767cb285a15b57650615a82b97db4c91c91b9": "1ad163d27b4870ef0d4168a287c1cba7",
".git/objects/7a/539b877395f2678c4f6357b0873eda7ca8326e": "3dd4b79bae283925ee01446b8b5ef68b",
".git/objects/7a/5a277f00fc042c8b4972867b8c9e06d09659c9": "9ed9cfad37b6bd4cfe66e1aeb7e6157d",
".git/objects/7a/91413424b07557176bae0409f5ec0f2b5aeda7": "f4bf6d5b19fe7bda7f4f016a1c5eaeb2",
".git/objects/7a/cd99f5b039f546fa8fbb25f16bef37fd60311f": "fefd572b3f63894dd4efb79f32599958",
".git/objects/7b/b8f12af4cf860f4c777726fbdec174c1f11833": "d35ea72d343db45ca7421144ae8221ed",
".git/objects/7c/88263245d60ac21e2e1f57e194375ac9b4807b": "9cfc696eb7568805ed74209dbf6efc95",
".git/objects/7c/e95e3d05e64353e90846e763090ce5163e7822": "cdc991b90a2a8a3632b738bebc186a4e",
".git/objects/7d/fc96e580f988d0896b1f20e46746632e1ee3cf": "da4d03d726bdfd728762bbd3bce82257",
".git/objects/7f/5057e142cc7b4d5a4f353359717354997e7da6": "13510869c65f604f125f93d22df171e4",
".git/objects/7f/a21bb165ebfb94bffb067654c4e7a9002870c7": "93c5df8b6de5827f51c74bb6215f3a69",
".git/objects/80/527658026d4be6c7e4b0697178c34aa6705e3a": "eb4d2cd1b1fb10a6e43f031cc056ca6e",
".git/objects/81/66cd47cbdd18cbd7703b0d5af1456b485054d7": "08eb14a0ee2f1d3da97a145100bf0013",
".git/objects/82/3ca40e4115ecb41aa06d89599c43333efd1712": "51587b74da9803692cde8f993958f945",
".git/objects/82/a172a5fdb07b43676c558a2abc5c6faa7773af": "3837588f1d66c217316d60d9b3f22c89",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/954402609cfecb9443465e207651ba07e6a84b": "b107deaec89c871984c5f3f19099acaf",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/834a1c37528dc321958613070b93012007f798": "4c76f63f25477d1ce6e581c1edaf777c",
".git/objects/86/3249a8bb912666ad8799d14f8df521a2f16897": "cd64914d9e5e5694c1518b26f57b8ddc",
".git/objects/86/4a877973bf444a53321dc98050e163fd86eb4a": "140e48ec7d59e6886bebe557d2498224",
".git/objects/87/71cb0581de48ca46ee4789c2744bd163240ac1": "ad19128461986f3b3fae6fd528a7870f",
".git/objects/88/bc275eb5866a934a7c0d4040301a437e510a93": "b008ecd3711ecf245e7eaa989c019172",
".git/objects/88/cbb2ade75ab1572b4401d0f74e023e9c992254": "fba8102b067534f64c499d81ca6097d6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/95711559c2d431811528fd538037904b8661ce": "16cea3dddb96c8fe01b2147c88650e71",
".git/objects/8a/2f7d277b0483902a5b00921a23f25cf035641c": "ba41ee60a2215fe5071f728f73eed838",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/481310c5f51c9750a7e699047841b46173602b": "34fd9619f55a9ff2cf28f150d06e289a",
".git/objects/8c/dcf0c5e701b8740468fddadca20931283b8d52": "d3a2eba30448e5fbd699b22e0dee3d07",
".git/objects/8f/b7a6037279aa4af5151d87ee8cf2c5c95ebb0f": "46df1b97363e4d1fe6f14a4f5c104976",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/d499cc424bb3b4fd64ad5bafc951a9654f4ea3": "f1470adf855a1bf79189721cd7ee5ba3",
".git/objects/90/f080cd37b2a4cbd5d425c847d7c7fa21f5a78e": "e95aa07869a862b399c6273574678b5f",
".git/objects/91/463f2eac210cc7238642dd4af92e6186bd0324": "1bf6e0ba6894ea4fa515d0941c34014c",
".git/objects/91/522fdfd98ec409af0efd57f5f39795571eb5a4": "7659e29196677d6c07cd327c53f20190",
".git/objects/91/e216b90f79c7eaaea0832efc79d35dbde57eb8": "116f3a9b9a048cca94c9b95e70fcd8ef",
".git/objects/92/f234ec163aa9124bd29f5d116f578821304ff5": "4ff24042e23620b690acde03a3469d9d",
".git/objects/92/fd8cce45198257b7d2c921c273a775b51be7c2": "74eef0193b0f328927df413551a34d0f",
".git/objects/94/6dd5ed0b28b7e9bbe7fda03e0f7a49778fc885": "4d84ba3ccbdac3a78f32d47ba4e3ce78",
".git/objects/94/85717f342397ae3d02c42e901cc33296ba0ef7": "5ead17a8ca1350a5570ed60aa9573aed",
".git/objects/95/615c7a37d7899e67dbb5306b17dbbe243e0c20": "13254f916ed362132f2aae552ad9ebf9",
".git/objects/96/65d2cfcf7f4d2457ad555903233bce4fb756c6": "8b71108a665da977236c2d8a4d70a586",
".git/objects/97/0c42707f6159a2cb5b2bca67a950a155380509": "c513b4a3d994acb62f650c9ac87d9fae",
".git/objects/97/47784ff7bd967f99b8cdf4a99b0e94efab81b7": "e1e975ea7ea61cd06cc9110212dd92ac",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/8a6e8bfe43a1b21bc4fb44b7b4a80a47a3bed9": "bf494c959a6f019ecf8c5b0325f54cc0",
".git/objects/98/9a1941d25d8c2dc7de4d543e7c9d7a5111956d": "e9666c45607324d50132e570853b037b",
".git/objects/99/77ed940474657e4c2e38f0de1b1407f0be01f2": "b772d1954ef53af4cc3ba35b04c206b3",
".git/objects/9b/002eed0a714713d2f3144ec5566b04db952705": "51711b64ef17ea17e1f4d7d6aa97251e",
".git/objects/9c/d623352f437fbef376d6a97919958f1583e313": "90d5e3c9f28a4959980f341ff0ff923b",
".git/objects/9c/edb56eb584b514c4e3d39965b4f0273b957974": "05ea56c06533b599dd25a22648659215",
".git/objects/9d/eec6e7ca07ce8cef068acd068b727888309e07": "df8a4acee74c9c279be5d34c13ec5207",
".git/objects/a1/b7adb5f2bbdec9fb7a1c82005e390b4c9c1f9a": "a5d27cf0f708eb9df8c5bec51705ccc6",
".git/objects/a3/d6500b3499ccb7598143c50b375d76d90e2a5f": "d198e810617167caa35084067ba690e9",
".git/objects/a4/ea1f665bd62a523b88ff848f5edf193737fbc5": "ccfbd02b204ab5ad02fdb765baebd21a",
".git/objects/a6/5c6c1ae1fec4ca5105da2299e382b121c6586c": "9087e49286fe6c58d1ef8dc3849157e6",
".git/objects/a6/6858d9a980f2b1849a9b106c2ac1083d6f8a3d": "63d19f9871687ab190bb54f0de71257f",
".git/objects/a6/eddb2e220f82076414a76a3aa2e3fcd8dbd695": "f032739d4774e3270e9ba71a4964bb19",
".git/objects/a7/e9346b0a15895fa5b9e39851fe6ea9def146df": "3b479045abbe169e08ed29df86f296eb",
".git/objects/a7/facc954f06fd25ebc3fdf80eff46f9850460dd": "37eee021316496b3e07dff4f5a22a365",
".git/objects/a8/585dba544592ef8ba6b8f9f31560f2f2dd5c84": "24bb86fd9169c9993da34cee052d8fad",
".git/objects/a8/977f9bc5e9e8abbd5acc902f788d36156442ce": "c23aebecf8032c731b49d25c28cba72c",
".git/objects/a9/d5957088b5383eaad82f3277803c680a17a959": "ab62d9e16b13feb518b631080b4249e5",
".git/objects/aa/3b86d8cfeba6df0e9e307eb036baf48c21041b": "d63319ff2d313e5b70ec81233f0b07e0",
".git/objects/aa/97fd2643144126fca9d7dbd7b99c5e1f016cb5": "bc8692505257fc219b573140b67bc46d",
".git/objects/ab/beb0a4a86e8b59371edc6a3f2bdcf9d1f4b76e": "6914ed607c873a9ecd37d29a6ab0da46",
".git/objects/ac/b63bdbf4acdf43b7fd243efe365e9f741c2623": "bb6b65b8822b16c358943fe41f8d2b3a",
".git/objects/ac/ec19a1e3c66fc28754e9e0d32d4266e1ce3713": "90a28be338a8ad7dfabaafe4698f8d57",
".git/objects/ad/a3a18a00294a7c9e255772aaad7ce974cd35cd": "e62bda16942d465bfde42840cf082b45",
".git/objects/ad/ce0a146d98586c895384e3995947c23c279184": "f659e5111c2b1853f55b541827ac3a78",
".git/objects/ad/e277d8d52d9089b5b61b34ab07baf1806864a8": "ba1725d7338242fbafdb82b5643ae716",
".git/objects/ae/c3e4459466b07a929a8705393aa2ec809ade59": "754444efe9b7e06c2334995757b1e188",
".git/objects/af/7e763c2fdca904d1d693deed5aff4cfbc59ae7": "50976e36606c1250690db9d53fcf349f",
".git/objects/af/acafd1bb35d910f4b79f90991f9b6e70a72812": "3ea11a69f1d16b92853bfac661b7b72f",
".git/objects/af/bd14f452ab48d587485cfc56fcead6c92deba7": "a070491cdcc1a1eb616698342073c048",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b4/f15e011674c26543d90de6e2a6042be03396f5": "0518393b5e7997467394861903736d1d",
".git/objects/b5/7567155e00434fface061a2aafcd1d0ae9b34b": "0e6f926fb2033976f1c06d82831801ef",
".git/objects/b5/aacd769d506c387fa547e85970101ade805e3a": "b05226cc5060ca3fc09d66016b806d9d",
".git/objects/b6/03d5815d0fd932620535a7d5d6e7f9a9fa1cf7": "1fda488d6b40df5704a8aaed4f153068",
".git/objects/b6/61e956d0381bbc3ae6173ff20711ba9394ee50": "e3525952a07ded102b8e9d3031d03333",
".git/objects/b6/e95dc42c18503986ffd04425c9fe9ed65739ec": "8c6d700973cfb2eee28076a69a544d7f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/3412b1d3c2a3bdec521cd89a9d5024be70cdf2": "6fb448e8aa410dc8bafae79a2300a968",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/5461eb3d48db28f62482480412d891db4ac969": "f6d85744ce118d0ec33834fc5996581d",
".git/objects/ba/62a549c96ce04dc81123fce251da4888bf142e": "a9b0f7743106f185a249a4a546f81b90",
".git/objects/ba/7445dc58918ca2b5566323cee53de2c5491841": "8a9e4b09087233324cb18c83931dc1e6",
".git/objects/bc/718616b900059b944350d65531fa13f762f8b1": "5ab1e18023568352a0f5f9d7d4ad441c",
".git/objects/bd/e7004d92807154ad8007694d7aecd5f804f80e": "dd232eafe36b323508f8ebf96190e0a2",
".git/objects/be/18851497c5953771511c355e37f5c4bd1038c3": "3925607331fcdd3308e052966ef27167",
".git/objects/bf/0a06286874446a8c5e5c9f1665a39ec53235fc": "46b5a4517452117e7ba150d6e7b55173",
".git/objects/bf/d614d504b426f0129c43687071d9fcf3bfe450": "c893b6aa78f243f171c1c8c947570a86",
".git/objects/c0/cfc78ea382319d3669da9782c5cd7e331a3f1b": "45bcf96ccd8018daa73a523a69c52fc5",
".git/objects/c0/f3e0cfa1e41ae360f509997629756a9226ccdf": "701cca0e9a48d8e74ac3a250e42c7aca",
".git/objects/c2/07ea6fdee96904dc19eabce13505397d1b07b8": "77616e2cfaa247c715d1adbe8d8b73f4",
".git/objects/c2/f1d7b83f0602e8d189f68bbb97e89c4251c011": "608b1fbe7c3807776fb0f64007236572",
".git/objects/c4/19524d33687db604bc986e3e845dedab874dca": "ddcdee5b650d1c5d59e8720fda46dd4e",
".git/objects/c5/62cfd7438832f29995222f17a0630cbbbdec73": "f0aff14acbc65ff475af20e7b4026488",
".git/objects/c5/e8e5ace8f98c9d3826f248d260c01a48f71a62": "c8706465925bbf620e86ae79f05dc810",
".git/objects/c6/94168dee4555e333bdd0889be2f237ba37d3f2": "6bc5defb5322164df9cfa39a162db9d8",
".git/objects/c6/f08a33435c9405cbe39698760ccee10dda93fe": "ed0edf7c3748dbdffdb5a3122d91a3a1",
".git/objects/c8/0259b5fc9fae35c9bbdf57f7f6ebca532178a7": "a18308fd63402205f3f226db0c5efb3b",
".git/objects/c8/bc5fcb3602686791d4b8e197714e4ca3d85200": "62604a06f20e56ab1d4559ed7bde64df",
".git/objects/c9/eefdf60132f5856e068af72510a33c438c0bbd": "ea1e191df0850fc8233be30fed084415",
".git/objects/ca/a14cb37c5c531f6b72e4b7312c860117f3a418": "48ad87294b7035aa6398b70f4a22b639",
".git/objects/cb/eb9a56d393473becd448ec4fc1d1504937d805": "effbff77a6b4218a0ad8f5e8cf96f142",
".git/objects/ce/10349b68c482a3500ad12d23748b4b6b4fd82c": "2977733b8982ac27e3dfedc484691d2a",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/44820ff3d32fb63be854d59b1ccd091cebdd6c": "ad487540e6fab935f6c25f1cac9de0c4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/955f92aa9687b82115cc284a5c69c93450a27a": "0191e6aacaba16434f2c4a997537fbd2",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/a5a5cc3ceb5c2906c86a46e12b842994b0f074": "c67cfdcfbdd6c12640425d96bef5ba1e",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/2c36892dacf56c7a4067ca2f2f268a3821461f": "2ecff61e82efa820b3109d2cc6cee5aa",
".git/objects/dc/3f7dc8017348ea4c048e513909b9d9fb46b1eb": "089843359be95a9f4876e339a17bed4b",
".git/objects/dc/4d2d7a3f9a927fb564311d0a34c30ac2190332": "8ad150fa819b4c22c0dcdbca30c1c10b",
".git/objects/dd/260a158f151cde9ab36b9cd3c888e3ee88ebfe": "17ac1747270023c2a016c51629417bb3",
".git/objects/dd/de055d29da8972e28f9cf2e8f638efaa217b02": "f90a7f4956e26e83fda44c180c66652e",
".git/objects/df/1c6eb7ff7199e7c5569a36a002866227829fec": "2ab6953db9c1843582fae08d4ea8fd88",
".git/objects/df/fc337f53b4593e4aabf4dff882b10f7ad6c117": "746de5b2b05275d7db1cee3407a91b42",
".git/objects/e1/7f24e63e48decff99608bf33e8fed962e9c379": "97eb2e6ea7981ad06cd31948f4988931",
".git/objects/e2/06ef9f6f9893f23ff2f08739655dd6d06b8b20": "6990ee2aeb079231fcf200b10b488612",
".git/objects/e3/722eb134adc9254f09e55ff084c97bd4c74752": "5406b1eb02f5067e388d58b0ea673a8b",
".git/objects/e3/a49dfe125d1ed844df3e63ead289b7f1a4baaf": "552238ec714ac17ef4314a82d3e67fa2",
".git/objects/e3/af8c96e0098ac418f1ddc11f942f988f563605": "f6181407f449fba7b516dc28b1747e18",
".git/objects/e5/191c2d9a77a4c8b2bb40b3ac61c98fdd11e012": "821a397e2090b87bb8620863a15eaf04",
".git/objects/e6/235d1580af6cb8d773f9818c8b1185380440d1": "e50180b8477e3e00da9e07557523557e",
".git/objects/e6/f3cf42ec1bccf9a6dfc8fc1e7524f44775a32f": "54d19bcf57b306b47b58d54fb336792b",
".git/objects/e9/06955deebea81fa2f596b87ec62f7c631d9aed": "4d50ecdd830b8357a9a55f83ce1d8262",
".git/objects/e9/7a635013a77180311d355888abb222ca5fb696": "aa21e4fe277f48bf2a7fac0f7bbf04c0",
".git/objects/ea/862f1b5f5253e56b13eb4b934f4f3bda3c8f4d": "9e7e4087f2109c692575099307c47242",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a7cbdbe9032e47e8917c2aa33ffb3b9ba1d9ce": "057abbb0f4108add39c14f35eb62f93e",
".git/objects/ed/a26f59c585acbaa33e3f932116247621a17a8f": "ee761c47fc4bb819b47258dd57b87112",
".git/objects/ed/bd2e0936a27943aa8609e4ae6a7a50c39e9dbf": "df7b4ccbadf75177c9529e326ce5cdfd",
".git/objects/ee/17db7bfbfe0871da8e809b1910a73f58af8ca6": "6d522ca87b03be99176e6596bde70f32",
".git/objects/ee/2b7f5a0f201b13a3f6efa59d7fe04455e2e713": "2d6d1aaaf496949efcbbf1ba6cc0a709",
".git/objects/ee/3fefd170e257b97f09103ba20aea43d51b7552": "19bd945d95194461cfc80c7f44841be2",
".git/objects/ef/07b461b88a06e793b24e835f0fd0695d3c867e": "fc04bf9b0f055d3a74fdee3d21e7283d",
".git/objects/ef/17806b6db3ee94a42526029b4d956dada1cd04": "fbc7a01814fa83aef4979c87f9a879b0",
".git/objects/ef/719333aa2ed8db71bba5610953c89e106e8343": "c662fe0c84a8203db20ca5eb36e6ef72",
".git/objects/f0/272a5aca71bb8ac7243ee54051483a89c202d4": "97c20044497d462a106e1efce4d0425b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/a8278740fef0b82ee6f790aee14eab945b9e0e": "f1bf3ce1e9f073703d9296d39420543b",
".git/objects/f2/c50f883ec19d33f8bec0040f07622b6b06dff2": "d05e6bf138a28051e31733c3b5b96fcb",
".git/objects/f2/e26e071847a309654d61bba3617af007e6185b": "11c530e1d6d0e8f1d5e316dc6335e785",
".git/objects/f3/ef4cf6575a0cc9117ccaef0a84e9168e563f39": "a141a939956e11a03fee33118b24eb15",
".git/objects/f4/0100c111f990dd95c5750ff6b5d32b947648ce": "ffd1fb8933025dc17806056a20767c74",
".git/objects/f4/3e4dbdfb4a1189fa28be1ba6ef71a5537f46db": "166c2eda091a86e0614553cc40d93b86",
".git/objects/f4/70acfc05bc4716bf0009195d64b8619bc9111e": "a049f754c59bc7724e3d663f43aceeb4",
".git/objects/f5/ae6371f6751dbdb419e8e5dfa7d9e4a0f0c113": "c0ee0f3ca67deac4b57b723d73c8b841",
".git/objects/f6/c00b9efff6ee2c4eba2402191e24e7f70c5f30": "215efd6a3e5906e45fedae822f225b65",
".git/objects/f6/f5b60f7727b97c9e6a60c01565e9f14067ed65": "3de4d352ada31fa3671c925e9db7ba6a",
".git/objects/f7/6e766313d7d85968c0323ab397ff326183eec0": "b2cdd670992baeea7aef97a7eb3476ac",
".git/objects/fc/509349a2146171ef5eea6667865ed5053ee87a": "d9534d1a8d4f6e9728f59c34bf53f827",
".git/objects/fc/acbaf902dd67a8677d7d9dbaf5b2fc832d52e9": "cf841aebe2bb3341eca98d4b6528c855",
".git/ORIG_HEAD": "2b5cc19edce88e21f8927d04ee19319d",
".git/REBASE_HEAD": "2b5cc19edce88e21f8927d04ee19319d",
".git/refs/heads/main": "85cdbf305fcb2cda18e54b2895b151f5",
".git/refs/remotes/origin/main": "85cdbf305fcb2cda18e54b2895b151f5",
"assets/AssetManifest.bin": "41820e97ad8f41730f7517083232fa80",
"assets/AssetManifest.bin.json": "b1a1edeac0afb43bbacbcf9d22a3e191",
"assets/AssetManifest.json": "556e2004723f0fc0ac4bce8db21b515c",
"assets/assets/audio_bullshit.mp3": "a8e744f7d4ef70cd8e21a5ab44841b0f",
"assets/assets/audio_difichento.mp3": "0e626f24b9738c46fa6ea00b745329cf",
"assets/assets/audio_jingle_bells.mp3": "7e7c8728e923a8fad954c3e91cdb2467",
"assets/assets/audio_rot_kazino.mp3": "d90af331654be24d9f7a50d682e82fec",
"assets/assets/audio_ti_bredish.mp3": "b687fb029e6f10e4441efd0122b21981",
"assets/assets/audio_ti_kto_takoi.mp3": "4237c9bb245b759ca4aa52c7c9b84ae4",
"assets/assets/audio_tvoi_rot.mp3": "8e4fe67c5580fa32c90499078e5d4602",
"assets/assets/audio_v_drugom_poradke.mp3": "54a9b50a138f14a8ea85ba767a3f93c6",
"assets/assets/images/background_hd4.jpg": "77acb4c3ec375b421f800bfc5e13d48e",
"assets/assets/images/candy.png": "20fa5dfc43260a408a6657a199f88e5e",
"assets/assets/images/game_background_winter.jpg": "5a70cf4304fe6441e369346ba918f100",
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
"assets/assets/images/snowflake.png": "5242c9ae44d5b28a514e3d3842f3763c",
"assets/assets/images/the_island.jpg": "0966b13d166a887100181d3332256bc8",
"assets/assets/images/wheel_icon2.png": "dd7acfcf95b68e82f49917dae241bb07",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7ad08c2b0805de6cd4de5323e82bfa4f",
"assets/NOTICES": "9d67b3a7048ba1f2681ca05d50d83ef9",
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
"flutter_bootstrap.js": "21c4c11c7208ec72b7321f78143ccc7a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e6e6fdf468cff5e291058ea84b397c2",
"/": "2e6e6fdf468cff5e291058ea84b397c2",
"main.dart.js": "37b0d344b0f686545f36d6c19dd87790",
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
