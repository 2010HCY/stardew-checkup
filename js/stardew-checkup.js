const Translate = new Map([
	//NPC
	["Alex", '亚历克斯'],
	["Elliott", '艾利欧特'],
	["Harvey", '哈维'],
	["Sam", '山姆'],
	["Sebastian", '塞巴斯蒂安'],
	["Shane", '谢恩'],
	["Abigail", '阿比盖尔'],
	["Emily", '艾米丽'],
	["Haley", '海莉'],
	["Leah", '莉亚'],
	["Maru", '玛鲁'],
	["Penny", '潘妮'],
	["Caroline", '卡洛琳'],
	["Clint", '克林特'],
	["Demetrius", '德米特里厄斯'],
	["Evelyn", '艾芙琳'],
	["George", '乔治'],
	["Gil", '吉尔'],
	["Gunther", '冈瑟'],
	["Gus", '格斯'],
	["Jas", '贾斯'],
	["Jodi", '乔迪'],
	["Kent", '肯特'],
	["Lewis", '刘易斯'],
	["Linus", '莱纳斯'],
	["Marlon", '马龙'],
	["Marnie", '玛妮'],
	["Morris", '莫里斯'],
	["Pam", '潘姆'],
	["Pierre", '皮埃尔'],
	["Robin", '罗宾'],
	["Vincent", '文森特'],
	["Willy", '威利'],
	["Birdie", '贝啼'],
	["Bouncer", '赌场门卫'],
	["Dwarf", '矮人'],
	["Governor", '州长'],
	["Grandpa", '爷爷'],
	["Henchman", '哥布林门卫'],
	["Junimos", '祝尼魔'],
	["Krobus", '科罗布斯'],
	["Leo", '雷欧'],
	["Mr.Qi", '齐先生'],
	["OldMariner", '老水手'],
	["ProfessorSnail", '蜗牛教授'],
	["Sandy", '桑迪'],
	["Wizard", '法师'],
	//食谱
	["Moss Soup", '苔藓汤'],
	["Fried Egg", '煎鸡蛋'],
	["Omelet", '煎蛋卷'],
	["Salad", '沙拉'],
	["Cheese Cauliflower", '乳酪花椰菜'],
	["Baked Fish", '烤鱼'],
	["Parsnip Soup", '防风草汤'],
	["Vegetable Medley", '蔬菜杂烩'],
	["Complete Breakfast", '完美早餐'],
	["Fried Calamari", '炸鱿鱼'],
	["Strange Bun", '奇怪的小面包'],
	["Lucky Lunch", '幸运午餐'],
	["Fried Mushroom", '炒蘑菇'],
	["Pizza", '披萨'],
	["Bean Hotpot", '豆类火锅'],
	["Glazed Yams", '琉璃山药'],
	["Carp Surprise", '惊喜鲤鱼'],
	["Hashbrowns", '薯饼'],
	["Pancakes", '薄煎饼'],
	["Salmon Dinner", '鲑鱼晚餐'],
	["Fish Taco", '鱼肉卷'],
	["Crispy Bass", '香酥鲈鱼'],
	["Pepper Poppers", '爆炒青椒'],
	["Bread", '面包'],
	["Tom Kha Soup", '椰汁汤'],
	["Trout Soup", '鳟鱼汤'],
	["Chocolate Cake", '巧克力蛋糕'],
	["Pink Cake", '粉红蛋糕'],
	["Rhubarb Pie", '大黄派'],
	["Cookie", '饼干'],
	["Spaghetti", '意大利面'],
	["Fried Eel", '炒鳗鱼'],
	["Spicy Eel", '香辣鳗鱼'],
	["Sashimi", '生鱼片'],
	["Maki Roll", '生鱼寿司'],
	["Tortilla", '墨西哥薄饼'],
	["Red Plate", '红之盛宴'],
	["Eggplant Parmesan", '帕尔玛奶酪茄子'],
	["Rice Pudding", '大米布丁'],
	["Ice Cream", '冰淇淋'],
	["Blueberry Tart", '蓝莓千层酥'],
	["Autumn's Bounty", '秋日恩赐'],
	["Pumpkin Soup", '南瓜汤'],
	["Super Meal", '巨无霸餐'],
	["Cranberry Sauce", '红莓酱'],
	["Stuffing", '塞料面包'],
	["Farmer's Lunch", '农夫午餐'],
	["Survival Burger", '救生汉堡'],
	["Dish O' The Sea", '海之菜肴'],
	["Miner's Treat", '矿工特供'],
	["Roots Platter", '块茎拼盘'],
	["Algae Soup", '海藻汤'],
	["Pale Broth", '清汤'],
	["Plum Pudding", '葡萄干布丁'],
	["Artichoke Dip", '水煮洋蓟'],
	["Stir Fry", '蔬菜什锦盖饭'],
	["Roasted Hazelnuts", '烤榛子'],
	["Pumpkin Pie", '南瓜派'],
	["Radish Salad", '萝卜沙拉'],
	["Fruit Salad", '水果沙拉'],
	["Blackberry Cobbler", '黑莓脆皮饼'],
	["Cranberry Candy", '蔓越莓糖果'],
	["Bruschetta", '意式烤面包'],
	["Coleslaw", '卷心菜沙拉'],
	["Fiddlehead Risotto", '意式蕨菜炖饭'],
	["Poppyseed Muffin", '虞美人籽松糕'],
	["Chowder", '海鲜杂烩汤'],
	["Fish Stew", '烩鱼汤'],
	["Escargot", '法式田螺'],
	["Lobster Bisque", '龙虾浓汤'],
	["Maple Bar", '枫糖棒'],
	["Crab Cakes", '蟹黄糕'],
	["Shrimp Cocktail", '虾鸡尾酒'],
	["Triple Shot Espresso", '三倍浓缩咖啡'],
	["Seafoam Pudding", '海泡布丁'],
	["Ginger Ale", '姜汁汽水'],
	["Banana Pudding", '香蕉布丁'],
	["Mango Sticky Rice", '芒果糯米饭'],
	["Poi", '夏威夷芋泥'],
	["Tropical Curry", '热带咖喱'],
	["Squid Ink Ravioli", '墨汁意大利饺'],
	//项目
	["About", '关于'],
	["Choose Save File", '选择存档文件'],
	["Result", '结果'],
	["Summary", '摘要'],
	["Money", '总收入'],
	["Skills", '技能'],
	["Skill Mastery", '技能精通'],
	["Quests", '任务'],
	["Special Orders", '特别任务'],
	["Monster Hunting", '消灭怪物的目标'],
	["Stardrops", '星之果实'],
	["Home and Family", '房子和家庭'],
	["Social", '社交'],
	["Cooking", '烹饪'],
	["Crafting", '制造'],
	["Fishing", '钓鱼'],
	["Basic Shipping", '基础出货'],
	["Crop Shipping", '作物出货'],
	["Books, Special Items &amp; Powers", '书，特殊物品 & 力量'],
	["Museum Collection", '博物馆捐赠'],
	["Secret Notes", '秘密纸条'],
	["Journal Scraps", '日记残页'],
	["Community Center / Joja Community Development", '社区献祭/Joja捐赠'],
	["Forest Neighbors", '森林中的邻居'],
	["Grandpa's Evaluation", '爷爷的评价'],
	["Golden Walnuts", '金核桃'],
	["Island Upgrades", '姜岛建筑解锁'],
	["Perfection Tracker", '完美度统计'],
	["Arcade Games", '街机游戏'],
	["Animal Summary", '动物总结'],
	//季节
	["Spring", '春季'],
	["Summer", '夏季'],
	["Fall", '秋季'],
	["Winter", '冬季'],
	//制造
	["Text Sign", '文字标牌'],
	["Anvil", '铁砧'],
	["Bait Maker", '鱼饵制造机'],
	["Big Chest", '大箱子'],
	["Big Stone Chest", '石制大箱子'],
	["Blue Grass Starter", '蓝色草籽'],
	["Challenge Bait", '挑战鱼饵'],
	["Dehydrator", '烘干机'],
	["Deluxe Bait", '高级鱼饵'],
	["Deluxe Worm Bin", '高级虫饵盒'],
	["Fish Smoker", '熏鱼机'],
	["Heavy Furnace", '重型熔炉'],
	["Mini-Forge", '迷你锻造台'],
	["Mushroom Log", '蘑菇树桩'],
	["Mystic Tree Seed", '神秘树种'],
	["Sonar Bobber", '声呐浮标'],
	["Statue Of Blessings", '祝福雕像'],
	["Statue Of The Dwarf King", '矮人王雕像'],
	["Tent Kit", '便携帐篷'],
	["Treasure Totem", '宝藏图腾'],
	["Cherry Bomb", '樱桃炸弹'],
	["Bomb", '炸弹'],
	["Mega Bomb", '超级炸弹'],
	["Gate", '大门'],
	["Wood Fence", '木围栏'],
	["Stone Fence", '石围栏'],
	["Iron Fence", '铁围栏'],
	["Hardwood Fence", '硬木围栏'],
	["Sprinkler", '洒水器'],
	["Quality Sprinkler", '优质洒水器'],
	["Iridium Sprinkler", '铱制洒水器'],
	["Mayonnaise Machine", '蛋黄酱机'],
	["Bee House", '蜂房'],
	["Preserves Jar", '罐头瓶'],
	["Cheese Press", '压酪机'],
	["Loom", '织布机'],
	["Keg", '小桶'],
	["Oil Maker", '产油机'],
	["Cask", '木桶'],
	["Basic Fertilizer", '初级肥料'],
	["Quality Fertilizer", '高级肥料'],
	["Speed-Gro", '生长激素'],
	["Deluxe Speed-Gro", '高级生长激素'],
	["Basic Retaining Soil", '初级保湿土壤'],
	["Quality Retaining Soil", '高级保湿土壤'],
	["Wild Seeds (Sp)", '春季种子'],
	["Wild Seeds (Su)", '夏季种子'],
	["Wild Seeds (Fa)", '秋季种子'],
	["Wild Seeds (Wi)", '冬季种子'],
	["Ancient Seeds", '上古种子'],
	["Wood Floor", '木地板'],
	["Straw Floor", '稻草地板'],
	["Weathered Floor", '风化地板'],
	["Crystal Floor", '水晶地板'],
	["Stone Floor", '石头地板'],
	["Wood Path", '木头小径'],
	["Gravel Path", '砾石小径'],
	["Cobblestone Path", '鹅卵石小径'],
	["Stepping Stone Path", '垫脚石小径'],
	["Crystal Path", '水晶小径'],
	["Spinner", '旋式鱼饵'],
	["Trap Bobber", '陷阱浮标'],
	["Cork Bobber", '软木塞浮标'],
	["Treasure Hunter", '寻宝者'],
	["Dressed Spinner", '精装旋式鱼饵'],
	["Barbed Hook", '倒刺钩'],
	["Magnet", '磁铁'],
	["Bait", '鱼饵'],
	["Wild Bait", '万能鱼饵'],
	["Crab Pot", '蟹笼'],
	["Sturdy Ring", '结实戒指'],
	["Warrior Ring", '战士戒指'],
	["Ring of Yoba", '由巴的戒指'],
	["Iridium Band", '铱环'],
	["Field Snack", '工作小食'],
	["Life Elixir", '生命药水'],
	["Oil of Garlic", '葱油'],
	["Torch", '火把'],
	["Campfire", '篝火'],
	["Wooden Brazier", '木头火炬'],
	["Stone Brazier", '石头火炬'],
	["Gold Brazier", '金制火炬'],
	["Carved Brazier", '镂空火炬'],
	["Stump Brazier", '树桩火炬'],
	["Barrel Brazier", '木桶火炬'],
	["Skull Brazier", '骷髅火炬'],
	["Marble Brazier", '大理石火炬'],
	["Wood Lamp-post", '木灯柱'],
	["Iron Lamp-post", '铁灯柱'],
	["Jack-O-Lantern", '南瓜灯'],
	["Chest", '宝箱'],
	["Furnace", '熔炉'],
	["Scarecrow", '稻草人'],
	["Seed Maker", '种子生产器'],
	["Staircase", '楼梯'],
	["Explosive Ammo", '爆炸弹丸'],
	["Transmute (Fe)", '铁锭'],
	["Transmute (Au)", '铜锭'],
	["Crystalarium", '宝石复制机'],
	["Charcoal Kiln", '煤炭窑'],
	["Lightning Rod", '避雷针'],
	["Recycling Machine", '回收机'],
	["Tapper", '树液采集器'],
	["Worm Bin", '虫饵盒'],
	["Slime Egg-Press", '史莱姆压蛋器'],
	["Slime Incubator", '史莱姆孵化器'],
	["Warp Totem: Beach", '传送图腾：海滩'],
	["Warp Totem: Mountains", '传送图腾：山岭'],
	["Warp Totem: Farm", '传送图腾：农场'],
	["Rain Totem", '雨水图腾'],
	["Tub o' Flowers", '一簇鲜花'],
	["Wicked Statue", '邪恶雕像'],
	["Flute Block", '长笛块'],
	["Drum Block", '鼓块'],
	["Wood Sign", '木牌'],
	["Stone Sign", '石牌'],
	["Garden Pot", '花盆'],
	["Brick Floor", '红砖地板'],
	["Grass Starter", '草籽'],
	["Deluxe Scarecrow", '豪华稻草人'],
	["Mini-Jukebox", '迷你点唱机'],
	["Tree Fertilizer", '树肥'],
	["Tea Sapling", '茶苗'],
	["Warp Totem: Desert", '传送图腾：沙漠'],
	["Rustic Plank Floor", '乡村木地板'],
	["Stone Walkway Floor", '石制走道地板'],
	["Fairy Dust", '仙尘'],
	["Bug Steak", '虫肉块'],
	["Dark Sign", '深色牌子'],
	["Quality Bobber", '优质浮标'],
	["Stone Chest", '石箱'],
	["Monster Musk", '怪兽香水'],
	["Mini-Obelisk", '迷你图特尖塔'],
	["Farm Computer", '农场电脑'],
	["Ostrich Incubator", '鸵鸟孵化器'],
	["Geode Crusher", '晶球破开器'],
	["Fiber Seeds", '纤维种子'],
	["Solar Panel", '太阳能板'],
	["Bone Mill", '碎骨机'],
	["Warp Totem: Island", '传送图腾：姜岛'],
	["Thorns Ring", '荆棘戒指'],
	["Glowstone Ring", '辉石戒指'],
	["Heavy Tapper", '重型树液采集器'],
	["Hopper", '加料器'],
	["Magic Bait", '魔法鱼饵'],
	["Hyper Speed-Gro", '顶级生长激素'],
	["Deluxe Fertilizer", '顶级肥料'],
	["Deluxe Retaining Soil", '顶级保湿土壤'],
	["Cookout Kit", '野炊工具'],
	["Wedding Ring", '结婚戒指'],
	//鱼
	["Glacierfish Jr.", '小冰川鱼'],
	["Legend II", '传说之鱼二代'],
	["Ms. Angler", '雌鮟鱇鱼'],
	["Radioactive Carp", '放射性鲤鱼'],
	["Son of Crimsonfish", '绯红鱼之子'],
	["Cave Jelly", '洞穴凝胶'],
	["Goby", '虾虎鱼'],
	["River Jelly", '河流凝胶'],
	["Sea Jelly", '海洋凝胶'],
	["Seaweed", '海藻'],
	["Green Algae", '绿藻'],
	["White Algae", '白藻'],
	["Pufferfish", '河豚'],
	["Anchovy", '鳀鱼'],
	["Tuna", '金枪鱼'],
	["Sardine", '沙丁鱼'],
	["Bream", '鲷鱼'],
	["Largemouth Bass", '大嘴鲈鱼'],
	["Smallmouth Bass", '小嘴鲈鱼'],
	["Rainbow Trout", '虹鳟鱼'],
	["Salmon", '鲑鱼'],
	["Walleye", '大眼鱼'],
	["Perch", '河鲈'],
	["Carp", '鲤鱼'],
	["Catfish", '鲶鱼'],
	["Pike", '狗鱼'],
	["Sunfish", '太阳鱼'],
	["Red Mullet", '红鲻鱼'],
	["Herring", '鲱鱼'],
	["Eel", '鳗鱼'],
	["Octopus", '章鱼'],
	["Red Snapper", '红鲷鱼'],
	["Squid", '鱿鱼'],
	["Sea Cucumber", '海参'],
	["Super Cucumber", '大海参'],
	["Ghostfish", '鬼鱼'],
	["Stonefish", '石鱼'],
	["Crimsonfish", '绯红鱼'],
	["Angler", '𩽾𩾌鱼'],
	["Ice Pip", '冰柱鱼'],
	["Lava Eel", '岩浆鳗鱼'],
	["Legend", '传说之鱼'],
	["Sandfish", '沙鱼'],
	["Scorpion Carp", '蝎鲤鱼'],
	["Mutant Carp", '变种鲤鱼'],
	["Sturgeon", '鲟鱼'],
	["Tiger Trout", '虎纹鳟鱼'],
	["Bullhead", '大头鱼'],
	["Tilapia", '罗非鱼'],
	["Chub", '鲢鱼'],
	["Dorado", '麻哈脂鲤'],
	["Albacore", '青花鱼'],
	["Shad", '西鲱'],
	["Lingcod", '蛇齿单线鱼'],
	["Halibut", '大比目鱼'],
	["Lobster", '龙虾'],
	["Crayfish", '小龙虾'],
	["Crab", '螃蟹'],
	["Cockle", '鸟蛤'],
	["Mussel", '蚌'],
	["Shrimp", '虾'],
	["Snail", '蜗牛'],
	["Periwinkle", '玉黍螺'],
	["Oyster", '牡蛎'],
	["Woodskip", '木跃鱼'],
	["Glacierfish", '冰川鱼'],
	["Void Salmon", '虚空鲑鱼'],
	["Slimejack", '史莱姆鱼'],
	["Midnight Squid", '午夜鱿鱼'],
	["Spook Fish", '幽灵鱼'],
	["Blobfish", '水滴鱼'],
	["Midnight Carp", '午夜鲤鱼'],
	["Flounder", '比目鱼'],
	["Stingray", '黄貂鱼'],
	["Lionfish", '狮子鱼'],
	["Blue Discus", '蓝铁饼鱼'],
	//出售
	["Broccoli", '西蓝花'],
	["Carrot", '胡萝卜'],
	["Dried Fruit", '水果干'],
	["Dried Mushrooms", '蘑菇干'],
	["Moss", '苔藓'],
	["Mystic Syrup", '神秘糖浆'],
	["Powdermelon", '霜瓜'],
	["Raisins", '葡萄干'],
	["Smoked Fish", '熏鱼'],
	["Summer Squash", '金皮西葫芦'],
	["Wild Horseradish", '野山葵'],
	["Daffodil", '黄水仙'],
	["Leek", '韭葱'],
	["Dandelion", '蒲公英'],
	["Parsnip", '防风草'],
	["Cave Carrot", '山洞萝卜'],
	["Coconut", '椰子'],
	["Cactus Fruit", '仙人掌果子'],
	["Sap", '树液'],
	["Large Egg (White)", '大鸡蛋（白色）'],
	["Egg (White)", '蛋（白色）'],
	["Egg (Brown)", '蛋（棕色）'],
	["Large Egg (Brown)", '大鸡蛋（棕色）'],
	["Milk", '牛奶'],
	["Large Milk", '大壶牛奶'],
	["Green Bean", '青豆'],
	["Cauliflower", '花椰菜'],
	["Potato", '土豆'],
	["Garlic", '蒜'],
	["Kale", '甘蓝菜'],
	["Rhubarb", '大黄'],
	["Melon", '甜瓜'],
	["Tomato", '西红柿'],
	["Morel", '羊肚菌'],
	["Blueberry", '蓝莓'],
	["Fiddlehead Fern", '蕨菜'],
	["Hot Pepper", '辣椒'],
	["Wheat", '小麦'],
	["Radish", '萝卜'],
	["Red Cabbage", '红叶卷心菜'],
	["Starfruit", '杨桃'],
	["Corn", '玉米'],
	["Eggplant", '茄子'],
	["Artichoke", '洋蓟'],
	["Pumpkin", '南瓜'],
	["Bok Choy", '小白菜'],
	["Yam", '山药'],
	["Chanterelle", '鸡油菌'],
	["Cranberries", '蔓越莓'],
	["Holly", '冬青树'],
	["Beet", '甜菜'],
	["Salmonberry", '美洲大树莓'],
	["Amaranth", '苋菜'],
	["Pale Ale", '淡啤酒'],
	["Hops", '啤酒花'],
	["Void Egg", '虚空蛋'],
	["Mayonnaise", '蛋黄酱'],
	["Duck Mayonnaise", '鸭蛋黄酱'],
	["Void Mayonnaise", '虚空蛋黄酱'],
	["Clay", '粘土'],
	["Copper Bar", '铜锭'],
	["Iron Bar", '铁锭'],
	["Gold Bar", '金锭'],
	["Iridium Bar", '铱锭'],
	["Refined Quartz", '精炼石英'],
	["Honey", '蜂蜜'],
	["Pickles", '腌菜'],
	["Jelly", '果酱'],
	["Beer", '啤酒'],
	["Wine", '果酒'],
	["Juice", '果汁'],
	["Clam", '蛤'],
	["Poppy", '虞美人花'],
	["Copper Ore", '铜矿石'],
	["Iron Ore", '铁矿石'],
	["Coal", '煤炭'],
	["Gold Ore", '黄金矿石'],
	["Iridium Ore", '铱矿石'],
	["Wood", '木材'],
	["Stone", '石头'],
	["Nautilus Shell", '鹦鹉螺'],
	["Coral", '珊瑚'],
	["Rainbow Shell", '彩虹贝壳'],
	["Spice Berry", '香味浆果'],
	["Sea Urchin", '海胆'],
	["Grape", '葡萄'],
	["Spring Onion", '大葱'],
	["Strawberry", '草莓'],
	["Sweet Pea", '甜豌豆'],
	["Common Mushroom", '葡萄蘑菇'],
	["Wild Plum", '野莓'],
	["Hazelnut", '榛子'],
	["Blackberry", '黑莓'],
	["Winter Root", '冬根'],
	["Crystal Fruit", '水晶果'],
	["Snow Yam", '雪山药'],
	["Sweet Gem Berry", '宝石甜莓'],
	["Crocus", '番红花'],
	["Red Mushroom", '红蘑菇'],
	["Sunflower", '向日葵'],
	["Purple Mushroom", '紫蘑菇'],
	["Cheese", '奶酪'],
	["Goat Cheese", '山羊奶酪'],
	["Cloth", '布料'],
	["Truffle", '松露'],
	["Truffle Oil", '松露油'],
	["Coffee Bean", '咖啡豆'],
	["Goat Milk", '羊奶'],
	["Large Goat Milk", '大瓶羊奶'],
	["Wool", '动物毛'],
	["Duck Egg", '鸭蛋'],
	["Duck Feather", '鸭毛'],
	["Rabbit's Foot", '兔子脚'],
	["Ancient Fruit", '上古水果'],
	["Mead", '蜜蜂酒'],
	["Tulip", '郁金香'],
	["Summer Spangle", '夏季亮片'],
	["Fairy Rose", '玫瑰仙子'],
	["Blue Jazz", '蓝爵'],
	["Apple", '苹果'],
	["Apricot", '绿茶'],
	["Orange", '橙子'],
	["Peach", '桃子'],
	["Pomegranate", '石榴'],
	["Cherry", '樱桃'],
	["Bug Meat", '虫肉'],
	["Hardwood", '硬木'],
	["Maple Syrup", '枫糖浆'],
	["Oak Resin", '橡树树脂'],
	["Pine Tar", '松焦油'],
	["Slime", '史莱姆泥'],
	["Bat Wing", '蝙蝠翅膀'],
	["Solar Essence", '太阳精华'],
	["Void Essence", '虚空精华'],
	["Fiber", '纤维'],
	["Battery Pack", '电池组'],
	["Dinosaur Mayonnaise", '恐龙蛋黄酱'],
	["Roe", '鱼籽'],
	["Caviar", '鱼籽酱'],
	["Squid Ink", '鱿鱼墨汁'],
	["Tea Leaves", '茶叶'],
	["Aged Roe", '腌鱼籽'],
	["Green Tea", '绿茶'],
	["Unmilled Rice", '未碾米'],
	["Banana", '香蕉'],
	["Ostrich Egg", '鸵鸟蛋'],
	["Ginger", '姜'],
	["Taro Root", '芋头'],
	["Pineapple", '菠萝'],
	["Mango", '芒果'],
	["Cinder Shard", '火山晶石'],
	["Magma Cap", '熔岩菇'],
	["Bone Fragment", '骨头碎片'],
	["Radioactive Ore", '放射性矿石'],
	["Radioactive Bar", '放射性锭'],
	//古物
	["Dwarf Scroll I", '矮人卷轴 I'],
	["Dwarf Scroll II", '矮人卷轴 II'],
	["Dwarf Scroll III", '矮人卷轴 III'],
	["Dwarf Scroll IV", '矮人卷轴 IV'],
	["Chipped Amphora", '有缺口的土罐'],
	["Arrowhead", '箭头'],
	["Ancient Doll", '古代玩偶'],
	["Elvish Jewelry", '精灵珠宝'],
	["Chewing Stick", '咀嚼洁齿棒'],
	["Ornamental Fan", '装饰用扇子'],
	["Dinosaur Egg", '	恐龙蛋'],
	["Rare Disc", '稀有圆盘'],
	["Ancient Sword", '古剑'],
	["Rusty Spoon", '生锈的汤匙'],
	["Rusty Spur", '生锈的靴刺'],
	["Rusty Cog", '	生锈的齿轮'],
	["Chicken Statue", '鸡雕像'],
	["Ancient Seed", '古代种子'],
	["Prehistoric Tool", '	史前工具'],
	["Dried Starfish", '	干海星'],
	["Anchor", '锚'],
	["Glass Shards", '玻璃碎片'],
	["Bone Flute", '骨笛'],
	["Prehistoric Handaxe", '史前手斧'],
	["Dwarvish Helm", '矮人头盔'],
	["Dwarf Gadget", '	矮人小工具'],
	["Ancient Drum", '古代鼓'],
	["Golden Mask", '黄金面具'],
	["Golden Relic", '黄金遗物'],
	["Strange Doll (green)", '诡异玩偶（绿）'],
	["Strange Doll (yellow)", '诡异玩偶（黄）'],
	["Prehistoric Scapula", '	史前肩胛骨'],
	["Prehistoric Tibia", '史前胫骨'],
	["Prehistoric Skull", '史前头骨'],
	["Skeletal Hand", '手部骨骼'],
	["Prehistoric Rib", '史前肋骨'],
	["Prehistoric Vertebra", '史前脊骨'],
	["Skeletal Tail", '	尾部骨骼'],
	["Nautilus Fossil", '鹦鹉螺化石'],
	["Amphibian Fossil", '	两栖动物化石'],
	["Palm Fossil", '棕榈化石'],
	["Trilobite", '三叶虫'],
	//宝石
	["Emerald", '绿宝石'],
	["Aquamarine", '	海蓝宝石'],
	["Ruby", '	红宝石'],
	["Amethyst", '紫水晶'],
	["Topaz", '黄水晶'],
	["Jade", '翡翠'],
	["Diamond", '钻石'],
	["Prismatic Shard", '五彩碎片'],
	["Quartz", '石英'],
	["Fire Quartz", '火水晶'],
	["Frozen Tear", '泪晶'],
	["Earth Crystal", '地晶'],
	["Alamite", '透闪石'],
	["Bixite", '黑方石'],
	["Baryte", '重晶石'],
	["Aerinite", '青泥石'],
	["Calcite", '方解石'],
	["Dolomite", '	白云石'],
	["Esperite", '硅钙石'],
	["Fluorapatite", '氟磷灰石'],
	["Geminite", '杰明石'],
	["Helvite", '日光榴石'],
	["Jamborite", '绿水镍矿'],
	["Jagoite", '铁铅矿'],
	["Kyanite", '蓝晶石'],
	["Lunarite", '酸性月岩'],
	["Malachite", '孔雀石'],
	["Neptunite", '柱星叶石'],
	["Lemon Stone", '柠檬石'],
	["Nekoite", '新硅钙石'],
	["Orpiment", '雌黄'],
	["Petrified Slime", '石化史莱姆'],
	["Thunder Egg", '雷公蛋'],
	["Pyrite", '黄铁矿'],
	["Ocean Stone", '海洋石'],
	["Ghost Crystal", '幽灵水晶'],
	["Tigerseye", '虎眼石'],
	["Jasper", '碧玉'],
	["Opal", '猫眼石'],
	["Fire Opal", '赤红猫眼石'],
	["Celestine", '天青石'],
	["Marble", '大理石'],
	["Sandstone", '沙岩'],
	["Granite", '花岗岩'],
	["Basalt", '玄武岩'],
	["Limestone", '石灰石'],
	["Soapstone", '皂石'],
	["Hematite", '赤铁矿'],
	["Mudstone", '泥石'],
	["Obsidian", '黑曜石'],
	["Slate", '板岩'],
	["Fairy Stone", '精灵石'],
	["Star Shards", '陶瓷碎片'],
	//怪物种类
	["Slimes", '史莱姆'],
	["Void Spirits", '虚空怪'],
	["Bats", '蝙蝠'],
	["Skeletons", '骷髅'],
	["Cave Insects", '山洞昆虫'],
	["Duggies", '掘地虫'],
	["Dust Sprites", '灰尘精灵'],
	["Rock Crabs", '岩石蟹'],
	["Mummies", '木乃伊'],
	["Pepper Rex", '霸王喷火龙'],
	["Serpents", '飞蛇'],
	["Flame Spirits", '熔岩精灵'],
	//具体怪物
	["Green Slime", '绿色史莱姆'],
	["Frost Jelly", '蓝色史莱姆（冰冻史莱姆）'],
	["Sludge", '红色史莱姆（熔岩史莱姆）'],
	["Shadow Brute", '暗影狂徒'],
	["Shadow Shaman", '暗影萨满'],
	["Bat", '蝙蝠'],
	["Frost Bat", '冰冻蝙蝠'],
	["Lava Bat", '熔岩蝙蝠'],
	["Skeleton", '骷髅'],
	["Bug", '臭虫'],
	["Cave Fly", '苍蝇'],
	["Grub", '蛆'],
	["Duggy", '掘地虫'],
	["Dust Spirit", '煤球怪'],
	["Rock Crab", '岩石蟹'],
	["Lava Crab", '熔岩蟹'],
	["Iridium Crab", '铱蟹'],
	["Mummy", '木乃伊'],
	["Pepper Rex", '霸王喷火龙'],
	["Serpent", '飞蛇'],
	["Magma Sprite", '熔岩精灵'],
	["Magma Sparker", '熔岩火球'],
	["Tiger Slime", '老虎史莱姆'],
	["Shadow Sniper", '暗影狙击手'],
	["Magma Duggy", '熔岩掘地虫'],
	["Iridium Bat", '铱蝠'],
	["Royal Serpent", '皇家飞蛇'],
	["Skeleton Mage", '骷髅法师'],
	//特别任务
	["A Curious Substance", '奇特物质'],
	["Aquatic Overpopulation", '水生物泛滥'],
	["Biome Balance", '生态平衡'],
	["Cave Patrol", '洞穴巡查'],
	["Community Cleanup", '社区清理'],
	["Crop Order", '农作物订单'],
	["Fragments of the past", '历史的碎片'],
	["Gifts for George", '给乔治的礼物'],
	["Gus' Famous Omelet", '格斯的著名煎蛋卷'],
	["Island Ingredients", '岛屿食材'],
	["Juicy Bugs Wanted!", '需要多汁的虫子'],
	["Pierre's Prime Produce", '皮埃尔优选'],
	["Prismatic Jelly", '五彩胶冻'],
	["Robin's Project", '罗宾的项目'],
	["Robin's Resource Rush", '罗宾的资源活动'],
	["Rock Rejuvenation", '宝石能量'],
	["The Strong Stuff", '烈酒'],
	["Tropical Fish", '热带鱼']
]);

function ReturnCn(En) {
	return Translate.get(En) || En
};
//正常使用ReturnCn(原来的变量)
//数组相关的翻译在后面加.map(tamp => ReturnCn(tamp))

function ReturnEn(Cn) {
	for (const [En, cn] of Translate) {
		if (cn === Cn) {
			return En;
		}
	}
	return Cn;
};
//用于把读取页面中文作为变量的方法翻译回英文
/* stardew-checkup.js
 * https://mouseypounds.github.io/stardew-checkup/
 */

/*jslint indent: 4, maxerr: 50, passfail: false, browser: true, regexp: true, plusplus: true */
/*global $, FileReader */

window.onload = function () {
	"use strict";

	// Check for required File API support.
	if (!(window.File && window.FileReader)) {
		document.getElementById('out').innerHTML = '<span class="error">Fatal Error: Could not load the File & FileReader APIs</span>';
		return;
	}

	// Show input field immediately
	$(document.getElementById('input-container')).show();

	// Utility functions
	function addCommas(x) {
		// Jamie Taylor @ https://stackoverflow.com/questions/3883342/add-commas-to-a-number-in-jquery
		return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
	}

	function capitalize(s) {
		// joelvh @ https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
		return s && s[0].toUpperCase() + s.slice(1);
	}

	function compareSemVer(a, b) {
		// semver-compare by James Halliday ("substack") @ https://github.com/substack/semver-compare
		var pa = a.split('.');
		var pb = b.split('.');
		for (var i = 0; i < 3; i++) {
			var na = Number(pa[i]);
			var nb = Number(pb[i]);
			if (na > nb) return 1;
			if (nb > na) return -1;
			if (!isNaN(na) && isNaN(nb)) return 1;
			if (isNaN(na) && !isNaN(nb)) return -1;
		}
		return 0;
	}

	function getAchieveString(name, desc, yes) {
		if (desc.length > 0) {
			desc = '(' + desc + ') ';
		}
		return (yes) ? '<span class="ach_yes"><span class="ach">' + name + '</span> ' + desc + ' 已完成</span>' :
			'<span class="ach_no"><span class="ach">' + name + '</span> ' + desc + '</span> -- ';
	}

	function getAchieveImpossibleString(name, desc) {
		if (desc.length > 0) {
			desc = '(' + desc + ') ';
		}
		return '<span class="ach_imp"><span class="ach">' + name + '</span> ' + desc + ' 不可能获得</span>';
	}

	function getMilestoneString(desc, yes) {
		return (yes) ? '<span class="ms_yes">' + desc + '</span>' :
			'<span class="ms_no">' + desc + '</span> -- ';
	}

	function getPointString(pts, desc, cum, yes) {
		var c = (cum) ? '' : '';
		return (yes) ? '<span class="pt_yes"><span class="pts">+' + pts + c + '</span> 已获得 (' + desc + ')</span>' :
			'<span class="pt_no"><span class="pts"> (' + pts + c + ')</span> 还能获得 (' + desc + ')</span>';
	}

	function getPointImpossibleString(pts, desc) {
		return '<span class="pt_imp"><span class="pts">+' + pts + '</span> 不可能获得 (' + desc + ')</span>';
	}

	function getPerfectionPctString(pct, max, desc, yes, who = "") {
		var pts = max * pct;
		var places = 2;
		var extra = (who === "") ? "" : (pct === 0) ? "" : " thanks to " + who;
		if (pct < .0001 || pct > .9999) { places = 0 };
		pts = pts.toFixed(places);
		var pretty_pct = 100 * pct;
		pretty_pct = pretty_pct.toFixed(Math.max(0, places - 1));
		return (yes) ? '<span class="pt_yes"><span class="pts">' + pts + '%</span> from completion of ' + desc + extra + '</span>' :
			'<span class="pt_no"><span class="pts"> ' + pts + '%</span> (of ' + max + '% possible) from ' + desc + extra +
			' (' + pretty_pct + '%)</span>';
	}

	function getPerfectionNumString(num, max, desc, yes, who = "") {
		var pts = num;
		var pretty_pct = num + "/" + max;
		var extra = (who === "") ? "" : (num === 0) ? "" : " thanks to " + who;
		return (yes) ? '<span class="pt_yes"><span class="pts">' + pts + '%</span> from completion of ' + desc + extra + '</span>' :
			'<span class="pt_no"><span class="pts"> ' + pts + '%</span> (of ' + max + '% possible) from ' + desc + extra +
			' (' + pretty_pct + ')</span>';
	}

	function getPerfectionPctNumString(pct, max, count, desc, yes, who = "") {
		var pts = max * pct;
		var places = 2;
		var extra = (who === "") ? "" : (pct === 0) ? "" : " thanks to " + who;
		if (pct < .0001 || pct > .9999) { places = 0 };
		pts = pts.toFixed(places);
		var pretty_pct = Math.round(count * pct) + "/" + count + " or " + Number(100 * pct).toFixed(Math.max(0, places - 1)) + "%";
		return (yes) ? '<span class="pt_yes"><span class="pts">' + pts + '%</span> from completion of ' + desc + extra + '</span>' :
			'<span class="pt_no"><span class="pts"> ' + pts + '%</span> (of ' + max + '% possible) from ' + desc + extra +
			' (' + pretty_pct + ')</span>';
	}

	function getPerfectionBoolString(max, desc, yes, who = "") {
		var extra = (who === "") ? "" : " thanks to " + who;
		return (yes) ? ('<span class="pt_yes"><span class="pts">' + max + '%</span> from completion of ' + desc + extra + '</span>') :
			('<span class="pt_no"><span class="pts"> 0%</span> (of ' + max + '% possible) from ' + desc + '</span>');
	}

	function wikify(item, page, no_anchor) {
		// removing egg colors & changing spaces to underscores
		var trimmed = item.replace(' (White)', '');
		trimmed = trimmed.replace(' (Brown)', '');
		trimmed = trimmed.replace(' (Any)', '');
		trimmed = trimmed.replace(/#/g, '.23');
		trimmed = trimmed.replace(/ /g, '_');
		if (page) {
			return (no_anchor) ? ('<a href="https://stardewvalleywiki.com/' + page + '">' + item + '</a>') :
				('<a href="https://stardewvalleywiki.com/' + page + '#' + trimmed + '">' + item + '</a>');
		} else {
			return ('<a href="https://stardewvalleywiki.com/' + trimmed + '">' + item + '</a>');
		}
	}

	function wikimap(item, index, arr) {
		// Wrapper to allow wikify to be used within an array map without misinterpreting the 2nd and 3rd arguments.
		return wikify(item);
	}

	function printTranspose(table) {
		var output = '<table class="output">',
			id;
		for (var r = 0; r < table[0].length; r++) {
			output += '<tr>';
			for (var c = 0; c < table.length; c++) {
				id = 'PL_' + (c + 1);
				output += '<td class="' + id + '">' + table[c][r] + '</td>';
			}
			output += '</tr>';
		}
		output += '</table>';
		return output;
	}

	function isValidFarmhand(player) {
		// Had been using a blank userID field to determine that a farmhand slot is empty
		// until a user sent a save where a valid farmhand had no ID. Now using both a blank
		// userID and name field and hoping that it's enough.
		if (($(player).children('userID').text() === '') && ($(player).children('name').text() === '')) {
			return false;
		}
		return true;
	}

	function getSummaryClass(saveInfo, version) {
		// Relatively simple conditional checks that need to be done a whole lot
		var prefs = (compareSemVer(version, "1.6") < 0) ? saveInfo.outputPrefOld : saveInfo.outputPrefNew;
		var sum_class = "initial_hide";
		if (prefs === 'show_all' || prefs === 'hide_details') {
			sum_class = "initial_show";
		}
		return sum_class;
	}

	function getDetailsClass(saveInfo, version) {
		// Relatively simple conditional checks that need to be done a whole lot
		var prefs = (compareSemVer(version, "1.6") < 0) ? saveInfo.outputPrefOld : saveInfo.outputPrefNew;
		var det_class = "initial_show";
		if (prefs === 'hide_all' || prefs === 'hide_details') {
			det_class = "initial_hide";
		}
		return det_class;
	}

	function getPTLink(input, isPct) {
		// Makes link to Perfection Tracker from given info
		// If 'isPct' is true, will convert to a percentage rounded to 1 decimal
		if (isPct) {
			var places = (input === 1) ? 0 : 1;
			var n = Number(100 * input).toFixed(places);
			input = n + '%';
		}

		return ' (<a href="#sec_Perfection_Tracker">PT: ' + input + '</a>)';
	}

	function getSectionHeader(saveInfo, title, anchor, showDetailsButton, version) {
		// Sets up title and buttons which control the collapsible output
		// showDetailsButton is a bool so that we don't have a control for empty details
		// version is when that section was added and is used for old vs new interpretation
		//   version 1.2 is the baseline value for most original sections
		//   "old" currently means before version 1.5 and "new" is 1.5 & later
		var prefs = (compareSemVer(version, "1.6") < 0) ? saveInfo.outputPrefOld : saveInfo.outputPrefNew;

		var output = '<div class="collapsible" id="wrap_' + anchor + '"><h3>' + ReturnCn(title) + '</h3>';
		var sum_button, sum_class, det_button, det_class;

		if (prefs === 'show_all' || prefs === 'hide_details') {
			sum_button = "隐藏摘要";
		} else {
			sum_button = "显示摘要";
		}
		if (prefs === 'hide_all' || prefs === 'hide_details') {
			det_button = "显示详情";
		} else {
			det_button = "隐藏详情";
		}

		// Supporting sections that don't have details also should not have the button. We'll leave the empty div alone
		var button_element = "(没有详情)";
		if (showDetailsButton) {
			button_element = '<button id="toggle_' + anchor + '_details" type="button" data-target="' + anchor + '_details">' + det_button + '</button>';
		}

		output += ' <button id="toggle_' + anchor + '_summary" type="button" data-target="' + anchor + '_summary">' + sum_button + '</button> ' + button_element;
		return output;
	}

	function getSectionFooter() {
		// Companion to getSectionHeader() that mainly exists so that we close all the things the header opened
		// Currently almost pointless but better base for future expansion.
		return '</div>';
	}

	function collapsibleWrap(saveInfo, title, output, version) { return "<h4>PLACEHOLDER</h4>" + output; }

	function makeAnchor(text) {
		// forces lower-case and converts non-alpha characters to underscore for simple ID attributes
		var id = text;
		id.toLowerCase();
		return id.replace(/[^\w*]/g, '_');
	}

	// Individual chunks of save parsing.
	// Each receives the xmlDoc object to parse & the saveInfo information structure and returns HTML to output.
	// Most also create a meta object which is passed to the per-player info subroutine primarily to find out if
	// there are any details so that we know whether to show a button later.
	// saveInfo stores meta information like object ID -> name mappings and also things that we were parsing
	// way too often such as mail flags and player stats
	function parseSummary(xmlDoc, saveInfo) {
		var title = "Summary",
			anchor = makeAnchor(title),
			version = "1.2",
			sum_class = getSummaryClass(saveInfo, version),
			output = '',
			details = '',
			farmTypes = {
				0: '经典农场',
				1: '河流农场',
				2: '森林农场',
				3: '山顶农场',
				4: '荒野农场',
				5: '四角农场',
				6: '海滩农场',
				"MeadowlandsFarm": '草原农场',
			},
			playTime = Number($(xmlDoc).find('player > millisecondsPlayed').text()),
			playHr = Math.floor(playTime / 36e5),
			playMin = Math.floor((playTime % 36e5) / 6e4),
			id = "0",
			farmer,
			versionLabel,
			farmhands = [],
			farmhandSelector = 'farmhand';

		// Versioning has changed from bools to numbers, to now a semver string.
		saveInfo.version = $(xmlDoc).find('gameVersion').first().text();
		if (saveInfo.version === "") {
			saveInfo.version = "1.2";
			if ($(xmlDoc).find('hasApplied1_4_UpdateChanges').text() === 'true') {
				saveInfo.version = "1.4";
			} else if ($(xmlDoc).find('hasApplied1_3_UpdateChanges').text() === 'true') {
				saveInfo.version = "1.3";
			}
		}
		versionLabel = $(xmlDoc).find('gameVersionLabel').first().text();
		if (versionLabel === "") {
			saveInfo.versionLabel = "";
		} else {
			saveInfo.versionLabel = "(" + versionLabel + ")";
		}

		// Namespace prefix varies by platform; iOS saves seem to use 'p3' and PC saves use 'xsi'.
		saveInfo.ns_prefix = ($(xmlDoc).find('SaveGame[xmlns\\:xsi]').length > 0) ? 'xsi' : 'p3';
		// Farmer, farm, and child names are read as html() because they come from user input and might contain characters
		// which must be escaped.
		saveInfo.players = {};
		saveInfo.children = {};
		saveInfo.data = {};
		id = populateData($(xmlDoc).find('player'), saveInfo);
		saveInfo.farmerId = id;
		farmer = saveInfo.data[id].name;

		saveInfo.players[id] = saveInfo.data[id].name;
		saveInfo.children[id] = [];
		$(xmlDoc).find("[" + saveInfo.ns_prefix + "\\:type='FarmHouse'] NPC[" + saveInfo.ns_prefix + "\\:type='Child']").each(function () {
			saveInfo.children[id].push($(this).find('name').html());
		});
		saveInfo.numPlayers = 1;
		saveInfo.farmName = $(xmlDoc).find('player > farmName').html();
		// Initializing structures needed for perfectionTracker since a lot of it builds on other milestones
		saveInfo.perfectionTracker = {
			'global': {
				'Gold Clock': false,
				'Earth Obelisk': false,
				'Water Obelisk': false,
				'Desert Obelisk': false,
				'Island Obelisk': false,
				'Walnuts': { 'count': 0, 'total': 130 },
			}
		};
		saveInfo.perfectionTracker[id] = {};

		output = getSectionHeader(saveInfo, title, anchor, false, version);
		output += '<div class="' + anchor + '_summary ' + sum_class + '">';
		output += '<span class="result">' + saveInfo.farmName + ' 农场（' +
			farmTypes[$(xmlDoc).find('whichFarm').text()] + '）</span><br />';
		output += '<span class="result">农夫：' + farmer;

		if (compareSemVer(saveInfo.version, "1.6") >= 0) {
			farmhandSelector = "farmhands > Farmer";
		}
		$(xmlDoc).find(farmhandSelector).each(function () {
			if (isValidFarmhand(this)) {
				saveInfo.numPlayers++;
				var id = populateData($(this), saveInfo);
				farmhands.push(saveInfo.data[id].name);
				saveInfo.players[id] = saveInfo.data[id].name;
				saveInfo.children[id] = [];
				saveInfo.perfectionTracker[id] = {};
			}
		});
		// We used to accumulate the list of children while scanning the farmhands, but since farmhands are no longer stored under
		// the Cabins we have moved this to a separate filter.
		$(xmlDoc).find('indoors[' + saveInfo.ns_prefix + '\\:type="Cabin"]').find("NPC[" + saveInfo.ns_prefix + "\\:type='Child']").each(function () {
			id = $(this).children('idOfParent').text();
			saveInfo.children[id].push($(this).find('name').html());
		});
		if (saveInfo.numPlayers > 1) {
			output += ' and Farmhand(s) ' + farmhands.join(', ');
			createPlayerList(saveInfo.numPlayers, farmer, farmhands);
		}
		output += '</span><br />';
		// Searching for marriage between players
		saveInfo.partners = {};
		$(xmlDoc).find('farmerFriendships > item').each(function () {
			var item = this;
			if ($(this).find('value > Friendship > Status').text() === 'Married') {
				var id1 = $(item).find('key > FarmerPair > Farmer1').text();
				var id2 = $(item).find('key > FarmerPair > Farmer2').text();
				saveInfo.partners[id1] = id2;
				saveInfo.partners[id2] = id1;
			}
		});
		// Dump of most items in ObjectInformation, needed for Bundle processing.
		// includes some categories as well
		saveInfo.objects = {
			'-5': "Egg (Any)",
			'-6': "Milk (Any)",
			16: "Wild Horseradish",
			18: "Daffodil",
			20: "Leek",
			22: "Dandelion",
			24: "Parsnip",
			60: "Emerald",
			62: "Aquamarine",
			64: "Ruby",
			66: "Amethyst",
			68: "Topaz",
			69: "Banana Sapling",
			70: "Jade",
			72: "Diamond",
			74: "Prismatic Shard",
			78: "Cave Carrot",
			80: "Quartz",
			82: "Fire Quartz",
			84: "Frozen Tear",
			86: "Earth Crystal",
			88: "Coconut",
			90: "Cactus Fruit",
			91: "Banana",
			92: "Sap",
			93: "Torch",
			96: "Dwarf Scroll I",
			97: "Dwarf Scroll II",
			98: "Dwarf Scroll III",
			99: "Dwarf Scroll IV",
			100: "Chipped Amphora",
			101: "Arrowhead",
			103: "Ancient Doll",
			104: "Elvish Jewelry",
			105: "Chewing Stick",
			106: "Ornamental Fan",
			107: "Dinosaur Egg",
			108: "Rare Disc",
			109: "Ancient Sword",
			110: "Rusty Spoon",
			111: "Rusty Spur",
			112: "Rusty Cog",
			113: "Chicken Statue",
			114: "Ancient Seed",
			115: "Prehistoric Tool",
			116: "Dried Starfish",
			117: "Anchor",
			118: "Glass Shards",
			119: "Bone Flute",
			120: "Prehistoric Handaxe",
			121: "Dwarvish Helm",
			122: "Dwarf Gadget",
			123: "Ancient Drum",
			124: "Golden Mask",
			125: "Golden Relic",
			126: "Strange Doll (Green)",
			127: "Strange Doll (Yellow)",
			128: "Pufferfish",
			129: "Anchovy",
			130: "Tuna",
			131: "Sardine",
			132: "Bream",
			136: "Largemouth Bass",
			137: "Smallmouth Bass",
			138: "Rainbow Trout",
			139: "Salmon",
			140: "Walleye",
			141: "Perch",
			142: "Carp",
			143: "Catfish",
			144: "Pike",
			145: "Sunfish",
			146: "Red Mullet",
			147: "Herring",
			148: "Eel",
			149: "Octopus",
			150: "Red Snapper",
			151: "Squid",
			152: "Seaweed",
			153: "Green Algae",
			154: "Sea Cucumber",
			155: "Super Cucumber",
			156: "Ghostfish",
			157: "White Algae",
			158: "Stonefish",
			159: "Crimsonfish",
			160: "Angler",
			161: "Ice Pip",
			162: "Lava Eel",
			163: "Legend",
			164: "Sandfish",
			165: "Scorpion Carp",
			166: "Treasure Chest",
			167: "Joja Cola",
			168: "Trash",
			169: "Driftwood",
			170: "Broken Glasses",
			171: "Broken CD",
			172: "Soggy Newspaper",
			174: "Large Egg (White)",
			176: "Egg (White)",
			178: "Hay",
			180: "Egg (Brown)",
			182: "Large Egg (Brown)",
			184: "Milk",
			186: "Large Milk",
			188: "Green Bean",
			190: "Cauliflower",
			192: "Potato",
			194: "Fried Egg",
			195: "Omelet",
			196: "Salad",
			197: "Cheese Cauliflower",
			198: "Baked Fish",
			199: "Parsnip Soup",
			200: "Vegetable Medley",
			201: "Complete Breakfast",
			202: "Fried Calamari",
			203: "Strange Bun",
			204: "Lucky Lunch",
			205: "Fried Mushroom",
			206: "Pizza",
			207: "Bean Hotpot",
			208: "Glazed Yams",
			209: "Carp Surprise",
			210: "Hashbrowns",
			211: "Pancakes",
			212: "Salmon Dinner",
			213: "Fish Taco",
			214: "Crispy Bass",
			215: "Pepper Poppers",
			216: "Bread",
			218: "Tom Kha Soup",
			219: "Trout Soup",
			220: "Chocolate Cake",
			221: "Pink Cake",
			222: "Rhubarb Pie",
			223: "Cookie",
			224: "Spaghetti",
			225: "Fried Eel",
			226: "Spicy Eel",
			227: "Sashimi",
			228: "Maki Roll",
			229: "Tortilla",
			230: "Red Plate",
			231: "Eggplant Parmesan",
			232: "Rice Pudding",
			233: "Ice Cream",
			234: "Blueberry Tart",
			235: "Autumn's Bounty",
			236: "Pumpkin Soup",
			237: "Super Meal",
			238: "Cranberry Sauce",
			239: "Stuffing",
			240: "Farmer's Lunch",
			241: "Survival Burger",
			242: "Dish O' The Sea",
			243: "Miner's Treat",
			244: "Roots Platter",
			245: "Sugar",
			246: "Wheat Flour",
			247: "Oil",
			248: "Garlic",
			250: "Kale",
			251: "Tea Sapling",
			252: "Rhubarb",
			253: "Triple Shot Espresso",
			254: "Melon",
			256: "Tomato",
			257: "Morel",
			258: "Blueberry",
			259: "Fiddlehead Fern",
			260: "Hot Pepper",
			261: "Warp Totem: Desert",
			262: "Wheat",
			264: "Radish",
			265: "Seafoam Pudding",
			266: "Red Cabbage",
			267: "Flounder",
			268: "Starfruit",
			269: "Midnight Carp",
			270: "Corn",
			271: "Unmilled Rice",
			272: "Eggplant",
			273: "Rice Shoot",
			274: "Artichoke",
			275: "Artifact Trove",
			276: "Pumpkin",
			278: "Bok Choy",
			279: "Magic Rock Candy",
			280: "Yam",
			281: "Chanterelle",
			282: "Cranberries",
			283: "Holly",
			284: "Beet",
			286: "Cherry Bomb",
			287: "Bomb",
			288: "Mega Bomb",
			289: "Ostrich Egg",
			292: "Mahogany Seed",
			293: "Brick Floor",
			296: "Salmonberry",
			297: "Grass Starter",
			298: "Hardwood Fence",
			299: "Amaranth Seeds",
			300: "Amaranth",
			301: "Grape Starter",
			302: "Hops Starter",
			303: "Pale Ale",
			304: "Hops",
			305: "Void Egg",
			306: "Mayonnaise",
			307: "Duck Mayonnaise",
			308: "Void Mayonnaise",
			309: "Acorn",
			310: "Maple Seed",
			311: "Pine Cone",
			322: "Wood Fence",
			323: "Stone Fence",
			324: "Iron Fence",
			325: "Gate",
			328: "Wood Floor",
			329: "Stone Floor",
			330: "Clay",
			331: "Weathered Floor",
			333: "Crystal Floor",
			334: "Copper Bar",
			335: "Iron Bar",
			336: "Gold Bar",
			337: "Iridium Bar",
			338: "Refined Quartz",
			340: "Honey",
			341: "Tea Set",
			342: "Pickles",
			344: "Jelly",
			346: "Beer",
			347: "Rare Seed",
			348: "Wine",
			349: "Energy Tonic",
			350: "Juice",
			351: "Muscle Remedy",
			368: "Basic Fertilizer",
			369: "Quality Fertilizer",
			370: "Basic Retaining Soil",
			371: "Quality Retaining Soil",
			372: "Clam",
			373: "Golden Pumpkin",
			376: "Poppy",
			378: "Copper Ore",
			380: "Iron Ore",
			382: "Coal",
			384: "Gold Ore",
			386: "Iridium Ore",
			388: "Wood",
			390: "Stone",
			392: "Nautilus Shell",
			393: "Coral",
			394: "Rainbow Shell",
			395: "Coffee",
			396: "Spice Berry",
			397: "Sea Urchin",
			398: "Grape",
			399: "Spring Onion",
			400: "Strawberry",
			401: "Straw Floor",
			402: "Sweet Pea",
			403: "Field Snack",
			404: "Common Mushroom",
			405: "Wood Path",
			406: "Wild Plum",
			407: "Gravel Path",
			408: "Hazelnut",
			409: "Crystal Path",
			410: "Blackberry",
			411: "Cobblestone Path",
			412: "Winter Root",
			413: "Blue Slime Egg",
			414: "Crystal Fruit",
			415: "Stepping Stone Path",
			416: "Snow Yam",
			417: "Sweet Gem Berry",
			418: "Crocus",
			419: "Vinegar",
			420: "Red Mushroom",
			421: "Sunflower",
			422: "Purple Mushroom",
			423: "Rice",
			424: "Cheese",
			425: "Fairy Seeds",
			426: "Goat Cheese",
			427: "Tulip Bulb",
			428: "Cloth",
			429: "Jazz Seeds",
			430: "Truffle",
			431: "Sunflower Seeds",
			432: "Truffle Oil",
			433: "Coffee Bean",
			436: "Goat Milk",
			437: "Red Slime Egg",
			438: "L. Goat Milk",
			439: "Purple Slime Egg",
			440: "Wool",
			441: "Explosive Ammo",
			442: "Duck Egg",
			444: "Duck Feather",
			445: "Caviar",
			446: "Rabbit's Foot",
			447: "Aged Roe",
			453: "Poppy Seeds",
			454: "Ancient Fruit",
			455: "Spangle Seeds",
			456: "Algae Soup",
			457: "Pale Broth",
			459: "Mead",
			463: "Drum Block",
			464: "Flute Block",
			465: "Speed-Gro",
			466: "Deluxe Speed-Gro",
			472: "Parsnip Seeds",
			473: "Bean Starter",
			474: "Cauliflower Seeds",
			475: "Potato Seeds",
			476: "Garlic Seeds",
			477: "Kale Seeds",
			478: "Rhubarb Seeds",
			479: "Melon Seeds",
			480: "Tomato Seeds",
			481: "Blueberry Seeds",
			482: "Pepper Seeds",
			483: "Wheat Seeds",
			484: "Radish Seeds",
			485: "Red Cabbage Seeds",
			486: "Starfruit Seeds",
			487: "Corn Seeds",
			488: "Eggplant Seeds",
			489: "Artichoke Seeds",
			490: "Pumpkin Seeds",
			491: "Bok Choy Seeds",
			492: "Yam Seeds",
			493: "Cranberry Seeds",
			494: "Beet Seeds",
			495: "Spring Seeds",
			496: "Summer Seeds",
			497: "Fall Seeds",
			498: "Winter Seeds",
			499: "Ancient Seeds",
			535: "Geode",
			536: "Frozen Geode",
			537: "Magma Geode",
			538: "Alamite",
			539: "Bixite",
			540: "Baryte",
			541: "Aerinite",
			542: "Calcite",
			543: "Dolomite",
			544: "Esperite",
			545: "Fluorapatite",
			546: "Geminite",
			547: "Helvite",
			548: "Jamborite",
			549: "Jagoite",
			550: "Kyanite",
			551: "Lunarite",
			552: "Malachite",
			553: "Neptunite",
			554: "Lemon Stone",
			555: "Nekoite",
			556: "Orpiment",
			557: "Petrified Slime",
			558: "Thunder Egg",
			559: "Pyrite",
			560: "Ocean Stone",
			561: "Ghost Crystal",
			562: "Tigerseye",
			563: "Jasper",
			564: "Opal",
			565: "Fire Opal",
			566: "Celestine",
			567: "Marble",
			568: "Sandstone",
			569: "Granite",
			570: "Basalt",
			571: "Limestone",
			572: "Soapstone",
			573: "Hematite",
			574: "Mudstone",
			575: "Obsidian",
			576: "Slate",
			577: "Fairy Stone",
			578: "Star Shards",
			579: "Prehistoric Scapula",
			580: "Prehistoric Tibia",
			581: "Prehistoric Skull",
			582: "Skeletal Hand",
			583: "Prehistoric Rib",
			584: "Prehistoric Vertebra",
			585: "Skeletal Tail",
			586: "Nautilus Fossil",
			587: "Amphibian Fossil",
			588: "Palm Fossil",
			589: "Trilobite",
			591: "Tulip",
			593: "Summer Spangle",
			595: "Fairy Rose",
			597: "Blue Jazz",
			599: "Sprinkler",
			604: "Plum Pudding",
			605: "Artichoke Dip",
			606: "Stir Fry",
			607: "Roasted Hazelnuts",
			608: "Pumpkin Pie",
			609: "Radish Salad",
			610: "Fruit Salad",
			611: "Blackberry Cobbler",
			612: "Cranberry Candy",
			613: "Apple",
			614: "Green Tea",
			618: "Bruschetta",
			621: "Quality Sprinkler",
			628: "Cherry Sapling",
			629: "Apricot Sapling",
			630: "Orange Sapling",
			631: "Peach Sapling",
			632: "Pomegranate Sapling",
			633: "Apple Sapling",
			634: "Apricot",
			635: "Orange",
			636: "Peach",
			637: "Pomegranate",
			638: "Cherry",
			645: "Iridium Sprinkler",
			648: "Coleslaw",
			649: "Fiddlehead Risotto",
			651: "Poppyseed Muffin",
			680: "Green Slime Egg",
			681: "Rain Totem",
			682: "Mutant Carp",
			684: "Bug Meat",
			685: "Bait",
			686: "Spinner",
			687: "Dressed Spinner",
			688: "Warp Totem: Farm",
			689: "Warp Totem: Mountains",
			690: "Warp Totem: Beach",
			691: "Barbed Hook",
			692: "Lead Bobber",
			693: "Treasure Hunter",
			694: "Trap Bobber",
			695: "Cork Bobber",
			698: "Sturgeon",
			699: "Tiger Trout",
			700: "Bullhead",
			701: "Tilapia",
			702: "Chub",
			703: "Magnet",
			704: "Dorado",
			705: "Albacore",
			706: "Shad",
			707: "Lingcod",
			708: "Halibut",
			709: "Hardwood",
			710: "Crab Pot",
			715: "Lobster",
			716: "Crayfish",
			717: "Crab",
			718: "Cockle",
			719: "Mussel",
			720: "Shrimp",
			721: "Snail",
			722: "Periwinkle",
			723: "Oyster",
			724: "Maple Syrup",
			725: "Oak Resin",
			726: "Pine Tar",
			727: "Chowder",
			728: "Fish Stew",
			729: "Escargot",
			730: "Lobster Bisque",
			731: "Maple Bar",
			732: "Crab Cakes",
			733: "Shrimp Cocktail",
			734: "Woodskip",
			745: "Strawberry Seeds",
			746: "Jack-O-Lantern",
			747: "Rotten Plant",
			748: "Rotten Plant",
			749: "Omni Geode",
			766: "Slime",
			767: "Bat Wing",
			768: "Solar Essence",
			769: "Void Essence",
			770: "Mixed Seeds",
			771: "Fiber",
			772: "Oil of Garlic",
			773: "Life Elixir",
			774: "Wild Bait",
			775: "Glacierfish",
			787: "Battery Pack",
			795: "Void Salmon",
			796: "Slimejack",
			797: "Pearl",
			798: "Midnight Squid",
			799: "Spook Fish",
			800: "Blobfish",
			802: "Cactus Seeds",
			805: "Tree Fertilizer",
			807: "Dinosaur Mayonnaise",
			812: "Roe",
			814: "Squid Ink",
			815: "Tea Leaves",
			820: "Fossilized Skull",
			821: "Fossilized Spine",
			822: "Fossilized Tail",
			823: "Fossilized Leg",
			824: "Fossilized Ribs",
			825: "Snake Skull",
			826: "Snake Vertebrae",
			827: "Mummified Bat",
			828: "Mummified Frog",
			829: "Ginger",
			830: "Taro Root",
			831: "Taro Tuber",
			832: "Pineapple",
			833: "Pineapple Seeds",
			834: "Mango",
			835: "Mango Sapling",
			836: "Stingray",
			837: "Lionfish",
			838: "Blue Discus",
			840: "Rustic Plank Floor",
			841: "Stone Walkway Floor",
			848: "Cinder Shard",
			851: "Magma Cap",
			852: "Dragon Tooth",
			856: "Curiosity Lure",
			857: "Tiger Slime Egg",
			872: "Fairy Dust",
			873: "Piña Colada",
			874: "Bug Steak",
			877: "Quality Bobber",
			879: "Monster Musk",
			881: "Bone Fragment",
			885: "Fiber Seeds",
			886: "Warp Totem: Island",
			889: "Qi Fruit",
			890: "Qi Bean",
			891: "Mushroom Tree Seed",
			892: "Warp Totem: Qi's Arena",
			893: "Fireworks (Red)",
			894: "Fireworks (Purple)",
			895: "Fireworks (Green)",
			896: "Galaxy Soul",
			898: "Son of Crimsonfish",
			899: "Ms. Angler",
			900: "Legend II",
			901: "Radioactive Carp",
			902: "Glacierfish Jr.",
			903: "Ginger Ale",
			904: "Banana Pudding",
			905: "Mango Sticky Rice",
			906: "Poi",
			907: "Tropical Curry",
			908: "Magic Bait",
			909: "Radioactive Ore",
			910: "Radioactive Bar",
			911: "Horse Flute",
			913: "Enricher",
			915: "Pressure Nozzle",
			917: "Qi Seasoning",
			918: "Hyper Speed-Gro",
			919: "Deluxe Fertilizer",
			920: "Deluxe Retaining Soil",
			921: "Squid Ink Ravioli",
			926: "Cookout Kit",
			928: "Golden Egg",
			"MixedFlowerSeeds": "Mixed Flower Seeds",
			"MysteryBox": "Mystery Box",
			"DeluxeBait": "Deluxe Bait",
			"Moss": "Moss",
			"MossySeed": "Mossy Seed",
			"SonarBobber": "Sonar Bobber",
			"TentKit": "Tent Kit",
			"MysticTreeSeed": "Mystic Tree Seed",
			"MysticSyrup": "Mystic Syrup",
			"Raisins": "Raisins",
			"DriedFruit": "Dried Fruit",
			"DriedMushrooms": "Dried Mushrooms",
			"StardropTea": "Stardrop Tea",
			"PrizeTicket": "Prize Ticket",
			"TreasureTotem": "Treasure Totem",
			"ChallengeBait": "Challenge Bait",
			"CarrotSeeds": "Carrot Seeds",
			"Carrot": "Carrot",
			"SummerSquashSeeds": "Summer Squash Seeds",
			"SummerSquash": "Summer Squash",
			"BroccoliSeeds": "Broccoli Seeds",
			"Broccoli": "Broccoli",
			"PowdermelonSeeds": "Powdermelon Seeds",
			"Powdermelon": "Powdermelon",
			"SmokedFish": "Smoked Fish",
			"Book_Trash": "The Alleyway Buffet",
			"Book_Crabbing": "The Art O' Crabbing",
			"Book_Bombs": "Dwarvish Safety Manual",
			"Book_Roe": "Jewels Of The Sea",
			"Book_WildSeeds": "Raccoon Journal",
			"Book_Woodcutting": "Woody's Secret",
			"Book_Defense": "Jack Be Nimble, Jack Be Thick",
			"Book_Friendship": "Friendship 101",
			"Book_Void": "Monster Compendium",
			"Book_Speed": "Way Of The Wind pt. 1",
			"Book_Marlon": "Mapping Cave Systems",
			"Book_PriceCatalogue": "Price Catalogue",
			"Book_QueenOfSauce": "Queen Of Sauce Cookbook",
			"Book_Diamonds": "The Diamond Hunter",
			"Book_Mystery": "Book of Mysteries",
			"Book_AnimalCatalogue": "Animal Catalogue",
			"Book_Speed2": "Way Of The Wind pt. 2",
			"GoldenAnimalCracker": "Golden Animal Cracker",
			"GoldenMysteryBox": "Golden Mystery Box",
			"SeaJelly": "Sea Jelly",
			"CaveJelly": "Cave Jelly",
			"RiverJelly": "River Jelly",
			"Goby": "Goby",
			"Book_Artifact": "Ancient Treasures: Appraisal Guide",
			"Book_Horse": "Horse: The Book",
			"Book_Grass": "Ol' Slitherlegs",
		}
		// Date originally used XXForSaveGame elements, but those were not always present on saves downloaded from upload.farm
		output += '<span class="result">第 ' + Number($(xmlDoc).find('year').text()) + ' 年 ' + ReturnCn(capitalize($(xmlDoc).find('currentSeason').html())) + ' 第 ' + Number($(xmlDoc).find('dayOfMonth').text()) + ' 天</span><br />';
		output += '<span class="result">已游玩 ';
		if (playHr === 0 && playMin === 0) {
			output += "不到1分钟";
		} else {
			if (playHr > 0) {
				output += playHr + ' 小时 ';
			}
			if (playMin > 0) {
				output += playMin + ' 分钟 ';
			}
		}
		output += '</span><br />';
		output += '<span class="result">该存档最后保存于 ' + saveInfo.version + ' ' + saveInfo.versionLabel + ' 版本</span><br /></div>';
		output += getSectionFooter();
		return output;
	}

	// After Stardew 1.6 changes to how farmhands are stored in the save we have created this wrapper for all the farmhand handling.
	function parseFarmhands(xmlDoc, saveInfo, table, func, ...args) {
		if (saveInfo.numPlayers > 1) {
			var farmhandSelector = 'farmhand';
			if (compareSemVer(saveInfo.version, "1.6") >= 0) {
				farmhandSelector = "farmhands > Farmer";
			}
			$(xmlDoc).find(farmhandSelector).each(function () {
				if (isValidFarmhand(this)) {
					table.push(func(this, saveInfo, ...args));
				}
			});
		}
	}

	function populateData(player, saveInfo) {
		var id = "0";
		var name = $(player).children('name').html();
		if (compareSemVer(saveInfo.version, "1.3") >= 0) {
			id = $(player).children('UniqueMultiplayerID').text();
			if (BigInt(id) % BigInt(111) === 0) {
				console.log("Player " + name + " is bad at music");
			}
		}
		saveInfo.data[id] = {};
		saveInfo.data[id].name = name;
		// redundant but useful
		saveInfo.data[id].umid = id;
		saveInfo.data[id].stats = {};
		var newStatFormat = (compareSemVer(saveInfo.version, "1.6") >= 0);
		var selector = newStatFormat ? 'stats > Values > item' : 'stats > *';
		var statBase = (compareSemVer(saveInfo.version, "1.3") >= 0) ? player : $(player).parent();
		// This does not handle pre-1.6 "specificMonstersKilled" correctly since it assumes single elements
		$(statBase).find(selector).each(function () {
			var key, value;
			if (newStatFormat) {
				key = $(this).find('key > string').text();
				value = $(this).find('value > *').text();
			} else {
				key = $(this)[0].nodeName;
				value = $(this).text();
			}
			saveInfo.data[id].stats[key] = value;
		});
		saveInfo.data[id].mailReceived = {};
		$(player).find("mailReceived > string").each(function () {
			saveInfo.data[id].mailReceived[$(this).text()] = true;
		});
		saveInfo.data[id].eventsSeen = {};
		$(player).find("eventsSeen > *").each(function () {
			saveInfo.data[id].eventsSeen[($(this).text())] = true;
		});
		saveInfo.data[id].experiencePoints = [];
		$(player).find('experiencePoints > int').each(function () {
			// Note that we are recording the value for Luck here too
			saveInfo.data[id].experiencePoints.push(Number($(this).text()));
		});
		// This was added due to 1.6.4 alternative tracking for mines stardrop
		saveInfo.data[id].chestConsumedMineLevels = {};
		$(player).find("chestConsumedLevels > item").each(function () {
			var key, value;
			key = Number($(this).find('key > int').text());
			value = $(this).find('value > *').text();
			saveInfo.data[id].chestConsumedMineLevels[key] = value;
		});
		saveInfo.data[id].maxStamina = Number($(player).find("maxStamina").text());
		return id;
	}

	function parseMoney(xmlDoc, saveInfo) {
		var title = 'Money',
			anchor = makeAnchor(title),
			version = "1.2",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			separateWallets = ($(xmlDoc).find('SaveGame > player > useSeparateWallets').text() === "true"),
			money = Number($(xmlDoc).find('SaveGame > player > totalMoneyEarned').text()),
			left = money,
			table = [];

		// Money earned achievements appear to be relative to the farm even with split money in MP.
		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + $(xmlDoc).find('SaveGame > player > farmName').html() + ' 的总收入：' +
			addCommas(money) + 'g。</span><br />\n';
		output += '<ul class="ach_list"><li>';
		output += (money >= 15e3) ? getAchieveString('新手', '赚取15,000g', 1) :
			getAchieveString('新手', '赚取15,000g', 0) + '还差 ' + addCommas(15e3 - money) + 'g';
		output += '</li>\n<li>';
		output += (money >= 5e4) ? getAchieveString('牛仔', '赚取50,000g', 1) :
			getAchieveString('牛仔', '赚取50,000g', 0) + '还差 ' + addCommas(5e4 - money) + 'g';
		output += '</li>\n<li>';
		output += (money >= 25e4) ? getAchieveString('农场主', '赚取250,000g', 1) :
			getAchieveString('农场主', '赚取250,000g', 0) + '还差 ' + addCommas(25e4 - money) + 'g';
		output += '</li>\n<li>';
		output += (money >= 1e6) ? getAchieveString('百万富翁', '赚取1,000,000g', 1) :
			getAchieveString('百万富翁', '赚取1,000,000g', 0) + '还差 ' + addCommas(1e6 - money) + 'g';
		output += '</li>\n<li>';
		output += (money >= 1e7) ? getAchieveString('千万富翁', '赚取10,000,000g', 1) :
			getAchieveString('千万富翁', '赚取10,000,000g', 0) + '还差 ' + addCommas(1e7 - money) + 'g';
		output += '</li></ul></div>';

		if (separateWallets) {
			meta.hasDetails = true;
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="result">Earnings Breakdown:</span><ul class="outer">';
			Object.keys(saveInfo.players).forEach(function (id) {
				var m = saveInfo.data[id].stats.individualMoneyEarned || 0;
				output += '<li>' + addCommas(m) + 'g earned by ' + saveInfo.players[id] + '</li>';
				left -= m;
			});
			if (left > 0) {
				output += '<li>(' + addCommas(left) + 'g surplus unexplained)</li>';
			} else if (left < 0) {
				output += '<li>(' + addCommas(0 - left) + 'g deficit unexplained)</li>';
			}
			output += '</ul></div>'
		}

		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + output + getSectionFooter();
		return output;
	}

	function parseSocial(xmlDoc, saveInfo) {
		var title = 'Social',
			anchor = makeAnchor(title),
			version = "1.2",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [],
			spouse = $(xmlDoc).find('player > spouse').text(); // only used for 1.2 engagement checking

		meta.countdown = Number($(xmlDoc).find('countdownToWedding').text());
		// NPCs and NPC Types we are ignoring either in location data or friendship data
		meta.ignore = {
			'Horse': 1,
			'Cat': 1,
			'Dog': 1,
			'Fly': 1,
			'Grub': 1,
			'GreenSlime': 1,
			'Gunther': 1,
			'Marlon': 1,
			'Bouncer': 1,
			'Mister Qi': 1,
			'Henchman': 1,
			'Birdie': 1,
			'Fizz': 1,
			'Pet': 1,
			'Raccoon': 1,
			'Bat': 1, // This one is from Lewis' Basement
			'Truffle Crab': 1, // Matching on name
		};
		meta.npc = {};
		// <NPC>: [ [<numHearts>, <id>], ... ]
		meta.eventList = {
			'Abigail': [[2, 1], [4, 2], [6, 4], [8, 3], [10, 901756]],
			'Alex': [[2, 20], [4, 2481135], [5, 21], [6, 2119820], [8, 288847], [10, 911526]],
			'Elliott': [[2, 39], [4, 40], [6, 423502], [8, 1848481], [10, 43]],
			'Emily': [[2, 471942], [4, 463391], [6, 917409], [8, 2123243], [10, 2123343]],
			'Haley': [[2, 11], [4, 12], [6, 13], [8, 14], [10, 15]],
			'Harvey': [[2, 56], [4, 57], [6, 58], [8, 571102], [10, 528052]],
			'Leah': [[2, 50], [4, 51], [6, 52], [8, '53|584059'], [10, 54]], // 53 art show, 584059 online
			'Maru': [[2, 6], [4, 7], [6, 8], [8, 9], [10, 10]],
			'Penny': [[2, 34], [4, 35], [6, 36], [8, 181928], [10, 38]],
			'Sam': [[2, 44], [3, 733330], [4, 46], [6, 45], [8, 4081148], [10, 233104]],
			'Sebastian': [[2, 2794460], [4, 384883], [6, 27], [8, 29], [10, 384882]],
			'Shane': [[2, 611944], [4, 3910674], [6, 3910975], ['6.8', 3910974], [7, 831125], [8, 3900074], [10, 9581348]],
			'Caroline': [[6, 17]],
			'Clint': [[3, 97], [6, 101]],
			'Demetrius': [[6, 25]],
			'Dwarf': [['0.2', 691039]],
			'Evelyn': [[4, 19]],
			'George': [[6, 18]],
			'Gus': [[4, 96]],
			'Jas': [],
			'Jodi': [[4, '94|95']], // 94 y1, 95 y2
			'Kent': [[3, 100]],
			'Krobus': [],
			'Lewis': [[6, 639373]],
			'Linus': [['0.2', 502969], [4, 26]],
			'Marnie': [[6, 639373]],
			'Pam': [],
			'Pierre': [[6, 16]],
			'Robin': [[6, 33]],
			'Sandy': [],
			'Vincent': [],
			'Willy': [],
			'Wizard': [],
		};
		if (compareSemVer(saveInfo.version, "1.3") >= 0) {
			meta.eventList.Jas.push([8, 3910979]);
			meta.eventList.Vincent.push([8, 3910979]);
			meta.eventList.Linus.push([8, 371652]);
			meta.eventList.Pam.push([9, 503180]);
			meta.eventList.Willy.push([6, 711130]);
		}
		if (compareSemVer(saveInfo.version, "1.4") >= 0) {
			meta.eventList.Gus.push([5, 980558]);
			// This event does not require 2 hearts, but getting into the room does
			meta.eventList.Caroline.push([2, 719926]);
			// 14-Heart spouse events. Many have multiple parts; to preserve their proper order,
			//  we will use 14.2, 14.3, etc. even though the requirements are all exactly 14
			meta.eventList.Abigail.push([14, 6963327]);
			meta.eventList.Emily.push([14.1, 3917600], [14.2, 3917601]);
			meta.eventList.Haley.push([14.1, 6184643], [14.2, 8675611], [14.3, 6184644]);
			meta.eventList.Leah.push([14.1, 3911124], [14.2, 3091462]);
			meta.eventList.Maru.push([14.1, 3917666], [14.2, 5183338]);
			meta.eventList.Penny.push([14.1, 4325434], [14.2, 4324303]);
			meta.eventList.Alex.push([14.1, 3917587], [14.2, 3917589], [14.3, 3917590]);
			meta.eventList.Elliott.push([14.1, 3912125], [14.2, 3912132]);
			meta.eventList.Harvey.push([14, 3917626]);
			meta.eventList.Sam.push([14.1, 3918600], [14.2, 3918601], [14.3, 3918602], [14.4, 3918603]);
			meta.eventList.Sebastian.push([14.1, 9333219], [14.2, 9333220]);
			meta.eventList.Shane.push([14.1, 3917584], [14.2, 3917585], [14.3, 3917586]);
			meta.eventList.Krobus.push([14, 7771191]);
		}
		if (compareSemVer(saveInfo.version, "1.5") >= 0) {
			meta.eventList['Leo'] = [[0, 1039573], [2, 6497423], [4, 6497421], [6, 6497428], [9, 8959199]];
		}

		// Search locations for NPCs. They could be hardcoded, but this is somewhat more mod-friendly and it also
		// lets us to grab children and search out relationship status for version 1.2 saves.
		$(xmlDoc).find('locations > GameLocation').each(function () {
			$(this).find('characters > NPC').each(function () {
				var type = $(this).attr(saveInfo.ns_prefix + ':type');
				var who = $(this).find('name').html();
				// Filter out animals and monsters
				if (meta.ignore.hasOwnProperty(type) || meta.ignore.hasOwnProperty(who)) {
					return;
				}
				meta.npc[who] = {};
				meta.npc[who].isDatable = ($(this).find('datable').text() === 'true');
				meta.npc[who].isGirl = ($(this).find('gender').text() === '1');
				meta.npc[who].isChild = (type === 'Child');
				if (compareSemVer(saveInfo.version, "1.3") < 0) {
					if ($(this).find('divorcedFromFarmer').text() === 'true') {
						meta.npc[who].relStatus = 'Divorced';
					} else if (meta.countdown > 0 && who === spouse.slice(0, -7)) {
						meta.npc[who].relStatus = 'Engaged';
					} else if ($(this).find('daysMarried').text() > 0) {
						meta.npc[who].relStatus = 'Married';
					} else if ($(this).find('datingFarmer').text() === 'true') {
						meta.npc[who].relStatus = 'Dating';
					} else {
						meta.npc[who].relStatus = 'Friendly';
					}
				}
			});
		});
		table[0] = parsePlayerSocial($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerSocial, meta);
		playerOutput = printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerSocial(player, saveInfo, meta) {
		var output = '',
			table = [],
			count_5h = 0,
			count_10h = 0,
			maxed_count = 0,
			maxed_total = 0,
			umid = (compareSemVer(saveInfo.version, "1.3") >= 0) ? $(player).children('UniqueMultiplayerID').text() : saveInfo.farmerId,
			pt_pct = '',
			points = {},
			list_fam = [],
			list_bach = [],
			list_other = [],
			list_poly = [],
			farmer = $(player).children('name').html(),
			spouse = $(player).children('spouse').html(),
			dumped_Girls = 0,
			dumped_Guys = 0,
			hasSpouseStardrop = false,
			eventsSeen = saveInfo.data[umid].eventsSeen,
			hasNPCSpouse = false,
			hasPamHouse = false,
			hasCompletedIntroductions = true,
			list_intro = [],
			polyamory = {
				'All Bachelors': [195013, 195099],
				'All Bachelorettes': [195012, 195019]
			};
		if (compareSemVer(saveInfo.version, "1.3") >= 0) {
			$(player).find('activeDialogueEvents > item').each(function () {
				var which = $(this).find('key > string').text();
				var num = Number($(this).find('value > int').text());
				if (which === 'dumped_Girls') {
					dumped_Girls = num;
				} else if (which === 'dumped_Guys') {
					dumped_Guys = num;
				}
			});
			$(player).find('friendshipData > item').each(function () {
				var who = $(this).find('key > string').html();
				// Doved children will still have friendshipData but will no longer exist as characters,
				// so that is what the second check detects.
				if (meta.ignore.hasOwnProperty(who) || !meta.npc.hasOwnProperty(who)) { return; }
				var num = Number($(this).find('value > Friendship > Points').text());
				if (num >= 2500) { count_10h++; }
				if (num >= 1250) { count_5h++; }
				// Some redundancy because of keeping the achievement tally separate from Perfection Tracker
				if (meta.eventList.hasOwnProperty(who)) {
					maxed_total++;
					if ((meta.npc[who].isDatable && num >= 2000) || (num >= 2500)) { maxed_count++; }
				}
				points[who] = num;
				meta.npc[who].relStatus = $(this).find('value > Friendship > Status').text();
				var isRoommate = ($(this).find('value > Friendship > RoommateMarriage').text() === 'true');
				if (meta.npc[who].relStatus === 'Married' && isRoommate) {
					meta.npc[who].relStatus = 'Roommate'
				}
			});
		} else {
			$(player).find('friendships > item').each(function () {
				var who = $(this).find('key > string').html();
				var num = Number($(this).find('value > ArrayOfInt > int').first().text());
				if (num >= 2500) { count_10h++; }
				if (num >= 1250) { count_5h++; }
				points[who] = num;
			});
			if (meta.countdown > 0) {
				spouse = spouse.slice(0, -7);
			}
		}

		if (saveInfo.data[umid].mailReceived.hasOwnProperty('CF_Spouse')) {
			hasSpouseStardrop = true;
		}
		if (saveInfo.data[umid].mailReceived.hasOwnProperty('pamHouseUpgrade')) {
			hasPamHouse = true;
		}
		var eventCheck = function (arr, who) {
			var seen = false;
			var neg = 'no';
			// Note we are altering eventInfo from parent function
			String(arr[1]).split('|').forEach(function (e) {
				if (eventsSeen.hasOwnProperty(e)) {
					seen = true;
				}
			});
			// checks for events which can be permanently missed; 1st is Clint 6H, second is Sam 3H
			// Penny 4H & 6H added if Pam House Upgrade is done in some versions.
			if ((arr[1] === 101 && (eventsSeen.hasOwnProperty(2123243) || eventsSeen.hasOwnProperty(2123343))) ||
				(arr[1] === 733330 && saveInfo.data[umid].stats.daysPlayed > 84) ||
				(arr[1] === 35 && hasPamHouse && (compareSemVer(saveInfo.version, "1.5") < 0)) ||
				(arr[1] === 36 && hasPamHouse && (compareSemVer(saveInfo.version, "1.4") < 0))) {
				neg = 'imp';
			}
			// 10-heart events will be tagged impossible if there is no bouquet.
			if (arr[0] == 10 && meta.npc[who].isDatable && meta.npc[who].relStatus == 'Friendly') {
				neg = 'imp';
			}
			// 14-heart events will be tagged impossible if the player is married to someone else.
			if (arr[0] >= 14 && who !== spouse) {
				neg = 'imp';
			}
			// Now we are hardcoding 2 events that involve multiple NPCs too.
			var extra = '';
			if (arr[1] === 3910979) {
				extra = " (Jas &amp; Vincent both)";
			} else if (arr[1] === 639373) {
				extra = " (Lewis &amp; Marnie both)";
			}
			eventInfo += ' [<span class="ms_' + (seen ? 'yes' : neg) + '">' + arr[0] + '&#x2665;' + extra + '</span>]';
		};
		for (var who in meta.npc) {
			// Overriding status for the confrontation events
			if (dumped_Girls > 0 && who.isDatable && who.isGirl) {
				meta.npc[who].relStatus = 'Angry (' + dumped_Girls + ' more day(s))';
			} else if (dumped_Guys > 0 && who.isDatable && !who.isGirl) {
				nmeta.npc[who].relStatus = 'Angry (' + dumped_Guys + ' more day(s))';
			}
			var pts = 0;
			if (points.hasOwnProperty(who)) {
				pts = points[who];
			} else {
				meta.npc[who].relStatus = "Unmet";
			}
			var hearts = Math.floor(pts / 250);
			var entry = '<li>';
			entry += (meta.npc[who].isChild) ? who + ' (' + wikify('Child', 'Children') + ')' : wikify(who);
			entry += ': ' + meta.npc[who].relStatus + ', ' + hearts + '&#x2665; (' + pts + ' pts) -- ';

			// Check events
			// We want to only make an Event list item if there are actually events for this NPC.
			var eventInfo = '';
			if (meta.eventList.hasOwnProperty(who)) {
				if (meta.eventList[who].length > 0) {
					eventInfo += '<ul class="compact"><li>Event(s): ';
					meta.eventList[who].sort(function (a, b) { return a[0] - b[0]; });
					meta.eventList[who].forEach(function (a) { eventCheck(a, who); });
					eventInfo += '</li></ul>';
				}
			}
			var max;
			if (who === spouse) {
				// Spouse Stardrop threshold is 3375 from StardewValley.NPC.checkAction(); 3500 (14 hearts) in 1.4
				max = hasSpouseStardrop ? 3250 : 3375;
				if (compareSemVer(saveInfo.version, "1.4") >= 0) {
					max = 3500;
				}
				entry += (pts >= max) ? '<span class="ms_yes">MAX (can still decay)</span></li>' :
					'<span class="ms_no">need ' + (max - pts) + ' more</span></li>';
				hasNPCSpouse = true;
				list_fam.push(entry + eventInfo);
			} else if (meta.npc[who].isDatable) {
				max = 2000;
				if (meta.npc[who].relStatus === 'Dating') {
					max = 2500;
				}
				entry += (pts >= max) ? '<span class="ms_yes">MAX</span></li>' :
					'<span class="ms_no">need ' + (max - pts) + ' more</span></li>';
				list_bach.push(entry + eventInfo);
			} else {
				entry += (pts >= 2500) ? '<span class="ms_yes">MAX</span></li>' :
					'<span class="ms_no">need ' + (2500 - pts) + ' more</span></li>';
				if (meta.npc[who].isChild) {
					list_fam.push(entry + eventInfo);
				} else {
					list_other.push(entry + eventInfo);
				}
			}
		}
		if (saveInfo.version >= 1.3) {
			for (var who in polyamory) {
				// Rather than trying to force these to work in the eventCheck function, we make a new checker.
				var seen = false;
				var span = 'no';
				var entry = '<li>' + who;
				for (var id = 0; id < polyamory[who].length; id++) {
					if (eventsSeen.hasOwnProperty(polyamory[who][id])) {
						seen = true;
					}
				}
				if (seen) {
					span = 'yes';
				} else if (hasNPCSpouse) {
					span = 'imp';
				}
				entry += ': [<span class="ms_' + span + '">10&#x2665;</span>]</li>';
				list_poly.push(entry);
			}
		}
		$(player).find('questLog > [' + saveInfo.ns_prefix + "\\:type='SocializeQuest'] > whoToGreet > string").each(function () {
			list_intro.push($(this).text());
			hasCompletedIntroductions = false;
		});

		output = '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + farmer + ' has ' + (hasCompletedIntroductions ? "" : "not ") +
			'met everyone in town.</span><ul class="ach_list">\n';
		output += '<li>';
		output += (list_intro.length == 0) ? getMilestoneString('Complete <span class="ach">Introductions</span> quest', 1) :
			getMilestoneString('Complete <span class="ach">Introductions</span> quest', 0) + (list_intro.length) + ' more';
		output += '</li></ul></div>';
		output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
		if (list_intro.length > 0) {
			output += '<span class="need">Villagers left to meet<ol><li>' + list_intro.sort().join('</li><li>') + '</li></ol></span>\n';
		}
		output += '</div>';
		table.push(output);

		output = '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + farmer + ' has ' + count_5h + ' relationship(s) of 5+ hearts.</span><ul class="ach_list">\n';
		output += '<li>';
		output += (count_5h >= 1) ? getAchieveString('A New Friend', '5&#x2665; with 1 person', 1) :
			getAchieveString('A New Friend', '5&#x2665; with 1 person', 0) + (1 - count_5h) + ' more';
		output += '</li>\n<li>';
		output += (count_5h >= 4) ? getAchieveString('Cliques', '5&#x2665; with 4 people', 1) :
			getAchieveString('Cliques', '5&#x2665; with 4 people', 0) + (4 - count_5h) + ' more\n';
		output += '</li>\n<li>';
		output += (count_5h >= 10) ? getAchieveString('Networking', '5&#x2665; with 10 people', 1) :
			getAchieveString('Networking', '5&#x2665; with 10 people', 0) + (10 - count_5h) + ' more';
		output += '</li>\n<li>';
		output += (count_5h >= 20) ? getAchieveString('Popular', '5&#x2665; with 20 people', 1) :
			getAchieveString('Popular', '5&#x2665; with 20 people', 0) + (20 - count_5h) + ' more';
		output += '</li></ul></div>';
		table.push(output);

		output = '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + farmer + ' has ' + count_10h + ' relationships of 10+ hearts.</span><ul class="ach_list">\n';
		output += '<li>';
		output += (count_10h >= 1) ? getAchieveString('Best Friends', '10&#x2665; with 1 person', 1) :
			getAchieveString('Best Friends', '10&#x2665; with 1 person', 0) + (1 - count_10h) + ' more';
		output += '</li>\n<li>';
		output += (count_10h >= 8) ? getAchieveString('The Beloved Farmer', '10&#x2665; with 8 people', 1) :
			getAchieveString('The Beloved Farmer', '10&#x2665; with 8 people', 0) + (8 - count_10h) + ' more';
		output += '</li></ul></div>';
		table.push(output);

		if (compareSemVer(saveInfo.version, "1.5") >= 0) {
			saveInfo.perfectionTracker[umid]["Great Friends"] = { 'count': maxed_count, 'total': maxed_total };
			pt_pct = getPTLink(maxed_count / maxed_total, true);
		}
		output = '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + farmer + ' has maxed ' + maxed_count + ' of ' + maxed_total +
			' base game villager relationships.' + pt_pct + '</span><br />';
		output += '<span class="explain">Note: for this milestone, all dateable NPCs are considered maxed at 8 hearts.</span><ul class="ach_list">\n';
		output += '<li>';
		output += (maxed_count >= maxed_total) ? getMilestoneString('Max out hearts with all base game villagers', 1) :
			getMilestoneString('Max out hearts with all base game villagers', 0) + (maxed_total - maxed_count) + ' more';
		output += '</li></ul></div>';
		table.push(output);

		output = '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
		output += '<span class="result">Individual Friendship Progress for ' + farmer + '</span><ul class="outer">';
		if (list_fam.length > 0) {
			output += '<li>Family (includes all player children)<ol class="compact">' + list_fam.sort().join('') + '</ol></li>\n';
		}
		if (list_bach.length > 0) {
			output += '<li>Datable Villagers<ol class="compact">' + list_bach.sort().join('') + '</ol></li>\n';
		}
		if (list_poly.length > 0) {
			output += '<li>Polyamory Events<ol class="compact">' + list_poly.sort().join('') + '</ol></li>\n';
		}
		if (list_other.length > 0) {
			output += '<li>Other Villagers<ol class="compact">' + list_other.sort().join('') + '</ol></li>\n';
		}
		output += '</ul></div>';
		meta.hasDetails = true; // this one always has details because of the friendship progress
		table.push(output);
		return table;
	}

	function parseFamily(xmlDoc, saveInfo) {
		var title = 'Home and Family',
			anchor = makeAnchor(title),
			version = "1.2",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [];

		meta.wedding = Number($(xmlDoc).find('countdownToWedding').text());
		meta.isHost = true;

		table[0] = parsePlayerFamily($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerFamily, meta);
		playerOutput += printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerFamily(player, saveInfo, meta) {
		var output = '',
			table = [],
			needs = [],
			count = 0,
			maxUpgrades = (meta.isHost ? 3 : 2),
			houseType = (meta.isHost ? "FarmHouse" : "Cabin"),
			farmer = $(player).children('name').html(),
			spouse = $(player).children('spouse').html(),
			umid = (compareSemVer(saveInfo.version, "1.3") >= 0) ? $(player).children('UniqueMultiplayerID').text() : saveInfo.farmerId,
			children = '(None)',
			child_name = [],
			houseUpgrades = Number($(player).children('houseUpgradeLevel').text());
		if (typeof (spouse) !== 'undefined' && spouse.length > 0) {
			if (meta.wedding > 0 && compareSemVer(saveInfo.version, "1.3") < 0) {
				spouse = spouse.slice(0, -7);
			}
			count++;
		} else if (saveInfo.partners.hasOwnProperty(umid)) {
			spouse = saveInfo.players[saveInfo.partners[umid]];
			count++;
		} else {
			spouse = '(None)';
			needs.push('还需要结婚');
		}
		// Technically, we should be searching the Friendship data for RoommateMarriage here, but for now we are hardcoding
		var title = "配偶";
		if (spouse === "Krobus") {
			title = "室友"
		}
		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + farmer + " 的" + title + ": " + ReturnCn(spouse) +
			((meta.wedding) ? '--在 ' + meta.wedding + ' 天后结婚' : '') + '</span><br />\n';
		if (saveInfo.children.hasOwnProperty(umid) && saveInfo.children[umid].length > 0) {
			child_name = saveInfo.children[umid];
			count += child_name.length;
		} else if (saveInfo.partners.hasOwnProperty(umid) && saveInfo.children.hasOwnProperty(saveInfo.partners[umid]) &&
			saveInfo.children[saveInfo.partners[umid]].length > 0) {
			child_name = saveInfo.children[saveInfo.partners[umid]];
			count += child_name.length;
		} else {
			$(player).parent().find("[" + saveInfo.ns_prefix + "\\:type='" + houseType + "'] NPC[" + saveInfo.ns_prefix + "\\:type='Child']").each(function () {
				count++;
				child_name.push($(this).find('name').html());
			});
		}
		if (child_name.length) {
			children = child_name.join('，');
			if (child_name.length === 1) {
				needs.push("一个孩子");
			}
		} else {
			needs.push("两个孩子");
		}
		output += '<span class="result">' + farmer + " 的孩子：" + children + '</span><ul class="ach_list"><li>\n';
		output += (count >= 3) ? getAchieveString('浪漫满屋', '结婚并养育2个孩子', 1) :
			getAchieveString('浪漫满屋', '结婚并养育2个孩子', 0) + needs.join('并养育');
		output += '</li></ul></div>';
		table.push(output);
		output = '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + '房屋升级' + houseUpgrades + '次';
		output += '，共' + maxUpgrades + '次</span><br /><ul class="ach_list">\n';
		output += '<li>';
		output += (houseUpgrades >= 1) ? getAchieveString('节节高升', '升级一次房屋', 1) :
			getAchieveString('节节高升', '升级一次房屋', 0) + '还需找罗宾升级' + (1 - houseUpgrades) + '次';
		output += '</li>\n<li>';
		output += (houseUpgrades >= 2) ? getAchieveString('富裕生活', '升级两次房屋', 1) :
			getAchieveString('富裕生活', '升级两次房屋', 0) + '还需找罗宾升级' + (2 - houseUpgrades) + '次';
		output += '</li>\n<li>';
		output += (houseUpgrades >= maxUpgrades) ? getMilestoneString('房屋升到满级', 1) :
			getMilestoneString('房屋升到满级', 0) + '还需找罗宾升级' + (maxUpgrades - houseUpgrades) + '次';
		output += '</li></ul></div>';
		table.push(output);
		return table;
	}

	function parseCooking(xmlDoc, saveInfo) {
		var title = 'Cooking',
			anchor = makeAnchor(title),
			version = "1.2",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [],
			id;

		meta.recipes = {
			194: "Fried Egg",
			195: "Omelet",
			196: "Salad",
			197: "Cheese Cauliflower",
			198: "Baked Fish",
			199: "Parsnip Soup",
			200: "Vegetable Medley",
			201: "Complete Breakfast",
			202: "Fried Calamari",
			203: "Strange Bun",
			204: "Lucky Lunch",
			205: "Fried Mushroom",
			206: "Pizza",
			207: "Bean Hotpot",
			208: "Glazed Yams",
			209: "Carp Surprise",
			210: "Hashbrowns",
			211: "Pancakes",
			212: "Salmon Dinner",
			213: "Fish Taco",
			214: "Crispy Bass",
			215: "Pepper Poppers",
			216: "Bread",
			218: "Tom Kha Soup",
			219: "Trout Soup",
			220: "Chocolate Cake",
			221: "Pink Cake",
			222: "Rhubarb Pie",
			223: "Cookie",
			224: "Spaghetti",
			225: "Fried Eel",
			226: "Spicy Eel",
			227: "Sashimi",
			228: "Maki Roll",
			229: "Tortilla",
			230: "Red Plate",
			231: "Eggplant Parmesan",
			232: "Rice Pudding",
			233: "Ice Cream",
			234: "Blueberry Tart",
			235: "Autumn's Bounty",
			236: "Pumpkin Soup",
			237: "Super Meal",
			238: "Cranberry Sauce",
			239: "Stuffing",
			240: "Farmer's Lunch",
			241: "Survival Burger",
			242: "Dish O' The Sea",
			243: "Miner's Treat",
			244: "Roots Platter",
			456: "Algae Soup",
			457: "Pale Broth",
			604: "Plum Pudding",
			605: "Artichoke Dip",
			606: "Stir Fry",
			607: "Roasted Hazelnuts",
			608: "Pumpkin Pie",
			609: "Radish Salad",
			610: "Fruit Salad",
			611: "Blackberry Cobbler",
			612: "Cranberry Candy",
			618: "Bruschetta",
			648: "Coleslaw",
			649: "Fiddlehead Risotto",
			651: "Poppyseed Muffin",
			727: "Chowder",
			728: "Fish Stew",
			729: "Escargot",
			730: "Lobster Bisque",
			731: "Maple Bar",
			732: "Crab Cakes"
		};
		meta.recipeTranslate = {
			"Cheese Cauli.": "Cheese Cauliflower",
			"Cookies": "Cookie",
			"Cran. Sauce": "Cranberry Sauce",
			"Dish o' The Sea": "Dish O' The Sea",
			"Eggplant Parm.": "Eggplant Parmesan",
			"Vegetable Stew": "Vegetable Medley"
		};
		meta.recipeReverse = {};

		if (compareSemVer(saveInfo.version, "1.4") >= 0) {
			meta.recipes[733] = "Shrimp Cocktail";
			meta.recipes[253] = "Triple Shot Espresso";
			meta.recipes[265] = "Seafoam Pudding";
		}

		if (compareSemVer(saveInfo.version, "1.5") >= 0) {
			meta.recipes[903] = "Ginger Ale";
			meta.recipes[904] = "Banana Pudding";
			meta.recipes[905] = "Mango Sticky Rice";
			meta.recipes[906] = "Poi";
			meta.recipes[907] = "Tropical Curry";
			meta.recipes[921] = "Squid Ink Ravioli";
		}

		if (compareSemVer(saveInfo.version, "1.6") >= 0) {
			meta.recipes["MossSoup"] = "Moss Soup";
		}

		for (id in meta.recipes) {
			if (meta.recipes.hasOwnProperty(id)) {
				meta.recipeReverse[meta.recipes[id]] = id;
			}
		}

		table[0] = parsePlayerCooking($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerCooking, meta);
		playerOutput += printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerCooking(player, saveInfo, meta) {
		/* cookingRecipes is keyed by name, but recipesCooked is keyed by ObjectInformation ID.
		 * Also, some cookingRecipes names are different from the names in ObjectInformation (e.g. Cookies vs Cookie) */
		var output = '',
			recipe_count = Object.keys(meta.recipes).length,
			known = {},
			known_count = 0,
			crafted = {},
			craft_count = 0,
			need_k = [],
			need_c = [],
			mod_known = 0,
			mod_craft = 0,
			id,
			umid = (compareSemVer(saveInfo.version, "1.3") >= 0) ? $(player).children('UniqueMultiplayerID').text() : saveInfo.farmerId,
			pt_pct = '',
			r;

		$(player).find('cookingRecipes > item').each(function () {
			var id = $(this).find('key > string').text(),
				num = Number($(this).find('value > int').text());
			if (meta.recipeTranslate.hasOwnProperty(id)) {
				id = meta.recipeTranslate[id];
			}
			if (meta.recipeReverse.hasOwnProperty(id)) {
				known[id] = num;
				known_count++;
			} else {
				console.log("Unrecognized cooking recipe: " + id);
				mod_known++;
			}
		});
		$(player).find('recipesCooked > item').each(function () {
			var id = $(this).find('key > *').text(),
				num = Number($(this).find('value > int').text());
			if (meta.recipes.hasOwnProperty(id)) {
				if (num > 0) {
					crafted[meta.recipes[id]] = num;
					craft_count++;
				}
			} else {
				if (num > 0) {
					mod_craft++;
				}
			}
		});

		if (compareSemVer(saveInfo.version, "1.5") >= 0) {
			saveInfo.perfectionTracker[umid]["Cooking"] = { 'count': craft_count, 'total': recipe_count };
			pt_pct = getPTLink(craft_count / recipe_count, true);
		}
		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + $(player).children('name').html() + " 烹饪过 " + craft_count + ' 道料理，已学会 ' + ((mod_known > 0) ? " 原版的" : "") + recipe_count
			+ ' 个食谱中的 ' + known_count + ' 个' + pt_pct + '</span>\n';
		if (mod_known > 0) {
			output += '<br /><span class="result"><span class="note">' + $(player).children('name').html() + "烹饪过" +
				mod_craft + '道mod料理，已学会' + mod_known + "个mod食谱(总数未知).</span></span>\n";
		}
		output += '<ul class="ach_list"><li>';
		output += ((craft_count + mod_craft) >= 10) ? getAchieveString('厨子', '烹饪10道不同的料理', 1) :
			getAchieveString('厨子', '烹饪10道不同的料理', 0) + '还需烹饪 ' + (10 - craft_count - mod_craft) + ' 道不同的料理';
		output += '</li>\n<li>';
		output += ((craft_count + mod_craft) >= 25) ? getAchieveString('副主厨师', '烹饪25道不同的料理', 1) :
			getAchieveString('副主厨师', '烹饪25道不同的料理', 0) + '还需烹饪 ' + (25 - craft_count - mod_craft) + ' 道不同的料理';
		output += '</li>\n<li>';
		output += ((craft_count + mod_craft) >= (recipe_count + mod_known)) ? getAchieveString('美食大厨', '烹饪每种配方', 1) :
			getAchieveString('美食大厨', '烹饪每种配方', 0) + '还需烹饪 ' + ((mod_known > 0) ? "至少" : "") +
			(recipe_count + mod_known - craft_count - mod_craft) + ' 道不同的料理';
		output += '</li></ul></div>';
		// We are assuming it is impossible to craft something without knowing the recipe.
		if ((craft_count + mod_craft) < (recipe_count + mod_known)) {
			for (id in meta.recipes) {
				if (meta.recipes.hasOwnProperty(id)) {
					r = meta.recipes[id];
					if (!known.hasOwnProperty(r)) {
						need_k.push('<li>' + wikify(ReturnCn(r)) + '</li>');
					} else if (!crafted.hasOwnProperty(r)) {
						need_c.push('<li>' + wikify(ReturnCn(r)) + '</li>');
					}
				}
			}
			meta.hasDetails = true;
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="need">还没烹饪过的料理：<ul>';
			if (need_c.length > 0) {
				output += '<li>已学会的食谱<ol>' + need_c.sort().join('') + '</ol></li>\n';
			}
			if (need_k.length > 0) {
				output += '<li>还没学会的食谱<ol>' + need_k.sort().join('') + '</ol></li>\n';
			}
			if (mod_known > 0) {
				if (mod_craft >= mod_known) {
					output += '<li>可能额外的mod食谱</li>';
				} else {
					output += '<li>加上至少' + (mod_known - mod_craft) + '个mod食谱</li > ';
				}
			}
			output += '</ul></span></div>';
		}
		return [output];
	}

	function parseCrafting(xmlDoc, saveInfo) {
		/* Manually listing all crafting recipes in the order they appear on https://stardewvalleywiki.com/Crafting
		 * A translation is needed again because of text mismatch. */
		var title = 'Crafting',
			anchor = makeAnchor(title),
			version = "1.2",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [];

		meta.recipes = ["Cherry Bomb", "Bomb", "Mega Bomb",
			"Gate", "Wood Fence", "Stone Fence", "Iron Fence", "Hardwood Fence",
			"Sprinkler", "Quality Sprinkler", "Iridium Sprinkler",
			"Mayonnaise Machine", "Bee House", "Preserves Jar", "Cheese Press", "Loom", "Keg", "Oil Maker", "Cask",
			"Basic Fertilizer", "Quality Fertilizer", "Speed-Gro", "Deluxe Speed-Gro",
			"Basic Retaining Soil", "Quality Retaining Soil",
			"Wild Seeds (Sp)", "Wild Seeds (Su)", "Wild Seeds (Fa)", "Wild Seeds (Wi)", "Ancient Seeds",
			"Wood Floor", "Straw Floor", "Weathered Floor", "Crystal Floor", "Stone Floor",
			"Wood Path", "Gravel Path", "Cobblestone Path", "Stepping Stone Path", "Crystal Path",
			"Spinner", "Trap Bobber", "Cork Bobber", "Treasure Hunter", "Dressed Spinner", "Barbed Hook",
			"Magnet", "Bait", "Wild Bait", "Crab Pot",
			"Sturdy Ring", "Warrior Ring", "Ring of Yoba", "Iridium Band",
			"Field Snack", "Life Elixir", "Oil of Garlic",
			"Torch", "Campfire", "Wooden Brazier", "Stone Brazier", "Gold Brazier", "Carved Brazier",
			"Stump Brazier", "Barrel Brazier", "Skull Brazier", "Marble Brazier", "Wood Lamp-post",
			"Iron Lamp-post", "Jack-O-Lantern",
			"Chest", "Furnace", "Scarecrow", "Seed Maker", "Staircase", "Explosive Ammo",
			"Transmute (Fe)", "Transmute (Au)",
			"Crystalarium", "Charcoal Kiln", "Lightning Rod", "Recycling Machine", "Tapper", "Worm Bin",
			"Slime Egg-Press", "Slime Incubator", "Warp Totem: Beach", "Warp Totem: Mountains", "Warp Totem: Farm",
			"Rain Totem", "Tub o' Flowers", "Wicked Statue", "Flute Block", "Drum Block"];
		meta.recipeTranslate = {
			"Oil Of Garlic": "Oil of Garlic"
		};

		if (compareSemVer(saveInfo.version, "1.3") >= 0) {
			// Wedding Ring is specifically excluded in StardewValley.Stats.checkForCraftingAchievments() so it is not listed here.
			meta.recipes.push('Wood Sign', 'Stone Sign', 'Garden Pot');
		}
		if (compareSemVer(saveInfo.version, "1.4") >= 0) {
			meta.recipes.push('Brick Floor', 'Grass Starter', 'Deluxe Scarecrow', 'Mini-Jukebox', 'Tree Fertilizer', 'Tea Sapling', 'Warp Totem: Desert');
		}
		if (compareSemVer(saveInfo.version, "1.5") >= 0) {
			meta.recipes.push("Rustic Plank Floor", "Stone Walkway Floor", "Fairy Dust", "Bug Steak", "Dark Sign", "Quality Bobber", "Stone Chest", "Monster Musk", "Mini-Obelisk", "Farm Computer", "Ostrich Incubator", "Geode Crusher", "Fiber Seeds", "Solar Panel", "Bone Mill", "Warp Totem: Island", "Thorns Ring", "Glowstone Ring", "Heavy Tapper", "Hopper", "Magic Bait", "Hyper Speed-Gro", "Deluxe Fertilizer", "Deluxe Retaining Soil", "Cookout Kit");
		}
		if (compareSemVer(saveInfo.version, "1.6") >= 0) {
			meta.recipes.push("Anvil", "Bait Maker", "Big Chest", "Big Stone Chest", "Blue Grass Starter", "Challenge Bait", "Dehydrator", "Deluxe Bait", "Deluxe Worm Bin", "Fish Smoker", "Heavy Furnace", "Mini-Forge", "Mushroom Log", "Mystic Tree Seed", "Sonar Bobber", "Statue Of Blessings", "Statue Of The Dwarf King", "Tent Kit", "Text Sign", "Treasure Totem");
		}

		table[0] = parsePlayerCrafting($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerCrafting, meta);
		playerOutput += printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerCrafting(player, saveInfo, meta) {
		var output = '',
			recipe_count,
			known = {},
			known_count = 0,
			craft_count = 0,
			need_k = [],
			need_c = [],
			mod_known = 0,
			mod_craft = 0,
			id,
			umid = (compareSemVer(saveInfo.version, "1.3") >= 0) ? $(player).children('UniqueMultiplayerID').text() : saveInfo.farmerId,
			pt_pct = '',
			r;

		recipe_count = meta.recipes.length;
		$(player).find('craftingRecipes > item').each(function () {
			var id = $(this).find('key > string').text(),
				num = Number($(this).find('value > int').text());
			if (meta.recipeTranslate.hasOwnProperty(id)) {
				id = meta.recipeTranslate[id];
			}
			if (id === 'Wedding Ring') {
				return true;
			}
			if (meta.recipes.indexOf(id) === -1) {
				mod_known++;
				if (num > 0) {
					mod_craft++
				}
				console.log("无法识别的制作食谱: " + id);
				return true;
			}
			known[id] = num;
			known_count++;
			if (num > 0) {
				craft_count++;
			} else {
				need_c.push('<li>' + wikify(ReturnCn(id)) + '</li>');
			}
		});

		if (compareSemVer(saveInfo.version, "1.5") >= 0) {
			saveInfo.perfectionTracker[umid]["Crafting"] = { 'count': craft_count, 'total': recipe_count };
			pt_pct = getPTLink(craft_count / recipe_count, true);
		}
		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + $(player).children('name').html() + " 已制作了 " + craft_count + ' 种物品，并且已知道 ' +
			recipe_count + ' 个原版制作配方中的 ' + known_count + ' 个' + pt_pct + '</span>\n';
		if (mod_known > 0) {
			output += '<br /><span class="result"><span class="note">' + $(player).children('name').html() + " 已制作了 " +
				mod_craft + ' 种mod物品，并且已知道了 ' + mod_known + " 个mod制作配方（总数未知）</span></span>\n";
		}
		output += '<ul class="ach_list"><li>';
		output += ((craft_count + mod_craft) >= 15) ? getAchieveString('D.I.Y.', '制作15种不同的物品', 1) :
			getAchieveString('D.I.Y.', '制作15种不同的物品', 0) + '还差 ' + (15 - craft_count - mod_craft) + ' 种物品未被制作';
		output += '</li>\n<li>';
		output += ((craft_count + mod_craft) >= 30) ? getAchieveString('工匠', '制作30种不同的物品', 1) :
			getAchieveString('工匠', '制作30种不同的物品', 0) + '还差 ' + (30 - craft_count - mod_craft) + ' 种物品未被制作';
		output += '</li>\n<li>';
		output += ((craft_count + mod_craft) >= (recipe_count + mod_known)) ? getAchieveString('制造大师', '制作每种物品', 1) :
			getAchieveString('制造大师', '制作每种物品', 0) + '还差 ' + ((mod_known > 0) ? "至少" : "") +
			(recipe_count + mod_known - craft_count - mod_craft) + ' 种物品未被制作';
		output += '</li></ul></div>';
		if ((craft_count + mod_craft) < (recipe_count + mod_known)) {
			meta.hasDetails = true;
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="need">未被制作：<ul>';

			if (need_c.length > 0) {
				output += '<li>已知制作配方：<ol>' + need_c.sort().join('') + '</ol></li>\n';
			}

			if (known_count < recipe_count) {
				need_k = [];
				for (id in meta.recipes) {
					if (meta.recipes.hasOwnProperty(id)) {
						r = meta.recipes[id];
						if (!known.hasOwnProperty(r)) {
							need_k.push('<li>' + wikify(ReturnCn(r)) + '</li>');
						}
					}
				}
				output += '<li>不知道制作配方：<ol>' + need_k.sort().join('') + '</ol></li>';
			}
			if (mod_known > 0) {
				if (mod_craft >= mod_known) {
					output += '<li>可能是mod的制作配方：</li>';
				} else {
					output += '<li>至少加上' + (mod_known - mod_craft) + '种mod配方</li>';
				}
			}
			output += '</ul></span></div>';
		}
		return [output];
	}

	function parseFishing(xmlDoc, saveInfo) {
		var title = 'Fishing',
			anchor = makeAnchor(title),
			version = "1.2",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [];
		meta.recipes = {
			// "Fish" category
			152: "Seaweed",
			153: "Green Algae",
			157: "White Algae",
			// "Fish -4" category
			128: "Pufferfish",
			129: "Anchovy",
			130: "Tuna",
			131: "Sardine",
			132: "Bream",
			136: "Largemouth Bass",
			137: "Smallmouth Bass",
			138: "Rainbow Trout",
			139: "Salmon",
			140: "Walleye",
			141: "Perch",
			142: "Carp",
			143: "Catfish",
			144: "Pike",
			145: "Sunfish",
			146: "Red Mullet",
			147: "Herring",
			148: "Eel",
			149: "Octopus",
			150: "Red Snapper",
			151: "Squid",
			154: "Sea Cucumber",
			155: "Super Cucumber",
			156: "Ghostfish",
			158: "Stonefish",
			159: "Crimsonfish",
			160: "Angler",
			161: "Ice Pip",
			162: "Lava Eel",
			163: "Legend",
			164: "Sandfish",
			165: "Scorpion Carp",
			682: "Mutant Carp",
			698: "Sturgeon",
			699: "Tiger Trout",
			700: "Bullhead",
			701: "Tilapia",
			702: "Chub",
			704: "Dorado",
			705: "Albacore",
			706: "Shad",
			707: "Lingcod",
			708: "Halibut",
			715: "Lobster",
			716: "Crayfish",
			717: "Crab",
			718: "Cockle",
			719: "Mussel",
			720: "Shrimp",
			721: "Snail",
			722: "Periwinkle",
			723: "Oyster",
			734: "Woodskip",
			775: "Glacierfish",
			795: "Void Salmon",
			796: "Slimejack"
		};
		meta.bobber = {};
		if (compareSemVer(saveInfo.version, "1.3") >= 0) {
			meta.recipes[798] = 'Midnight Squid';
			meta.recipes[799] = 'Spook Fish';
			meta.recipes[800] = 'Blobfish';
		}
		if (compareSemVer(saveInfo.version, "1.4") >= 0) {
			meta.recipes[269] = 'Midnight Carp';
			meta.recipes[267] = 'Flounder';
		}
		if (compareSemVer(saveInfo.version, "1.5") >= 0) {
			meta.recipes[836] = 'Stingray';
			meta.recipes[837] = 'Lionfish';
			meta.recipes[838] = 'Blue Discus';
		}
		if (compareSemVer(saveInfo.version, "1.6") >= 0) {
			meta.recipes["Goby"] = 'Goby';
			meta.recipes["CaveJelly"] = 'Cave Jelly';
			meta.recipes["RiverJelly"] = 'River Jelly';
			meta.recipes["SeaJelly"] = 'Sea Jelly';
			meta.recipes[372] = 'Clam';
			// Extended Family legendaries were added in 1.5 but not tracked until 1.6 because they are only
			// necessary for bobber unlocks
			meta.bobber[898] = 'Son of Crimsonfish';
			meta.bobber[899] = 'Ms. Angler';
			meta.bobber[900] = 'Legend II';
			meta.bobber[901] = 'Radioactive Carp';
			meta.bobber[902] = 'Glacierfish Jr.';
		}
		table[0] = parsePlayerFishing($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerFishing, meta);
		playerOutput += printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerFishing(player, saveInfo, meta) {
		// Much of the logic was ported from the crafting function which is why the variables are weirdly named
		var output = '',
			recipe_count = Object.keys(meta.recipes).length,
			count = 0,
			craft_count = 0, // for fish types
			bobber_count = 0,
			mod_count = 0,
			known = [],
			need = [],
			ignore = { // Things you can catch that aren't counted in fishing achieve
				308: 1, // Void Mayo can be caught in Witch's Swamp during "Goblin Problems"
				79: 1,  // Secret Notes can be caught directly
				797: 1, // Pearl can be caught directly in Night Market Submarine
				191: 1, // 1.4 Ornate necklace, from secret note quest
				103: 1, // 1.4 Ancient doll, can be caught on 4 corners once after viewing the "doving" TV easter egg
				73: 1,  // 1.5 Golden Walnuts
				842: 1, // 1.5 Journal Scraps
				821: 1, // 1.5 Fossilized Spine
				825: 1, // 1.5 Snake Skull
				890: 1, // 1.5 Qi Bean
				388: 1, // 1.5 Town Fountain Wood
				390: 1, // 1.5 Town Fountain Stone
				2332: 1, // 1.5 Gourmand Statue from Pirate Cave
				2334: 1, // 1.5 Pyramid Decal from Desert Southern Pond
				2396: 1, // 1.5 Iridium Krobus from Forest South of Sewer Entrance
				2418: 1, // 1.5 Lifesaver from Willy's Boat Dock
				2419: 1, // 1.5 Foliage Print
				2421: 1, // 1.5 'Boat' Painting
				2423: 1, // 1.5 'Vista' Painting
				2425: 1, // 1.5 Wall Basket
				2427: 1, // 1.5 Decorative Trash Can
				2732: 1, // 1.5 'Physics 101' Painting from Caldera
				2814: 1, // 1.5 Squirrel Figurine from Island North NW corner
				393: 1, // 1.5 Coral can be caught on Beach farm
				78: 1, // 1.5 Frog Hat from Gourmand's Cave
			},
			id,
			umid = (compareSemVer(saveInfo.version, "1.3") >= 0) ? $(player).children('UniqueMultiplayerID').text() : saveInfo.farmerId,
			pt_pct = '',
			r;

		if (compareSemVer(saveInfo.version, "1.6") < 0) {
			ignore[372] = 1; // Clams were not part of fishing collection until 1.6
			ignore[898] = 1; // 1.5 "Extended Family" Legendary -- Son of Crimsonfish
			ignore[899] = 1; // 1.5 "Extended Family" Legendary -- Ms. Angler
			ignore[900] = 1; // 1.5 "Extended Family" Legendary -- Legend II
			ignore[901] = 1; // 1.5 "Extended Family" Legendary -- Radioactive Carp
			ignore[902] = 1; // 1.5 "Extended Family" Legendary -- Glacierfish Jr.
		}

		$(player).find('fishCaught > item').each(function () {
			var raw_id = $(this).find('key > *').text(),
				num = Number($(this).find('value > ArrayOfInt > int').first().text());
			// 1.6 saves often have things like "<string>(O)145</string>" as keys so we need to account for that
			var id = raw_id;
			var paren = raw_id.indexOf(")");
			if (paren > -1) {
				id = raw_id.substring(paren + 1);
			}
			if (num > 0) {
				bobber_count++;
				if (!ignore.hasOwnProperty(id)) {
					// We are adding up the count ourselves, but the total is also stored in (stats > fishCaught) and (stats > FishCaught)
					count += num;
					if (meta.recipes.hasOwnProperty(id)) {
						craft_count++;
						known[meta.recipes[id]] = num;
					} else if (meta.bobber.hasOwnProperty(id)) {
						known[meta.bobber[id]] = num;
					} else {
						console.log("Unrecognized fish ID: " + raw_id);
						mod_count++;
					}
				}
			}
			if (ignore.hasOwnProperty(id)) {
				// DEBUGGING BETA SHIT
				console.log($(player).children('name').html() + " has caught non-fish item " + raw_id + " (" + num + ")");
			}
		});

		if (compareSemVer(saveInfo.version, "1.5") >= 0) {
			saveInfo.perfectionTracker[umid]["Fishing"] = { 'count': craft_count, 'total': recipe_count };
			pt_pct = getPTLink(craft_count / recipe_count, true);
		}
		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + $(player).children('name').html() + ' 共钓上' + count +
			'次鱼，共捕获全部' + recipe_count + '种鱼中的' + craft_count + '种' + pt_pct +
			'</span>';
		if (mod_count > 0) {
			output += '<br /><span class="result note">' + $(player).children('name').html() + " 捕获" +
				mod_count + "种mod鱼（总数未知）</span>";
		}
		output += '<ul class="ach_list"><li>';
		output += (count >= 100) ? getAchieveString('捕鱼大师', '抓住100条鱼', 1) :
			getAchieveString('捕鱼大师', '抓住100条鱼', 0) + '还需钓上' + (100 - count) + '条鱼';
		output += '</li>\n<li>';
		output += (craft_count >= 10) ? getAchieveString('渔夫', '抓住10种不同的鱼', 1) :
			getAchieveString('渔夫', '抓住10种不同的鱼', 0) + '还需捕获' + (10 - craft_count) + '种鱼';
		output += '</li>\n<li>';
		output += (craft_count >= 24) ? getAchieveString('老海员', '抓住24种不同的鱼', 1) :
			getAchieveString('老海员', '抓住24种不同的鱼', 0) + '还需捕获' + (24 - craft_count) + '种鱼';
		output += '</li>\n<li>';
		// 1.5 has some new fish that are ignored, but the logic has not changed.
		if (compareSemVer(saveInfo.version, "1.4") >= 0) {
			output += (craft_count >= recipe_count) ? getAchieveString('垂钓大师', '抓住每一种不同的鱼', 1) :
				getAchieveString('垂钓大师', '抓住每一种不同的鱼', 0) + '还需捕获' + (recipe_count - craft_count) + '种鱼';
		} else {
			output += (craft_count >= Math.min(59, recipe_count)) ? getAchieveString('垂钓大师', '抓住59种不同的鱼', 1) :
				getAchieveString('垂钓大师', '抓住59种不同的鱼', 0) + '还需捕获' + (Math.min(59, recipe_count) - craft_count) + ' 种鱼';
			if (compareSemVer(saveInfo.version, "1.3") === 0) {
				output += '</li>\n<li>';
				output += (craft_count >= recipe_count) ? getMilestoneString('抓住每一种鱼', 1) :
					getMilestoneString('抓住每一种鱼', 0) + '还需捕获' + (recipe_count - craft_count) + '种鱼';
			}
		}
		output += '</li></ul>';
		// New bobber menu stuff
		var total_bobbers = 39;
		var bobbers_unlocked = Math.min(total_bobbers, 1 + Math.floor(bobber_count / 2));
		var bobber_fish_left = 2 * (total_bobbers - 1) - bobber_count;
		if (compareSemVer(saveInfo.version, "1.6") >= 0) {
			output += '<span class="result">' + $(player).children('name').html() + ' 已经解锁全部' + total_bobbers +
				' 种浮标样式中的 ' + bobbers_unlocked + ' 种</span>';
			output += '<ul class="ach_list"><li>';
			output += (bobbers_unlocked >= total_bobbers) ? getMilestoneString('解锁每一种浮标样式', 1) :
				getMilestoneString('解锁每一种浮标样式', 0) + '还需钓上 ' + bobber_fish_left + ' 种鱼';
			output += '</li></ul>';
		}
		output += '</div>';
		if (craft_count < recipe_count) {
			need = [];
			for (id in meta.recipes) {
				if (meta.recipes.hasOwnProperty(id)) {
					r = meta.recipes[id];
					if (!known.hasOwnProperty(r)) {
						need.push('<li>' + wikify(ReturnCn(r)) + '</li>');
					}
				}
			}
			meta.hasDetails = true;
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="need">还未捕获的鱼：<ol>' + need.sort().join('') + '</ol></span></div>';
		}
		// Existing pre-1.6 saves will usually have extra fish caught that might result in them not needing any of the extended family
		// legendaries. We don't want to show the second list in that situation
		if (compareSemVer(saveInfo.version, "1.6") >= 0) {
			var achieve_left = recipe_count - craft_count;
			if ((bobbers_unlocked < total_bobbers) && (bobber_fish_left > achieve_left)) {
				need = [];
				for (id in meta.bobber) {
					if (meta.bobber.hasOwnProperty(id)) {
						r = meta.bobber[id];
						if (!known.hasOwnProperty(r)) {
							need.push('<li>' + wikify(ReturnCn(r)) + '</li>');
						}
					}
				}
				meta.hasDetails = true;
				output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
				output += '<span class="need">还未捕获的鱼（不计入图鉴）：<ol>' + need.sort().join('') + '</ol></span></div>';
			}
		}
		return [output];
	}

	function parseBasicShipping(xmlDoc, saveInfo) {
		/* Basic shipping achieve details are not easy to pull from decompiled source -- lots of filtering of
		 * ObjectInformation in StardewValley.Utility.hasFarmerShippedAllItems() with additional calls to
		 * StardewValley.Object.isPotentialBasicShippedCategory().
		 * For now, we will simply assume it matches the Collections page and hardcode everything there
		 * using wiki page https://stardewvalleywiki.com/Collections as a guideline. */
		var title = 'Basic Shipping',
			anchor = makeAnchor(title),
			version = "1.2",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [];
		meta.recipes = {
			16: "Wild Horseradish",
			18: "Daffodil",
			20: "Leek",
			22: "Dandelion",
			24: "Parsnip",
			78: "Cave Carrot",
			88: "Coconut",
			90: "Cactus Fruit",
			92: "Sap",
			174: "Large Egg (White)",
			176: "Egg (White)",
			180: "Egg (Brown)",
			182: "Large Egg (Brown)",
			184: "Milk",
			186: "Large Milk",
			188: "Green Bean",
			190: "Cauliflower",
			192: "Potato",
			248: "Garlic",
			250: "Kale",
			252: "Rhubarb",
			254: "Melon",
			256: "Tomato",
			257: "Morel",
			258: "Blueberry",
			259: "Fiddlehead Fern",
			260: "Hot Pepper",
			262: "Wheat",
			264: "Radish",
			266: "Red Cabbage",
			268: "Starfruit",
			270: "Corn",
			272: "Eggplant",
			274: "Artichoke",
			276: "Pumpkin",
			278: "Bok Choy",
			280: "Yam",
			281: "Chanterelle",
			282: "Cranberries",
			283: "Holly",
			284: "Beet",
			296: "Salmonberry",
			300: "Amaranth",
			303: "Pale Ale",
			304: "Hops",
			305: "Void Egg",
			306: "Mayonnaise",
			307: "Duck Mayonnaise",
			308: "Void Mayonnaise",
			330: "Clay",
			334: "Copper Bar",
			335: "Iron Bar",
			336: "Gold Bar",
			337: "Iridium Bar",
			338: "Refined Quartz",
			340: "Honey",
			342: "Pickles",
			344: "Jelly",
			346: "Beer",
			348: "Wine",
			350: "Juice",
			372: "Clam",
			376: "Poppy",
			378: "Copper Ore",
			380: "Iron Ore",
			382: "Coal",
			384: "Gold Ore",
			386: "Iridium Ore",
			388: "Wood",
			390: "Stone",
			392: "Nautilus Shell",
			393: "Coral",
			394: "Rainbow Shell",
			396: "Spice Berry",
			397: "Sea Urchin",
			398: "Grape",
			399: "Spring Onion",
			400: "Strawberry",
			402: "Sweet Pea",
			404: "Common Mushroom",
			406: "Wild Plum",
			408: "Hazelnut",
			410: "Blackberry",
			412: "Winter Root",
			414: "Crystal Fruit",
			416: "Snow Yam",
			417: "Sweet Gem Berry",
			418: "Crocus",
			420: "Red Mushroom",
			421: "Sunflower",
			422: "Purple Mushroom",
			424: "Cheese",
			426: "Goat Cheese",
			428: "Cloth",
			430: "Truffle",
			432: "Truffle Oil",
			433: "Coffee Bean",
			436: "Goat Milk",
			438: "Large Goat Milk",
			440: "Wool",
			442: "Duck Egg",
			444: "Duck Feather",
			446: "Rabbit's Foot",
			454: "Ancient Fruit",
			459: "Mead",
			591: "Tulip",
			593: "Summer Spangle",
			595: "Fairy Rose",
			597: "Blue Jazz",
			613: "Apple",
			634: "Apricot",
			635: "Orange",
			636: "Peach",
			637: "Pomegranate",
			638: "Cherry",
			684: "Bug Meat",
			709: "Hardwood",
			724: "Maple Syrup",
			725: "Oak Resin",
			726: "Pine Tar",
			766: "Slime",
			767: "Bat Wing",
			768: "Solar Essence",
			769: "Void Essence",
			771: "Fiber",
			787: "Battery Pack"
		};

		if (compareSemVer(saveInfo.version, "1.4") >= 0) {
			meta.recipes[807] = "Dinosaur Mayonnaise";
			meta.recipes[812] = "Roe";
			meta.recipes[445] = "Caviar";
			meta.recipes[814] = "Squid Ink";
			meta.recipes[815] = "Tea Leaves";
			meta.recipes[447] = "Aged Roe";
			meta.recipes[614] = "Green Tea";
			meta.recipes[271] = "Unmilled Rice";
		}
		if (compareSemVer(saveInfo.version, "1.5") >= 0) {
			// Note: Qi Fruit (889) is specifically excluded by Object.isIndexOkForBasicShippedCategory()
			meta.recipes[91] = "Banana";
			meta.recipes[289] = "Ostrich Egg";
			meta.recipes[829] = "Ginger";
			meta.recipes[830] = "Taro Root";
			meta.recipes[832] = "Pineapple";
			meta.recipes[834] = "Mango";
			meta.recipes[848] = "Cinder Shard";
			meta.recipes[851] = "Magma Cap";
			meta.recipes[881] = "Bone Fragment";
			meta.recipes[909] = "Radioactive Ore";
			meta.recipes[910] = "Radioactive Bar";
		}
		if (compareSemVer(saveInfo.version, "1.6") >= 0) {
			meta.recipes["Moss"] = "Moss";
			meta.recipes["MysticSyrup"] = "Mystic Syrup";
			meta.recipes["Raisins"] = "Raisins";
			meta.recipes["DriedFruit"] = "Dried Fruit";
			meta.recipes["DriedMushrooms"] = "Dried Mushrooms";
			meta.recipes["Carrot"] = "Carrot";
			meta.recipes["SummerSquash"] = "Summer Squash";
			meta.recipes["Broccoli"] = "Broccoli";
			meta.recipes["Powdermelon"] = "Powdermelon";
			meta.recipes["SmokedFish"] = "Smoked Fish";
		}
		table[0] = parsePlayerBasicShipping($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerBasicShipping, meta);
		playerOutput += printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerBasicShipping(player, saveInfo, meta) {
		// Much of the logic was ported from the crafting function which is why the variables are weirdly named
		var output = '',
			recipe_count = Object.keys(meta.recipes).length,
			crafted = {},
			craft_count = 0,
			need = [],
			id,
			umid = (compareSemVer(saveInfo.version, "1.3") >= 0) ? $(player).children('UniqueMultiplayerID').text() : saveInfo.farmerId,
			pt_pct = '',
			r;

		$(player).find('basicShipped > item').each(function () {
			var id = $(this).find('key > *').text(),
				num = Number($(this).find('value > int').text());
			if (meta.recipes.hasOwnProperty(id) && num > 0) {
				crafted[meta.recipes[id]] = num;
				craft_count++;
			}
		});

		if (compareSemVer(saveInfo.version, "1.5") >= 0) {
			saveInfo.perfectionTracker[umid]["Shipping"] = { 'count': craft_count, 'total': recipe_count };
			pt_pct = getPTLink(craft_count / recipe_count, true);
		}
		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + $(player).children('name').html() + ' 已出货' + recipe_count +
			'中的' + craft_count + '个' + pt_pct + '</span><ul class="ach_list">\n';
		output += '<li>';
		output += (craft_count >= recipe_count) ? getAchieveString('全部货物', '出货每一种物品', 1) :
			getAchieveString('全部货物', '运送每一种物品', 0) + '还需出货' + (recipe_count - craft_count) + '种物品';
		output += '</li></ul></div>';
		if (craft_count < recipe_count) {
			need = [];
			for (id in meta.recipes) {
				if (meta.recipes.hasOwnProperty(id)) {
					r = meta.recipes[id];
					if (!crafted.hasOwnProperty(r)) {
						need.push('<li>' + wikify(ReturnCn(r)) + '</li>');
					}
				}
			}
			meta.hasDetails = true;
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="need">未出货物品：<ol>' + need.sort().join('') + '</ol></span></div>';
		}
		return [output];
	}

	function parseCropShipping(xmlDoc, saveInfo) {
		// Relevant IDs were pulled from decompiled source - StardewValley.Stats.checkForShippingAchievments()
		// Note that there are 5 more "crops" for Monoculture than there are for Polyculture
		var title = 'Crop Shipping',
			anchor = makeAnchor(title),
			version = "1.2",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [];

		meta.poly_crops = {
			// Some, but not all of "Basic -75" category (All veg except fiddlehead)
			24: "Parsnip",
			188: "Green Bean",
			190: "Cauliflower",
			192: "Potato",
			248: "Garlic",
			250: "Kale",
			256: "Tomato",
			262: "Wheat",
			264: "Radish",
			266: "Red Cabbage",
			270: "Corn",
			272: "Eggplant",
			274: "Artichoke",
			276: "Pumpkin",
			278: "Bok Choy",
			280: "Yam",
			284: "Beet",
			300: "Amaranth",
			304: "Hops",
			// Some, but not all of "Basic -79" category (All fruit except Ancient, tree & forageables)
			252: "Rhubarb",
			254: "Melon",
			258: "Blueberry",
			260: "Hot Pepper",
			268: "Starfruit",
			282: "Cranberries",
			398: "Grape",
			400: "Strawberry",
			// Others
			433: "Coffee Bean"
		};
		meta.mono_extras = {
			// Ancient Fruit and 4 of the "Basic -80" flowers
			454: "Ancient Fruit",
			591: "Tulip",
			593: "Summer Spangle",
			595: "Fairy Rose",
			597: "Blue Jazz"
		};

		table[0] = parsePlayerCropShipping($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerCropShipping, meta);
		playerOutput += printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerCropShipping(player, saveInfo, meta) {
		// Much of the logic was ported from the crafting function which is why the variables are weirdly named
		var output = '',
			recipe_count = Object.keys(meta.poly_crops).length,
			crafted = {},
			craft_count = 0,
			max_ship = 0,
			max_crop = "任何一种作物",
			need = [],
			id,
			r,
			n,
			farmer = $(player).children('name').html();

		$(player).find('basicShipped > item').each(function () {
			var id = $(this).find('key > *').text(),
				num = Number($(this).find('value > int').text());
			if (meta.poly_crops.hasOwnProperty(id)) {
				crafted[meta.poly_crops[id]] = num;
				if (num >= 15) {
					craft_count++;
				}
				if (num > max_ship) {
					max_ship = num;
					max_crop = meta.poly_crops[id];
				}
			} else if (meta.mono_extras.hasOwnProperty(id)) {
				if (num > max_ship) {
					max_ship = num;
					max_crop = meta.mono_extras[id];
				}
			}
		});

		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += (max_ship > 0) ? '<span class="result">' + farmer + ' 出货了' + ReturnCn(max_crop) + '最多' + max_ship + '个</span>' :
			'<span class="result">' + farmer + ' 还没出货过任何农作物</span>';
		output += '<ul class="ach_list"><li>\n';
		output += (max_ship >= 300) ? getAchieveString('单一栽培', '出货一种作物300个', 1) :
			getAchieveString('单一栽培', '出货一种作物300个', 0) + '还需出货' + (300 - max_ship) + '个' + ReturnCn(max_crop);
		output += '</li></ul>\n';
		output += '<span class="result">' + farmer + ' 已从' + recipe_count + '种不同的作物中的' +
			craft_count + '种出货了单种超过15个</span><ul class="ach_list">\n<li>';
		output += (craft_count >= recipe_count) ? getAchieveString('混合栽培', '每种作物出货15个', 1) :
			getAchieveString('混合栽培', '每种作物出货15个', 0) + '还需出货' + (recipe_count - craft_count) + '种超过15个';
		output += '</li></ul></div>';
		if (craft_count < recipe_count) {
			need = [];
			for (id in meta.poly_crops) {
				if (meta.poly_crops.hasOwnProperty(id)) {
					r = meta.poly_crops[id];
					if (!crafted.hasOwnProperty(r)) {
						need.push('<li>' + wikify(ReturnCn(r)) + ' -- 差15个</li>');
					} else {
						n = Number(crafted[r]);
						if (n < 15) {
							need.push('<li>' + wikify(ReturnCn(r)) + ' -- 差' + (15 - n) + '个</li>');
						}
					}
				}
			}
			meta.hasDetails = true;
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="need">还未出货达成目标的作物：<ol>' + need.sort().join('') + '</ol></span></div>';
		}
		return [output];
	}

	function parseSkills(xmlDoc, saveInfo) {
		var title = 'Skills',
			output = '',
			anchor = makeAnchor(title),
			version = "1.2",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [];

		meta.skills = ["耕种", "钓鱼", "采集", "采矿", "战斗"],
			meta.next_level = [100, 380, 770, 1300, 2150, 3300, 4800, 6900, 10000, 15000];

		table[0] = parsePlayerSkills($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerSkills, meta);
		playerOutput += printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerSkills(player, saveInfo, meta) {
		var output = '',
			xp = {},
			level = 10,
			count = 0,
			umid = (compareSemVer(saveInfo.version, "1.3") >= 0) ? $(player).children('UniqueMultiplayerID').text() : saveInfo.farmerId,
			isMale = ($(player).children('isMale').text() === "true"),
			pt_pct = '',
			pt_level = 0,
			title = '',
			masteryXP = 0,
			need = [];

		for (var i = 0; i < meta.skills.length; i++) {
			var num = saveInfo.data[umid].experiencePoints[i];
			xp[meta.skills[i]] = num;
			// The current skill levels are also stored separately in 'player > fishingLevel' (and similar)
			// which we will use later, but for now we figure it out as we process the xp
			if (num < 15000) {
				for (var j = 0; j < 10; j++) {
					if (meta.next_level[j] > num) {
						level = j;
						break;
					}
				}
				need.push('<li>' + wikify(meta.skills[i]) + ' (level ' + level + ') --  需要 ' +
					addCommas(meta.next_level[level] - num) + ' 经验升级，需要 ' + addCommas(15000 - num) + ' 经验才能满级。</li>\n');
			} else {
				count++;
			}
		}

		// We could tally this up while we are checking the xp values, but since we need to account for Luck anyway, we might
		//  as well just directly calculate this the same way the game does.
		pt_level = Math.floor((Number($(player).find('farmingLevel').text()) + Number($(player).find('miningLevel').text()) +
			Number($(player).find('combatLevel').text()) + Number($(player).find('foragingLevel').text()) +
			Number($(player).find('fishingLevel').text()) + Number($(player).find('luckLevel').text())) / 2);
		if (compareSemVer(saveInfo.version, "1.5") >= 0) {
			pt_pct = getPTLink((pt_level / .25) + "%");
			saveInfo.perfectionTracker[umid]["Skills"] = { 'count': pt_level, 'total': 25 };
		}
		switch (pt_level) {
			case 0:
			case 1:
			case 2:
				title = "新人"; break;
			case 3:
			case 4:
				title = "新手"; break;
			case 5:
			case 6:
				title = "乡巴佬"; break;
			case 7:
			case 8:
				title = "牛仔"; break;
			case 9:
			case 10:
				title = "农场工人"; break;
			case 11:
			case 12:
				title = "锄地机"; break;
			case 13:
			case 14:
				title = "小农场主"; break;
			case 15:
			case 16:
				title = "农夫条款"; break;
			case 17:
			case 18:
				title = "农场" + (isMale ? "男孩" : "女孩"); break;
			case 19:
			case 20:
				title = "农场管家"; break;
			case 21:
			case 22:
				title = "种植者"; break;
			case 23:
			case 24:
				title = "牧场主"; break;
			case 25:
			case 26:
				title = "农夫"; break;
			case 27:
			case 28:
				title = "农业学家"; break;
			case 29:
				title = "作物能手"; break;
			default:
				title = "农场之王";
		}

		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + saveInfo.players[umid] +
			' 的<a href="https://zh.stardewvalleywiki.com/技能#技能头衔" target="_blank">技能等级</a>总数：' + pt_level +
			'，技能头衔：' + title + '。' + pt_pct + '</span><br />';
		output += '<span class="result">' + saveInfo.players[umid] + ' 在五个技能中，有 ' + count +
			' 个达到了满级</span><br />';
		output += '<ul class="ach_list"><li>';
		output += (count >= 1) ? getAchieveString('非凡天赋', '任意一个技能达到满级', 1) :
			getAchieveString('非凡天赋', '任意一个技能达到满级', 0) + '未完成';
		output += '</li>\n<li>';
		output += (count >= 5) ? getAchieveString('5种技能大师', '每种技能都达到满级', 1) :
			getAchieveString('5种技能大师', '每种技能都达到满级', 0) + '还差 ' + (5 - count) + ' 个技能未到满级';
		output += '</li></ul></div>';

		if (need.length > 0) {
			meta.hasDetails = true;
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="need">未满级技能：<ol>' + need.sort().join('') + '</ol></span></div>';
		}
		return [output];
	}

	function parseSkillMastery(xmlDoc, saveInfo) {
		var title = 'Skill Mastery',
			output = '',
			anchor = makeAnchor(title),
			version = "1.6",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [];

		meta.skills = ["耕种", "钓鱼", "采集", "采矿", "战斗"];
		meta.nextLevel = [0, 10000, 25000, 45000, 70000, 100000];

		if (compareSemVer(saveInfo.version, version) < 0) {
			return '';
		}
		table[0] = parsePlayerSkillMastery($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerSkillMastery, meta);
		playerOutput += printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerSkillMastery(player, saveInfo, meta) {
		var output = '',
			xp = {},
			i = 0,
			num,
			maxCount = 0,
			perkCount = 0,
			umid = $(player).children('UniqueMultiplayerID').text(),
			masteryXP = 0,
			masteryNextLvl,
			masteryNextXP,
			unchosen = 0,
			needPerk = [];

		if (saveInfo.data[umid].stats.hasOwnProperty("MasteryExp")) {
			masteryXP = saveInfo.data[umid].stats.MasteryExp;
		}
		if (masteryXP < 100000) {
			for (i = 1; i <= 5; i++) {
				if (masteryXP < meta.nextLevel[i]) {
					masteryNextLvl = i;
					break;
				}
			}
			masteryNextXP = meta.nextLevel[masteryNextLvl];
		}
		for (i = 0; i < meta.skills.length; i++) {
			var id = "mastery_" + i;
			if (saveInfo.data[umid].stats.hasOwnProperty(id)) {
				perkCount++;
			} else {
				needPerk.push('<li>' + meta.skills[i] + '</li>');
			}
			if (saveInfo.data[umid].experiencePoints[i] >= 15000) {
				maxCount++;
			}
		}
		if (masteryNextLvl > perkCount + 1) {
			unchosen = masteryNextLvl - perkCount - 1;
		}

		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + saveInfo.players[umid] + ' 的 ' + meta.skills.length + ' 个技能中有 ' + maxCount + ' 个达到了满级。</span><br />';
		output += '<ul class="ach_list"><li>\n';
		output += (maxCount >= 5) ? getMilestoneString('解锁爷爷的精通洞穴', 1) :
			getMilestoneString('解锁爷爷的精通洞穴', 0) + '还差 ' + (meta.skills.length - maxCount) +
			' 个技能未满级 -- <a href="#sec_Skills">见上方技能的详情</a>';
		output += '</li></ul><span class="result">' + saveInfo.players[umid] + ' 已获得 ' + addCommas(masteryXP) + ' 点精通经验值。</span><br />';
		output += '<ul class="ach_list"><li>\n';
		output += (masteryXP >= 100000) ? getMilestoneString('获得100,000精通经验值', 1) :
			getMilestoneString('获得100,000精通经验值', 0) + '还需 ' + addCommas(masteryNextXP - masteryXP) + ' 精通经验完成一级精通，还需要 ' +
			addCommas(100000 - masteryXP) + ' 精通经验完成全部精通';
		output += '</li></ul><span class="result">' + saveInfo.players[umid] + ' 已选择 ' + meta.skills.length + ' 个精通技能中的 ' + perkCount + ' 个。</span><br />';
		output += '<ul class="ach_list"><li>\n';
		output += (perkCount >= 5) ? getMilestoneString('精通所有技能', 1) :
			getMilestoneString('精通所有技能', 0) + '还差 ' + (meta.skills.length - perkCount) + ' 个';
		output += (perkCount < 5 && unchosen > 0) ? ' 有 ' + unchosen + ' 级精通但未选择精通技能。' : '.';
		output += '</li></ul></div>';

		if (needPerk.length > 0) {
			meta.hasDetails = true;
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="need">未精通的技能:<ol>' + needPerk.sort().join('') + '</ol></span></div>';
		}
		return [output];
	}

	function parseMuseum(xmlDoc, saveInfo) {
		var title = 'Museum Collection',
			anchor = makeAnchor(title),
			version = "1.2",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [],
			museum = $(xmlDoc).find("locations > GameLocation[" + saveInfo.ns_prefix + "\\:type='LibraryMuseum']");

		meta.artifacts = {
			96: "Dwarf Scroll I",
			97: "Dwarf Scroll II",
			98: "Dwarf Scroll III",
			99: "Dwarf Scroll IV",
			100: "Chipped Amphora",
			101: "Arrowhead",
			103: "Ancient Doll",
			104: "Elvish Jewelry",
			105: "Chewing Stick",
			106: "Ornamental Fan",
			107: "Dinosaur Egg",
			108: "Rare Disc",
			109: "Ancient Sword",
			110: "Rusty Spoon",
			111: "Rusty Spur",
			112: "Rusty Cog",
			113: "Chicken Statue",
			114: "Ancient Seed",
			115: "Prehistoric Tool",
			116: "Dried Starfish",
			117: "Anchor",
			118: "Glass Shards",
			119: "Bone Flute",
			120: "Prehistoric Handaxe",
			121: "Dwarvish Helm",
			122: "Dwarf Gadget",
			123: "Ancient Drum",
			124: "Golden Mask",
			125: "Golden Relic",
			126: "Strange Doll (green)",
			127: "Strange Doll (yellow)",
			579: "Prehistoric Scapula",
			580: "Prehistoric Tibia",
			581: "Prehistoric Skull",
			582: "Skeletal Hand",
			583: "Prehistoric Rib",
			584: "Prehistoric Vertebra",
			585: "Skeletal Tail",
			586: "Nautilus Fossil",
			587: "Amphibian Fossil",
			588: "Palm Fossil",
			589: "Trilobite"
		};
		meta.minerals = {
			60: "Emerald",
			62: "Aquamarine",
			64: "Ruby",
			66: "Amethyst",
			68: "Topaz",
			70: "Jade",
			72: "Diamond",
			74: "Prismatic Shard",
			80: "Quartz",
			82: "Fire Quartz",
			84: "Frozen Tear",
			86: "Earth Crystal",
			538: "Alamite",
			539: "Bixite",
			540: "Baryte",
			541: "Aerinite",
			542: "Calcite",
			543: "Dolomite",
			544: "Esperite",
			545: "Fluorapatite",
			546: "Geminite",
			547: "Helvite",
			548: "Jamborite",
			549: "Jagoite",
			550: "Kyanite",
			551: "Lunarite",
			552: "Malachite",
			553: "Neptunite",
			554: "Lemon Stone",
			555: "Nekoite",
			556: "Orpiment",
			557: "Petrified Slime",
			558: "Thunder Egg",
			559: "Pyrite",
			560: "Ocean Stone",
			561: "Ghost Crystal",
			562: "Tigerseye",
			563: "Jasper",
			564: "Opal",
			565: "Fire Opal",
			566: "Celestine",
			567: "Marble",
			568: "Sandstone",
			569: "Granite",
			570: "Basalt",
			571: "Limestone",
			572: "Soapstone",
			573: "Hematite",
			574: "Mudstone",
			575: "Obsidian",
			576: "Slate",
			577: "Fairy Stone",
			578: "Star Shards"
		};
		meta.donated = {};

		var artifact_count = Object.keys(meta.artifacts).length,
			mineral_count = Object.keys(meta.minerals).length,
			donated_count = 0,
			museum_count = artifact_count + mineral_count;


		$(museum).find('museumPieces > item').each(function () {
			var id = Number($(this).find('value > *').text());
			if (meta.artifacts.hasOwnProperty(id) || meta.minerals.hasOwnProperty(id)) {
				meta.donated[id] = 1;
			}
		});
		donated_count = Object.keys(meta.donated).length;

		output = '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		var intro;
		if (saveInfo.numPlayers > 1) {
			intro = saveInfo.farmName + ' 农场中的所有人已经';
		} else {
			intro = saveInfo.players[saveInfo.farmerId] + ' 已经';
		}
		output += '<span class="result">' + intro + '向博物馆捐赠了 ' + museum_count + ' 件物品中的 ' +
			donated_count + ' 件。</span><ul class="ach_list">\n';
		output += '<li>';
		output += (donated_count >= 40) ? getAchieveString('无主宝藏', '向博物馆捐赠40种不同的物品', 1) :
			getAchieveString('无主宝藏', '向博物馆捐赠40种不同的物品', 0) + '还需捐赠' + (40 - donated_count) + '件物品';
		output += '</li>\n<li>';
		output += (donated_count >= 60) ? getMilestoneString('捐赠足够的物品 (60) 以获得生锈的钥匙', 1) :
			getMilestoneString('捐赠足够的物品 (60) 以获得生锈的钥匙', 0) + '还需捐赠 ' + (60 - donated_count) + ' 件物品';
		output += '</li>\n<li>';
		output += (donated_count >= museum_count) ? getAchieveString('全套收集', '完成博物馆的收集', 1) :
			getAchieveString('全套收集', '完成博物馆的收集', 0) + '还需捐赠' + (museum_count - donated_count) + '件物品';
		output += '</li></ul></div>';
		if (donated_count < museum_count) {
			meta.hasDetails = true;
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="need">请参阅下面的捐赠项目</span><br /><br /></div>';
		}

		table[0] = parsePlayerMuseum($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerMuseum, meta);
		playerOutput += printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + output + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerMuseum(player, saveInfo, meta) {
		var output = '',
			donated_count = Object.keys(meta.donated).length,
			artifact_count = Object.keys(meta.artifacts).length,
			mineral_count = Object.keys(meta.minerals).length,
			museum_count = artifact_count + mineral_count,
			found = {},
			found_art = 0,
			found_min = 0,
			need_art = [],
			need_min = [],
			need = [],
			id,
			r,
			farmer = $(player).children('name').html();

		$(player).find('archaeologyFound > item').each(function () {
			var id = $(this).find('key > *').text(),
				num = Number($(this).find('value > ArrayOfInt > int').first().text());
			if (meta.artifacts.hasOwnProperty(id) && num > 0) {
				found[id] = num;
				found_art++;
			}
		});
		$(player).find('mineralsFound > item').each(function () {
			var id = $(this).find('key > *').text(),
				num = Number($(this).find('value > int').text());
			if (meta.minerals.hasOwnProperty(id) && num > 0) {
				found[id] = num;
				found_min++;
			}
		});

		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + farmer + ' 找到 ' + artifact_count + ' 种文物中的 ' + found_art + ' 种。</span><br />\n';
		output += '<span class="result">' + farmer + ' 找到 ' + mineral_count + ' 种矿物中的 ' + found_min +
			' 种。</span><ul class="ach_list">\n';
		output += '<li>';
		output += '</li>\n<li>';
		output += (found_art >= artifact_count) ? getMilestoneString('找到所有文物', 1) :
			getMilestoneString('找到所有文物', 0) + '还差 ' + (artifact_count - found_art) + ' 种文物';
		output += '</li>\n<li>';
		output += (found_min >= mineral_count) ? getMilestoneString('找到所有矿物', 1) :
			getMilestoneString('找到所有矿物', 0) + '还差 ' + (mineral_count - found_min) + ' 种矿物';
		output += '</li></ul></div>';

		if (donated_count < museum_count || (found_art + found_min) < museum_count) {
			for (id in meta.artifacts) {
				if (meta.artifacts.hasOwnProperty(id)) {
					r = meta.artifacts[id];
					need = [];
					if (!found.hasOwnProperty(id)) {
						need.push('找到');
					}
					if (!meta.donated.hasOwnProperty(id)) {
						need.push('捐赠');
					}
					if (need.length > 0) {
						need_art.push('<li>' + wikify(ReturnCn(r)) + ' -- 没有' + need.join("，没有") + '</li>');
					}
				}
			}
			for (id in meta.minerals) {
				if (meta.minerals.hasOwnProperty(id)) {
					r = meta.minerals[id];
					need = [];
					if (!found.hasOwnProperty(id)) {
						need.push('找到');
					}
					if (!meta.donated.hasOwnProperty(id)) {
						need.push('捐赠');
					}
					if (need.length > 0) {
						need_min.push('<li>' + wikify(ReturnCn(r)) + ' -- 没有' + need.join("，没有") + '</li>');
					}
				}
			}
			meta.hasDetails = true;
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="need">还未捐赠的物品：<ul>';
			if (need_art.length > 0) {
				output += '<li>文物：<ol>' + need_art.sort().join('') + '</ol></li>\n';
			}
			if (need_min.length > 0) {
				output += '<li>矿物：<ol>' + need_min.sort().join('') + '</ol></li>\n';
			}
			output += '</ul></span></div>';
		}

		return [output];
	}

	function parseMonsters(xmlDoc, saveInfo) {
		/* Conditions & details from decompiled source StardewValley.Locations.AdventureGuild.gil()
		 * The game counts some monsters which are not currently available; we will count them too
		 * just in case they are in someone's save file, but not list them in the details. */
		var title = 'Monster Hunting',
			anchor = makeAnchor(title),
			version = "1.2",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [];
		meta.goals = {
			"Slimes": 1000,
			"Void Spirits": 150,
			"Bats": 200,
			"Skeletons": 50,
			"Cave Insects": 125,
			"Duggies": 30,
			"Dust Sprites": 500,
		};
		meta.categories = {
			"Green Slime": "Slimes",
			"Frost Jelly": "Slimes",
			"Sludge": "Slimes",
			"Shadow Brute": "Void Spirits",
			"Shadow Shaman": "Void Spirits",
			"Shadow Guy": "Void Spirits", // not in released game
			"Shadow Girl": "Void Spirits", // not in released game
			"Bat": "Bats",
			"Frost Bat": "Bats",
			"Lava Bat": "Bats",
			"Skeleton": "Skeletons",
			"Skeleton Mage": "Skeletons", // not in released game
			"Bug": "Cave Insects",
			"Fly": "Cave Insects", // wiki calls this "Cave Fly"
			"Grub": "Cave Insects",
			"Duggy": "Duggies",
			"Dust Spirit": "Dust Sprites"
		};
		meta.monsters = {
			"Slimes": ["Green Slime", "Frost Jelly", "Sludge"],
			"Void Spirits": ["Shadow Brute", "Shadow Shaman"],
			"Bats": ["Bat", "Frost Bat", "Lava Bat"],
			"Skeletons": ["Skeleton"],
			"Cave Insects": ["Bug", "Cave Fly", "Grub"],
			"Duggies": ["Duggy"],
			"Dust Sprites": ["Dust Spirit"]
		};
		if (compareSemVer(saveInfo.version, "1.4") >= 0) {
			meta.goals["Rock Crabs"] = 60;
			meta.goals["Mummies"] = 100;
			meta.goals["Pepper Rex"] = 50;
			meta.goals["Serpents"] = 250;
			meta.categories["Rock Crab"] = "Rock Crabs";
			meta.categories["Lava Crab"] = "Rock Crabs";
			meta.categories["Iridium Crab"] = "Rock Crabs";
			meta.categories["Mummy"] = "Mummies";
			meta.categories["Pepper Rex"] = "Pepper Rex";
			meta.categories["Serpent"] = "Serpents";
			meta.monsters["Rock Crabs"] = ["Rock Crab", "Lava Crab", "Iridium Crab"];
			meta.monsters["Mummies"] = ["Mummy"];
			meta.monsters["Pepper Rex"] = ["Pepper Rex"];
			meta.monsters["Serpents"] = ["Serpent"];
		}
		if (compareSemVer(saveInfo.version, "1.5") >= 0) {
			meta.goals["Flame Spirits"] = 150;
			meta.categories["Magma Sprite"] = "Flame Spirits";
			meta.categories["Magma Sparker"] = "Flame Spirits";
			meta.monsters["Flame Spirits"] = ["Magma Sprite", "Magma Sparker"];
			meta.categories["Tiger Slime"] = "Slimes";
			meta.monsters["Slimes"].push("Tiger Slime");
			meta.categories["Shadow Sniper"] = "Void Spirits";
			meta.monsters["Void Spirits"].push("Shadow Sniper");
			// These are included now
			meta.categories["Magma Duggy"] = "Duggies";
			meta.monsters["Duggies"].push("Magma Duggy");
			meta.categories["Iridium Bat"] = "Bats";
			meta.monsters["Bats"].push("Iridium Bat");
			meta.categories["Royal Serpent"] = "Serpents";
			meta.monsters["Serpents"].push("Royal Serpent");
			// These exist now in hard mode so need to be included in output
			meta.monsters["Skeletons"].push("Skeleton Mage");
		}
		if (compareSemVer(saveInfo.version, "1.6") >= 0) {
			meta.goals["Cave Insects"] = 80;
		}
		table[0] = parsePlayerMonsters($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerMonsters, meta);
		playerOutput += printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerMonsters(player, saveInfo, meta) {
		var output = '',
			table = [],
			goal_count = Object.keys(meta.goals).length,
			killed = [],
			completed = 0,
			need = [],
			id,
			umid = (compareSemVer(saveInfo.version, "1.3") >= 0) ? $(player).children('UniqueMultiplayerID').text() : saveInfo.farmerId,
			pt_pct = '',
			stats,
			mineLevel = Number($(player).children('deepestMineLevel').text()),
			hasSkullKey = $(player).children('hasSkullKey').text(),
			farmer = $(player).children('name').html();

		// Have seen some inconsitencies in multiplayer, so will use presence of skull key to override the level & bump it to 120.
		if (hasSkullKey === 'true') {
			mineLevel = Math.max(120, mineLevel);
		}
		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		if (mineLevel <= 0) {
			output += '<span class="result">' + farmer + ' 还没见过矿洞。</span><br />\n';
		} else {
			output += '<span class="result">' + farmer + ' 已到达矿洞 ' + Math.min(mineLevel, 120) +
				' of the mines.</span><br />\n';
			output += '<span class="result">' + farmer + ((mineLevel > 120) ?
				(' 已到达骷髅矿洞 ' + (mineLevel - 120) + ' 层。') :
				' 还没见过骷髅矿洞。');
			output += '.</span></div>';
		}
		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<ul class="ach_list"><li>\n';
		output += (mineLevel >= 120) ? getAchieveString('底部', '到达矿洞120层', 1) :
			getAchieveString('底部', '到达矿洞120层', 0) + '还差 ' + (120 - mineLevel) + ' 层到底';
		output += '</li></ul></div>';

		if (compareSemVer(saveInfo.version, "1.6") >= 0) {
			var totalMonstersKilled = saveInfo.data[umid].stats.hasOwnProperty("monstersKilled") ? Number(saveInfo.data[umid].stats["monstersKilled"]) : 0;
			output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
			output += '<span class="result">' + farmer + ' 已经击杀 ' + addCommas(totalMonstersKilled) +
				' 只怪物</span><br />\n';
			output += '<ul class="ach_list"><li>\n';
			output += (totalMonstersKilled >= 1000) ? getMilestoneString('进入探险家公会的卧室', 1) :
				getMilestoneString('进入探险家公会的卧室', 0) + '还需击杀 ' + (1000 - totalMonstersKilled) +
				' 只怪物';
			output += '</li></ul></div>';
		}

		if (compareSemVer(saveInfo.version, "1.3") >= 0) {
			stats = $(player).find('stats > specificMonstersKilled');
		} else {
			// In 1.2, stats are under the root SaveGame so we must go back up the tree
			stats = $(player).parent().find('stats > specificMonstersKilled');
		}

		$(stats).children('item').each(function () {
			var id = $(this).find('key > string').text(),
				num = Number($(this).find('value > int').text()),
				old = 0;
			if (meta.categories.hasOwnProperty(id) && num > 0) {
				if (killed.hasOwnProperty(meta.categories[id])) {
					old = killed[meta.categories[id]];
				}
				killed[meta.categories[id]] = (old + num);
			}
		});
		for (id in meta.goals) {
			if (meta.goals.hasOwnProperty(id)) {
				if (killed.hasOwnProperty(id)) {
					if (killed[id] >= meta.goals[id]) {
						completed++;
					} else {
						need.push('<li>' + ReturnCn(id) + ' -- 还需击杀 ' + (meta.goals[id] - killed[id]) + ' 只：' +
							meta.monsters[id].map(tamp => ReturnCn(tamp)).map(wikimap).join('，') + '</li>');
					}
				} else {
					need.push('<li>' + ReturnCn(id) + ' -- 还需击杀 ' + meta.goals[id] + ' 只：' +
						meta.monsters[id].map(tamp => ReturnCn(tamp)).map(wikimap).join('，') + '</li>');
				}
			}
		}

		if (compareSemVer(saveInfo.version, "1.5") >= 0) {
			saveInfo.perfectionTracker[umid]["Monsters"] = (completed >= goal_count);
			pt_pct = getPTLink((completed >= goal_count) ? "Yes" : "No");
		}
		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + farmer + ' 已完成 ' + goal_count + ' 个杀怪目标中的 ' + completed +
			' 个。' + pt_pct + '</span><ul class="ach_list">\n';
		output += '<li>';
		output += (completed >= goal_count) ? getAchieveString('城镇守护者', '完成冒险公会猎人会长的全部任务', 1) :
			getAchieveString('城镇守护者', '完成冒险公会猎人会长的全部任务', 0) + '还差 ' + (goal_count - completed) + ' 个杀怪目标未完成';
		output += '</li></ul></div>';
		if (need.length > 0) {
			meta.hasDetails = true;
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="need">未完成的杀怪目标：<ol>' + need.sort().join('') + '</ol></span></div>';
		}
		table.push(output);
		return table;
	}

	function parseQuests(xmlDoc, saveInfo) {
		var title = 'Quests',
			anchor = makeAnchor(title),
			version = "1.2",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [];

		table[0] = parsePlayerQuests($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerQuests, meta);
		playerOutput += printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerQuests(player, saveInfo, meta) {
		var output = '',
			count;

		if (compareSemVer(saveInfo.version, "1.6") >= 0) {
			count = Number($(player).find('stats > Values > item:contains("questsCompleted") > value > *').text());
		} else if (compareSemVer(saveInfo.version, "1.3") >= 0) {
			count = Number($(player).find('stats > questsCompleted').text());
		} else {
			// In 1.2, stats are under the root SaveGame so we must go back up the tree
			count = Number($(player).parent().find('stats > questsCompleted').text());
		}

		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + $(player).children('name').html() + ' 已完成 ' + count + ' 个“需要帮助”任务。</span><br />\n';
		output += '<ul class="ach_list"><li>';
		output += (count >= 10) ? getAchieveString('听差', '完成10个“需要帮助”任务', 1) :
			getAchieveString('听差', '完成10个“需要帮助”任务', 0) + '还差 ' + (10 - count) + ' 个“需要帮助”任务';
		output += '</li>\n<li>';
		output += (count >= 40) ? getAchieveString('帮了大忙', '完成40个“需要帮助”任务', 1) :
			getAchieveString('帮了大忙', '完成40个“需要帮助”任务', 0) + '还差 ' + (40 - count) + ' 个“需要帮助”任务';
		output += '</li></ul></div>';
		return [output];
	}

	function parseStardrops(xmlDoc, saveInfo) {
		/* mailReceived identifiers from decompiled source of StardewValley.Utility.foundAllStardrops()
		 * descriptions are not from anywhere else and are just made up. */
		var title = 'Stardrops',
			anchor = makeAnchor(title),
			version = "1.2",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [];
		meta.stardrops = {
			'CF_Fair': '在星露谷展览会上购买，价格为2,000星星币。',
			'CF_Mines': '矿井首次到达100层，打开宝箱获得。',
			'CF_Spouse': '当与配偶（或者室友科罗布斯）好感度到达12.5颗心时(3125点好感度)，与其对话获得<br>多人游戏中，如果两名玩家结婚，婚礼结束后回到农舍中即可获得。',
			'CF_Sewer': '在下水道的科罗布斯处购买，价格为20,000金。',
			'CF_Statue': '给秘密森林的老坎诺利大师石像赠予一个宝石甜莓后获得。',
			'CF_Fish': '完成垂钓大师成就（钓起所有67种鱼）后，从威利的信中收到。',
			'museumComplete': '完成全套收集成就（捐赠所有95种物品到博物馆）后，从博物馆获得。'
		};

		table[0] = parsePlayerStardrops($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerStardrops, meta);
		playerOutput += printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerStardrops(player, saveInfo, meta) {
		var output = '',
			count = 0,
			id,
			umid = (compareSemVer(saveInfo.version, "1.3") >= 0) ? $(player).children('UniqueMultiplayerID').text() : saveInfo.farmerId,
			pt_pct = '',
			need = [],
			staminaOverride = false,
			stardrop_count = Object.keys(meta.stardrops).length;

		for (id in meta.stardrops) {
			if (meta.stardrops.hasOwnProperty(id)) {
				var altTrigger = (id == 'CF_Mines' &&
					saveInfo.data[umid].chestConsumedMineLevels.hasOwnProperty(100) &&
					saveInfo.data[umid].chestConsumedMineLevels[100] === 'true');
				if (saveInfo.data[umid].mailReceived.hasOwnProperty(id) || altTrigger) {
					count++;
				} else {
					need.push('<li>' + meta.stardrops[id] + '</li>');
				}
			}
		}
		if (saveInfo.data[umid].mailReceived.hasOwnProperty("gotMaxStamina")) {
			staminaOverride = true;
		}

		if (compareSemVer(saveInfo.version, "1.5") >= 0) {
			saveInfo.perfectionTracker[umid]["Stardrops"] = (count >= stardrop_count);
			pt_pct = getPTLink((staminaOverride || count >= stardrop_count) ? "Yes" : "No");
		}
		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + saveInfo.players[umid] + (staminaOverride ? ' 已经' : ' 还没') + '达到 508 体力值（当前已达到 ' + saveInfo.data[umid].maxStamina + ' 体力值）</span><br/>';
		if (staminaOverride && count < stardrop_count) {
			output += '<span class="result note">Note: Stamina will override stardrop marker count for achievements and perfection.</span><br/>';
		}
		output += '<span class="result">' + saveInfo.players[umid] + ' 已经收集到 ' + stardrop_count +
			' 颗星之果实中的 ' + count + ' 颗' + pt_pct + '</span><br/>';
		output += '<ul class="ach_list"><li>';
		output += (count >= stardrop_count) ? getAchieveString('星之果实的神秘', '找到所有星之果实', 1) :
			getAchieveString('星之果实的神秘', '找到所有星之果实', 0) + '还差 ' + (stardrop_count - count) + ' 颗星之果实没被找到';
		output += '</li></ul></div>';
		if (need.length > 0) {
			meta.hasDetails = true;
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="need">没被找到的星之果实：<ol>' + need.sort().join('') + '</ol></span></div>';
		}
		return [output];
	}

	function parseGrandpa(xmlDoc, saveInfo) {
		// Scoring details from StardewValley.Utility.getGradpaScore() & getGrandpaCandlesFromScore()
		var title = 'Grandpa\'s Evaluation',
			anchor = makeAnchor(title),
			version = "1.2",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			farmer = $(xmlDoc).find('player > name').html(),
			count = 0,
			max_count = 21,
			candles = 1,
			max_candles = 4,
			currentCandles = Number($(xmlDoc).find("locations > GameLocation[" + saveInfo.ns_prefix + "\\:type='Farm'] > grandpaScore").text()),
			need = '',
			money = Number($(xmlDoc).find('player > totalMoneyEarned').text()),
			achieves = {
				5: 'A Complete Collection',
				26: 'Master Angler',
				34: 'Full Shipment'
			},
			ach_count = 3,
			ach_have = {},
			cc_done = 0,
			ccRooms = {
				'ccBoilerRoom': "Boiler Room",
				'ccCraftsRoom': "Crafts Room",
				'ccPantry': "Pantry",
				'ccFishTank': "Fish Tank",
				'ccVault': "Vault",
				'ccBulletin': "Bulletin Board"
			},
			cc_have = 0,
			cc_count = 6,
			isJojaMember = 0,
			spouse = $(xmlDoc).find('player > spouse'), // will trigger during 3 day engagement too
			houseUpgrades = Number($(xmlDoc).find('player > houseUpgradeLevel').text()),
			hasRustyKey = 'false',
			hasSkullKey = 'false',
			hasKeys = [],
			heart_count = 0,
			hasPet = 0,
			petLove = 0,
			realPlayerLevel = (Number($(xmlDoc).find('player > farmingLevel').text()) +
				Number($(xmlDoc).find('player > miningLevel').text()) +
				Number($(xmlDoc).find('player > combatLevel').text()) +
				Number($(xmlDoc).find('player > foragingLevel').text()) +
				Number($(xmlDoc).find('player > fishingLevel').text()) +
				Number($(xmlDoc).find('player > luckLevel').text())),
			playerLevel = realPlayerLevel / 2;

		// 1.6 removed the old stats for rusty and skull keys and instead has some mail flags
		if (compareSemVer(saveInfo.version, "1.6") >= 0) {
			if (saveInfo.data[saveInfo.farmerId].mailReceived.hasOwnProperty("HasRustyKey")) {
				hasRustyKey = 'true';
			}
			if (saveInfo.data[saveInfo.farmerId].mailReceived.hasOwnProperty("HasSkullKey")) {
				hasSkullKey = 'true';
			}
		} else {
			hasRustyKey = $(xmlDoc).find('player > hasRustyKey').text();
			hasSkullKey = $(xmlDoc).find('player > hasSkullKey').text();
		}

		// Pre-calculating totals to put summary info up top.
		if (money >= 1e6) {
			count += 7;
		} else if (money >= 5e5) {
			count += 5;
		} else if (money >= 3e5) {
			count += 4;
		} else if (money >= 2e5) {
			count += 3;
		} else if (money >= 1e5) {
			count += 2;
		} else if (money >= 5e4) {
			count += 1;
		}
		$(xmlDoc).find('player > achievements > int').each(function () {
			var id = $(this).text();
			if (achieves.hasOwnProperty(id)) {
				count++;
				ach_have[id] = 1;
			}
		});
		if (saveInfo.data[saveInfo.farmerId].eventsSeen.hasOwnProperty("191393")) {
			cc_done = 1;
		}
		if (cc_done) {
			count += 3;
		} else {
			if (saveInfo.data[saveInfo.farmerId].mailReceived.hasOwnProperty("JojaMember")) {
				isJojaMember = 1;
			}
			for (var id in ccRooms) {
				if (ccRooms.hasOwnProperty(id) && saveInfo.data[saveInfo.farmerId].mailReceived.hasOwnProperty(id)) {
					cc_have++;
				}
			}
			if (cc_have >= cc_count) {
				count++;
			}
		}
		if (hasRustyKey === 'true') {
			count++;
			hasKeys.push('Rusty Key');
		}
		if (hasSkullKey === 'true') {
			count++;
			hasKeys.push('Skull Key');
		}
		if (compareSemVer(saveInfo.version, "1.3") >= 0) {
			var uid = $(xmlDoc).find('player').children('UniqueMultiplayerID').text();
			if (saveInfo.partners.hasOwnProperty(uid)) {
				spouse = saveInfo.players[saveInfo.partners[uid]];
			}
		}
		if (spouse.length > 0 && houseUpgrades >= 2) {
			count++;
		}
		if (compareSemVer(saveInfo.version, "1.3") >= 0) {
			$(xmlDoc).find('player> friendshipData > item').each(function () {
				var num = Number($(this).find('value > Friendship > Points').text());
				if (num >= 1975) { heart_count++; }
			});
		} else {
			$(xmlDoc).find('player> friendships > item').each(function () {
				var num = Number($(this).find('value > ArrayOfInt > int').first().text());
				if (num >= 1975) { heart_count++; }
			});
		}
		if (heart_count >= 10) {
			count += 2;
		} else if (heart_count >= 5) {
			count += 1;
		}
		if (playerLevel >= 25) {
			count += 2;
		} else if (playerLevel >= 15) {
			count += 1;
		}
		$(xmlDoc).find('locations > GameLocation > Characters > NPC').each(function () {
			if ($(this).attr(saveInfo.ns_prefix + ':type') === 'Pet' || $(this).attr(saveInfo.ns_prefix + ':type') === 'Cat' || $(this).attr(saveInfo.ns_prefix + ':type') === 'Dog') {
				hasPet = 1;
				var thisPetLove = Number($(this).find('friendshipTowardFarmer').text());
				if (thisPetLove > petLove) {
					petLove = thisPetLove;
				}
			}
		});
		// Handling the case of a previously maxed but now butterflied pet.
		if (compareSemVer(saveInfo.version, "1.6") >= 0) {
			if (saveInfo.data[saveInfo.farmerId].mailReceived.hasOwnProperty("petLoveMessage")) {
				petLove = 1000;
			}
		}
		if (petLove >= 999) {
			count++;
		}
		if (count >= 12) {
			candles = 4;
		} else if (count >= 8) {
			candles = 3;
		} else if (count >= 4) {
			candles = 2;
		}
		output = getSectionHeader(saveInfo, title, anchor, true, version);
		output += '<div class="' + anchor + '_summary ' + sum_class + '">';
		output += '<span class="result">' + farmer + ' 共获得 ' + count +
			' 分（详细如下）;满分 ' + max_count + ' 分。</span><br />\n';
		output += '<span class="result">当前已点燃 ' + currentCandles + ' 支蜡烛。再次进行评估将点燃 ' +
			candles + ' 支蜡烛。</span><br />\n';
		output += '<ul class="ach_list"><li>';
		output += (candles >= max_candles) ? getMilestoneString('点燃4支蜡烛', 1) :
			getMilestoneString('点燃4支蜡烛', 0) + '-- 还需要 ' + (12 - count) + ' 分';
		output += '</li></ul></span>';

		output += '<div class="' + anchor + '_details ' + det_class + '">';
		output += '<span class="result">' + farmer + ' 的总收入有 ' + addCommas(money) + 'g。</span><br />\n';
		output += '<ul class="ach_list"><li>';
		output += (money >= 5e4) ? getPointString(1, '总收入至少50,000g', 0, 1) :
			getPointString(1, '总收入至少50,000g', 0, 0) + '-- 还差 ' + addCommas(5e4 - money) + 'g';
		output += '</li>\n<li>';
		output += (money >= 1e5) ? getPointString(1, '总收入至少100,000g', 1, 1) :
			getPointString(1, '总收入至少100,000g', 1, 0) + '-- 还差 ' + addCommas(1e5 - money) + 'g';
		output += '</li>\n<li>';
		output += (money >= 2e5) ? getPointString(1, '总收入至少200,000g', 1, 1) :
			getPointString(1, '总收入至少200,000g', 1, 0) + '-- 还差 ' + addCommas(2e5 - money) + 'g';
		output += '</li>\n<li>';
		output += (money >= 3e5) ? getPointString(1, '总收入至少300,000g', 1, 1) :
			getPointString(1, '总收入至少300,000g', 1, 0) + '-- 还差 ' + addCommas(3e5 - money) + 'g';
		output += '</li>\n<li>';
		output += (money >= 5e5) ? getPointString(1, '总收入至少500,000g', 1, 1) :
			getPointString(1, '总收入至少500,000g', 1, 0) + '-- 还差 ' + addCommas(5e5 - money) + 'g';
		output += '</li>\n<li>';
		output += (money >= 1e6) ? getPointString(2, '总收入至少1,000,000g', 1, 1) :
			getPointString(2, '总收入至少1,000,000g', 1, 0) + '-- 还差 ' + addCommas(1e6 - money) + 'g';
		output += '</li></ul>\n';

		output += '<span class="result">' + farmer + ' 已获得' + ach_count + ' 个收集成就的 ' + Object.keys(ach_have).length + ' 个</span><br />\n';
		output += '<ul class="ach_list"><li>';
		output += (ach_have.hasOwnProperty(5)) ? getPointString(1, '<span class="ach">全套收集</span>成就', 0, 1) :
			getPointString(1, '<span class="ach">全套收集</span>成就', 0, 0);
		output += '</li>\n<li>';
		output += (ach_have.hasOwnProperty(26)) ? getPointString(1, '<span class="ach">垂钓大师</span>成就', 0, 1) :
			getPointString(1, '<span class="ach">垂钓大师</span>成就', 0, 0);
		output += '</li>\n<li>';
		output += (ach_have.hasOwnProperty(34)) ? getPointString(1, '<span class="ach">全部货物</span>成就', 0, 1) :
			getPointString(1, '<span class="ach">全部货物</span>成就', 0, 0);
		output += '</li></ul>\n';

		if (isJojaMember) {
			output += '<span class="result">' + farmer + ' 已购买Joja会员资格，无法恢复社区中心';
			output += '<ul class="ach_list"><li>';
			output += getPointImpossibleString(1, '修复社区中心');
			output += '</li>\n<li>';
			output += getPointImpossibleString(2, '参加社区中心重新开放仪式');
			output += '</li></ul>\n';
		} else {
			if (cc_done || cc_have >= cc_count) {
				output += '<span class="result">' + farmer + ' 完成了社区中心的修复';
				output += (cc_done) ? '并且触发过社区中心重新开放的剧情' : '但还没触发过社区中心重新开放的剧情';
				output += '</span><br />\n';
			} else {
				output += '<span class="result">' + farmer + ' 还未完成社区中心的修复';
			}
			output += '<ul class="ach_list"><li>';
			output += (cc_done || cc_have >= cc_count) ? getPointString(1, '修复社区中心', 0, 1) :
				getPointString(1, '修复社区中心', 0, 0);
			output += '</li>\n<li>';
			output += (cc_done) ? getPointString(2, '触发社区中心重新开放的剧情', 0, 1) :
				getPointString(2, '触发社区中心重新开放的剧情', 0, 0);
			output += '</li></ul>\n';
		}

		output += '<span class="result">' + farmer + ' 总共有 ' + realPlayerLevel + ' 个技能等级</span><br />\n';
		output += '<ul class="ach_list"><li>';
		output += (playerLevel >= 15) ? getPointString(1, '技能总等级达到30', 0, 1) :
			getPointString(1, '技能总等级达到30', 0, 0) + '-- 还差 ' + (30 - realPlayerLevel) + ' 个技能等级';
		output += '</li>\n<li>';
		output += (playerLevel >= 25) ? getPointString(1, '技能总等级达到50', 1, 1) :
			getPointString(1, '技能总等级达到50', 1, 0) + '-- 还差 ' + (50 - realPlayerLevel) + ' 个技能等级';
		output += '</li></ul>\n';

		output += '<span class="result">' + farmer + ' 与' + heart_count +
			'个村民达到1975+点好感度（~8&#x2665）</span><br />\n';
		output += '<ul class="ach_list"><li>';
		output += (heart_count >= 5) ? getPointString(1, '与5个村民达到~8&#x2665', 0, 1) :
			getPointString(1, '与5个村民达到~8&#x2665', 0, 0) + '-- 还差 ' + (5 - heart_count) + ' 个';
		output += '</li>\n<li>';
		output += (heart_count >= 10) ? getPointString(1, '与10个村民达到~8&#x2665', 1, 1) :
			getPointString(1, '与10个村民达到~8&#x2665', 1, 0) + '-- 还差 ' + (10 - heart_count) + ' 个';
		output += '</li></ul>\n';

		// This doesn't correctly summarize a situation of a butterflied 1000 pt pet and a current pet with fewer points
		if (hasPet) {
			output += '<span class="result">' + farmer + ' 与宠物达到' + petLove + '心好感度</span><br />\n';
			need = (999 - petLove) + ' 点宠物好感度';
		} else {
			if (petLove > 0) {
				output += '<span class="result">' + farmer + ' 有过一只 ' + petLove + ' 点好感度的宠物</span><br/>'
			} else {
				output += '<span class="result">' + farmer + ' 没有养过任何有好感度的宠物。</span><br/>';
			}
			need = "一只宠物和与宠物达到999点好感度";
		}
		output += '<ul class="ach_list"><li>';
		output += (petLove >= 999) ? getPointString(1, '与宠物达到999点好感度', 0, 1) :
			getPointString(1, '与宠物达到999点好感度', 0, 0) + '-- 还差 ' + need;
		output += '</li></ul>\n';

		output += '<span class="result">' + farmer + ((spouse.length > 0) ? ' 已经' : ' 还未') +
			'结婚，已经升级了' + houseUpgrades + '次农舍</span><br />\n';
		output += '<ul class="ach_list"><li>';
		need = [];
		if (spouse.length === 0) {
			need.push('一位配偶');
		}
		if (houseUpgrades < 2) {
			need.push('升级' + (2 - houseUpgrades) + '次农舍');
		}
		output += (need.length === 0) ? getPointString(1, '已婚，至少升级2次房屋', 0, 1) :
			getPointString(1, '已婚，至少升级2次房屋', 0, 0) + '-- 还需要 ' + need.join(" 和 ");
		output += '</li></ul>\n';

		if (hasKeys.length > 0) {
			output += '<span class="result">' + farmer + ' 获得了 ' + hasKeys.join(" 和 ") + '。</span><br />\n';
		} else {
			output += '<span class="result">' + farmer + ' 还没有获得生锈的钥匙或骷髅钥匙</span><br />\n';
		}
		output += '<ul class="ach_list"><li>';
		output += (hasRustyKey === 'true') ? getPointString(1, '获得生锈的钥匙', 0, 1) :
			getPointString(1, '获得生锈的钥匙', 0, 0) + '-- 在博物馆捐赠60个物品获得';
		output += '</li>\n<li>';
		output += (hasSkullKey === 'true') ? getPointString(1, '获得骷髅钥匙', 0, 1) :
			getPointString(1, '获得骷髅钥匙', 0, 0) + '-- 到达矿洞120层获得';
		output += '</li></ul></div>';
		output += getSectionFooter();

		return output;
	}

	function parseBundleData(xmlDoc, saveInfo, input, output, meta) {
		meta.roomID = {
			'Pantry': 0,
			'Crafts Room': 1,
			'Fish Tank': 2,
			'Boiler Room': 3,
			'Vault': 4,
			'Bulletin Board': 5,
			'Abandoned Joja Mart': 6
		};
		meta.quality = {
			1: "Silver",
			2: "Gold",
			4: "Iridium",
		};
		meta.bundleRoom = {};
		for (var k in input) {
			if (input.hasOwnProperty(k)) {
				var kFields = k.split('/');
				var room = kFields[0];
				var id = kFields[1];
				var vFields = input[k].split('/');
				var bundleName = vFields[0];
				var itemData = vFields[2].split(' ');
				var qty = vFields[4];

				if (!output.hasOwnProperty(meta.roomID[room])) {
					output[meta.roomID[room]] = { 'name': room, 'bundles': {} };
				}
				output[meta.roomID[room]].bundles[id] = { 'name': bundleName, 'qty': qty, 'items': [] };
				meta.bundleRoom[id] = meta.roomID[room];
				for (var i = 0; i < itemData.length; i += 3) {
					var itemName = (saveInfo.objects.hasOwnProperty(itemData[i])) ? saveInfo.objects[itemData[i]] : "Object ID " + itemData[i];
					var n = (Number(itemData[i + 1]) > 1) ? itemData[i + 1] + "x " : "";
					var q = (meta.quality.hasOwnProperty(itemData[i + 2])) ? meta.quality[itemData[i + 2]] + " " : "";
					if (itemData[i] === "-1") {
						output[meta.roomID[room]].bundles[id].items.push(addCommas(itemData[i + 1]) + "g");
					} else {
						output[meta.roomID[room]].bundles[id].items.push(n + q + wikify(itemName));
					}
				}
				if (qty === '') {
					output[meta.roomID[room]].bundles[id].qty = output[meta.roomID[room]].bundles[id].items.length;
				}
			}
		}
	}

	function parseBundles(xmlDoc, saveInfo) {
		// This was substantially rewritten for Stardew 1.5 since that version's Random Bundles option caused
		//  the full bundle information to be placed in the save. Since we are going to at least have to partly
		//  parse the bundle definitions now, we might as well hardcode the default bundles and handle older
		//  versions that way.
		var title = 'Community Center / Joja Community Development',
			anchor = makeAnchor(title),
			version = "1.5",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			meta = {},
			farmer = $(xmlDoc).find('player > name').html(),
			hasDetails = false,
			isJojaMember = 0,
			room = {},
			bundleHave = {},
			ccMail = {
				'ccBoilerRoom': 3,
				'ccCraftsRoom': 1,
				'ccPantry': 0,
				'ccFishTank': 2,
				'ccVault': 4,
				'ccBulletin': 5
			},
			ccCount = 6,
			ccHave = 0,
			ccEvent = '191393',
			project = ['Greenhouse', 'Bridge', 'Panning', 'Minecarts', 'Bus'],
			price = ['35,000g', '25,000g', '20,000g', '15,000g', '40,000g'],
			jojaMail = {
				'jojaBoilerRoom': 3,
				'jojaCraftsRoom': 1,
				'jojaPantry': 0,
				'jojaFishTank': 2,
				'jojaVault': 4
			},
			jojaCount = 5,
			jojaHave = 0,
			jojaEvent = '502261',
			eventToCheck = '',
			hasSeenCeremony = 0,
			done = {},
			hybrid = 0,
			hybridLeft = 0,
			id,
			r,
			b,
			i,
			itemsHave = {},
			temp,
			bundleNeed = [],
			need = [],
			ccLoc = $(xmlDoc).find("locations > GameLocation[" + saveInfo.ns_prefix + "\\:type='CommunityCenter']"),
			bundleData = {},
			rawData = {},
			defaultData = {
				"Pantry/0": "Spring Crops/O 465 20/24 1 0 188 1 0 190 1 0 192 1 0/0///Spring Crops",
				"Pantry/1": "Summer Crops/O 621 1/256 1 0 260 1 0 258 1 0 254 1 0/3///Summer Crops",
				"Pantry/2": "Fall Crops/BO 10 1/270 1 0 272 1 0 276 1 0 280 1 0/2///Fall Crops",
				"Pantry/3": "Quality Crops/BO 15 1/24 5 2 254 5 2 276 5 2 270 5 2/6/3//Quality Crops",
				"Pantry/4": "Animal/BO 16 1/186 1 0 182 1 0 174 1 0 438 1 0 440 1 0 442 1 0/4/5//Animal",
				"Pantry/5": "Artisan/BO 12 1/432 1 0 428 1 0 426 1 0 424 1 0 340 1 0 344 1 0 613 1 0 634 1 0 635 1 0 636 1 0 637 1 0 638 1 0/1/6//Artisan",
				"Crafts Room/13": "Spring Foraging/O 495 30/16 1 0 18 1 0 20 1 0 22 1 0/0///Spring Foraging",
				"Crafts Room/14": "Summer Foraging/O 496 30/396 1 0 398 1 0 402 1 0/3///Summer Foraging",
				"Crafts Room/15": "Fall Foraging/O 497 30/404 1 0 406 1 0 408 1 0 410 1 0/2///Fall Foraging",
				"Crafts Room/16": "Winter Foraging/O 498 30/412 1 0 414 1 0 416 1 0 418 1 0/6///Winter Foraging",
				"Crafts Room/17": "Construction/BO 114 1/388 99 0 388 99 0 390 99 0 709 10 0/4///Construction",
				"Crafts Room/19": "Exotic Foraging/O 235 5/88 1 0 90 1 0 78 1 0 420 1 0 422 1 0 724 1 0 725 1 0 726 1 0 257 1 0/1/5//Exotic Foraging",
				"Fish Tank/6": "River Fish/O 685 30/145 1 0 143 1 0 706 1 0 699 1 0/6///River Fish",
				"Fish Tank/7": "Lake Fish/O 687 1/136 1 0 142 1 0 700 1 0 698 1 0/0///Lake Fish",
				"Fish Tank/8": "Ocean Fish/O 690 5/131 1 0 130 1 0 150 1 0 701 1 0/5///Ocean Fish",
				"Fish Tank/9": "Night Fishing/R 516 1/140 1 0 132 1 0 148 1 0/1///Night Fishing",
				"Fish Tank/10": "Specialty Fish/O 242 5/128 1 0 156 1 0 164 1 0 734 1 0/4///Specialty Fish",
				"Fish Tank/11": "Crab Pot/O 710 3/715 1 0 716 1 0 717 1 0 718 1 0 719 1 0 720 1 0 721 1 0 722 1 0 723 1 0 372 1 0/1/5//Crab Pot",
				"Boiler Room/20": "Blacksmith's/BO 13 1/334 1 0 335 1 0 336 1 0/2///Blacksmith's",
				"Boiler Room/21": "Geologist's/O 749 5/80 1 0 86 1 0 84 1 0 82 1 0/1///Geologist's",
				"Boiler Room/22": "Adventurer's/R 518 1/766 99 0 767 10 0 768 1 0 769 1 0/1/2//Adventurer's",
				"Vault/23": "2,500g/O 220 3/-1 2500 2500/4///2,500g",
				"Vault/24": "5,000g/O 369 30/-1 5000 5000/2///5,000g",
				"Vault/25": "10,000g/BO 9 1/-1 10000 10000/3///10,000g",
				"Vault/26": "25,000g/BO 21 1/-1 25000 25000/1///25,000g",
				"Bulletin Board/31": "Chef's/O 221 3/724 1 0 259 1 0 430 1 0 376 1 0 228 1 0 194 1 0/4///Chef's",
				"Bulletin Board/32": "Field Research/BO 20 1/422 1 0 392 1 0 702 1 0 536 1 0/5///Field Research",
				"Bulletin Board/33": "Enchanter's/O 336 5/725 1 0 348 1 0 446 1 0 637 1 0/1///Enchanter's",
				"Bulletin Board/34": "Dye/BO 25 1/420 1 0 397 1 0 421 1 0 444 1 0 62 1 0 266 1 0/6///Dye",
				"Bulletin Board/35": "Fodder/BO 104 1/262 10 0 178 10 0 613 3 0/3///Fodder",
				"Abandoned Joja Mart/36": "The Missing//348 1 1 807 1 0 74 1 0 454 5 2 795 1 2 445 1 0/1/5//The Missing"
			};

		if (compareSemVer(saveInfo.version, version) < 0) {
			parseBundleData(xmlDoc, saveInfo, defaultData, bundleData, meta);
		} else {
			$(xmlDoc).find('bundleData > item').each(function () {
				rawData[$(this).find("key > string").text()] = $(this).find("value > string").text();
			});
			parseBundleData(xmlDoc, saveInfo, rawData, bundleData, meta);
		}
		// First check basic completion
		r = 0;
		$(ccLoc).find('areasComplete > boolean').each(function () {
			if ($(this).text() === 'true') {
				ccHave++;
				done[r] = 1;
			}
			r++;
		});
		// Now look at bundles. Getting donated items and count
		$(ccLoc).find('bundles > item').each(function () {
			id = $(this).find('key > int').text();
			bundleHave[id] = 0;
			itemsHave[id] = {};
			i = 0;
			$(this).find('ArrayOfBoolean > boolean').each(function () {
				if ($(this).text() === 'true') {
					bundleHave[id]++;
					itemsHave[id][i] = true;
				}
				i++;
			});
		});
		if (saveInfo.data[saveInfo.farmerId].mailReceived.hasOwnProperty("JojaMember")) {
			isJojaMember = true;
		}
		Object.keys(jojaMail).forEach(function (id) {
			if (saveInfo.data[saveInfo.farmerId].mailReceived.hasOwnProperty(id)) {
				jojaHave++;
				done[jojaMail[id]] = true;
			}
		});
		if (ccHave > 0 && isJojaMember) {
			hybrid = true;
		}
		hybridLeft = jojaCount - ccHave;
		if (done.hasOwnProperty(ccMail.ccBulletin)) {
			hybridLeft++;
		}
		eventToCheck = (isJojaMember) ? jojaEvent : ccEvent;
		if (saveInfo.data[saveInfo.farmerId].eventsSeen.hasOwnProperty(eventToCheck)) {
			hasSeenCeremony = true;
		}

		output += '<div class="' + anchor + '_summary ' + sum_class + '">';
		// New information from Gigafreak#4754 on Discord confirms that the Joja achieve does trigger even if
		// most of the CC was completed through bundles. So warnings are removed and Joja will not be marked
		// impossible unless the CC is actually done.
		if (isJojaMember) {
			if (hybrid) {
				output += '<span class="result">' + farmer + ' completed ' + ccHave +
					' Community Center room(s) and then became a Joja member.</span><br />\n';
				output += '<span class="result">' + farmer + ' has since completed ' + jojaHave + ' of the remaining ' +
					hybridLeft + ' projects on the Community Development Form.</span><br />\n';
			} else {
				output += '<span class="result">' + farmer + ' is a Joja member and has completed ' + jojaHave +
					' of the ' + jojaCount + ' projects on the Community Development Form.</span><br />\n';
			}
			hybridLeft -= jojaHave;
			output += '<span class="result">' + farmer + ((hasSeenCeremony) ? ' has' : ' has not') +
				' attended the completion ceremony</span><br />\n<ul class="ach_list"><li>';
			output += getAchieveImpossibleString('Local Legend', 'restore the Pelican Town Community Center');
			output += '</li><li>\n';
			if (!hasSeenCeremony) {
				if (hybridLeft > 0) {
					temp = hybridLeft + ' more project(s) and the ceremony';
					// Since we are supporting hybrid playthrough, we check the CC versions of mail, not joja
					for (id in ccMail) {
						if (ccMail.hasOwnProperty(id) && id !== "ccBulletin") {
							if (!done.hasOwnProperty(ccMail[id])) {
								need.push('<li> Purchase ' + project[ccMail[id]] + ' project for ' + price[ccMail[id]] + '</li>');
							}
						}
					}
				} else {
					temp = ' to attend the ceremony';
				}
				need.push('<li>Attend the completion ceremony at the Joja Warehouse</li>');
			}
			output += (hasSeenCeremony) ? getAchieveString('Joja Co. Member Of The Year', '', 1) :
				getAchieveString('Joja Co. Member Of The Year', '', 0) + temp;
			output += '</li></ul>\n';
		} else {
			output += '<span class="result">' + farmer + ' is not a Joja member and has completed ' + ccHave +
				' of the ' + ccCount + ' Community Center rooms.</span><br />\n';
			output += '<span class="result">' + farmer + ((hasSeenCeremony) ? ' has' : ' has not') +
				' attended the completion ceremony</span><br />\n<ul class="ach_list"><li>';
			if (ccHave === 0) {
				output += getAchieveString('Joja Co. Member Of The Year', '', 0) + 'to become a Joja member and purchase all community development perks';
			} else if (ccHave < ccCount) {
				output += getAchieveString('Joja Co. Member Of The Year', '', 0) + 'to become a Joja member and purchase any remaining community development perks (' + hybridLeft + " left)";
			} else {
				output += getAchieveImpossibleString('Joja Co. Member Of The Year', 'become a Joja member and purchase all community development perks');
			}
			output += '</li><li>\n';
			if (!hasSeenCeremony) {
				if (ccHave < ccCount) {
					temp = (ccCount - ccHave) + ' more room(s) and the ceremony';
					for (id in ccMail) {
						if (ccMail.hasOwnProperty(id)) {
							r = ccMail[id];
							if (!done.hasOwnProperty(r)) {
								bundleNeed = [];
								if (bundleData.hasOwnProperty(r)) {
									for (b in bundleData[r].bundles) {
										if (bundleData[r].bundles.hasOwnProperty(b)) {
											if (bundleHave[b] < bundleData[r].bundles[b].qty) {
												var possibles = [];
												bundleData[r].bundles[b].items.forEach(function (e, i, a) {
													if (!itemsHave[b].hasOwnProperty(i)) {
														possibles.push(bundleData[r].bundles[b].items[i]);
													}
												});
												bundleNeed.push('<li>' + bundleData[r].bundles[b].name + ' Bundle -- need ' +
													(bundleData[r].bundles[b].qty - bundleHave[b]) + ' of: ' + possibles.join(', ') + '</li>');
											}
										}
									}
								}
								need.push('<li> ' + wikify(bundleData[r].name, 'Bundles') + '<ol>' + bundleNeed.sort().join('') + '</ol></li>');
							}
						}
					}
				} else {
					temp = ' to attend the ceremony';
				}
				need.push('<li>Attend the re-opening ceremony at the Community Center</li>');
			}
			output += (ccHave >= ccCount && hasSeenCeremony) ? getAchieveString('Local Legend', '', 1) :
				getAchieveString('Local Legend', '', 0) + temp;
			output += '</li></ul></div>';
		}
		if (need.length > 0) {
			hasDetails = true;
			output += '<div class="' + anchor + '_details ' + det_class + '">';
			output += '<span class="need">Left to do:<ol>' + need.sort().join('') + '</ol></span></div>';
		}

		output = getSectionHeader(saveInfo, title, anchor, hasDetails, version) + output + getSectionFooter();
		return output;
	}

	function parseSecretNotes(xmlDoc, saveInfo) {
		var title = 'Secret Notes',
			anchor = makeAnchor(title),
			version = "1.3",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [];
		meta.hasStoneJunimo = false;

		if (compareSemVer(saveInfo.version, "1.3") < 0) {
			return '';
		}

		// Stone Junimo is a giant pain in the ass. It seems to not have any confirmation so we have to search
		// the entire save for it. Worse, the buried one may reappear later so we need to ignore that one when
		// searching. The buried one is at (57, 16) on the Town map.
		// It also should not be obtainable if the players went the Joja route, but we will deal with that later.
		$(xmlDoc).find('Item > name').each(function () {
			if ($(this).text() === "Stone Junimo") {
				// Found one in storage somewhere. We good.
				meta.hasStoneJunimo = true;
				return false;
			}
		});
		if (!meta.hasStoneJunimo) {
			$(xmlDoc).find('Object > name').each(function () {
				if ($(this).text() === "Stone Junimo") {
					var loc = $(this).parents('GameLocation').children('name').text();
					if (loc === 'Town') {
						var x = $(this).parents('item').find('key > Vector2 > X').text();
						var y = $(this).parents('item').find('key > Vector2 > Y').text();
						if (x !== '57' || y !== '16') {
							meta.hasStoneJunimo = true;
							return false;
						}
					} else {
						meta.hasStoneJunimo = true;
						return false;
					}
				}
			});
		}

		table[0] = parsePlayerSecretNotes($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerSecretNotes, meta);
		playerOutput += printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerSecretNotes(player, saveInfo, meta) {
		var output = '',
			table = [],
			farmer = $(player).children('name').html(),
			hasSeenKrobus = false,
			hasMagnifyingGlass = false,
			isJojaMember = false,
			umid = $(player).children('UniqueMultiplayerID').text(),
			notes = {},
			need = [],
			rewards = {},
			reward_skip = {},
			found_notes = 0,
			found_rewards = 0,
			note_count = 23,
			mod_count = 0,
			reward_start = 13,
			reward_count = note_count - reward_start + 1,
			i;

		if (compareSemVer(saveInfo.version, "1.4") >= 0) {
			note_count = 25;
			reward_count++;
			reward_skip[24] = true;
		}
		if (compareSemVer(saveInfo.version, "1.6") >= 0) {
			note_count = 27;
			reward_skip[26] = true;
			reward_skip[27] = true;
			if (saveInfo.data[umid].mailReceived.hasOwnProperty('HasMagnifyingGlass')) {
				hasMagnifyingGlass = true;
			}
		} else {
			hasMagnifyingGlass = ($(player).children('hasMagnifyingGlass').text() === 'true');
		}

		if (saveInfo.data[umid].eventsSeen.hasOwnProperty('520702')) {
			hasSeenKrobus = true;
		}
		if (saveInfo.data[umid].eventsSeen.hasOwnProperty('2120303')) {
			rewards[23] = true;
			found_rewards++;
		}

		var rewardMail = {
			'gotPearl': 15,
			'junimoPlush': 13,
			// Qi quest we just check for the start. Full completion is 'TH_Lumberpile'
			'TH_Tunnel': 22,
			'carolinesNecklace': 25,
			'SecretNote16_done': 16,
			'SecretNote17_done': 17,
			'SecretNote18_done': 18,
			'SecretNote19_done': 19,
			'SecretNote20_done': 20,
			'secretNote21_done': 21,
		};
		Object.keys(rewardMail).forEach(function (id) {
			if (saveInfo.data[umid].mailReceived.hasOwnProperty(id)) {
				rewards[rewardMail[id]] = true;
				found_rewards++;
			}
		});
		if (saveInfo.data[umid].mailReceived.hasOwnProperty('JojaMember')) {
			isJojaMember = true;
		}
		if (isJojaMember) {
			reward_count--;
			reward_skip[14] = true;
		} else if (meta.hasStoneJunimo) {
			rewards[14] = true;
			found_rewards++;
		}

		// Check Krobus event, then check for magnifier, then check number of notes
		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + farmer + ' has ' + (hasSeenKrobus ? '' : 'not ') + ' seen the Shadow Guy at the Bus Stop.</span><br />\n';
		output += '<span class="result">' + farmer + ' has ' + (hasMagnifyingGlass ? '' : 'not ') + ' found the Magnifying Glass.</span><br />\n';
		$(player).find('secretNotesSeen > int').each(function () {
			// Filter out journal scraps
			if (Number($(this).text()) < 1000) {
				if (Number($(this).text()) > note_count) {
					mod_count++;
				} else {
					notes[$(this).text()] = true;
					found_notes++;
				}
			}
		});
		output += '<span class="result">' + farmer + ' has read ' + found_notes + ' of ' +
			note_count + ' secret notes.</span><br />\n';
		if (mod_count > 0) {
			output += '<span class="result note">' + farmer + ' has read ' + mod_count + ' mod secret note(s).</span><br />\n';
		}
		output += '<ul class="ach_list"><li>';
		output += (found_notes >= note_count) ? getMilestoneString('Read all the secret notes', 1) :
			getMilestoneString('Read all the secret notes', 0) + (note_count - found_notes) + ' more';
		output += '</li></ul></div>';
		if (found_notes < note_count) {
			for (i = 1; i <= note_count; i++) {
				if (!notes.hasOwnProperty(i)) {
					need.push('<li>' + wikify('Secret Note #' + i, 'Secret Notes') + '</li>');
				}
			}
			if (need.length > 0) {
				meta.hasDetails = true;
				output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
				output += '<span class="need">Left to read:<ol>' + need.join('') + '</ol></span></div>';
			}
		}
		table.push(output);
		// Stone Junimo not available for Joja route. We silently remove it from the list, which isn't optimal

		output = '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + farmer + ' has found the rewards from  ' + found_rewards + ' of ' +
			reward_count + ' secret notes.</span><br />\n';
		output += '<ul class="ach_list"><li>';
		output += (found_rewards >= reward_count) ? getMilestoneString('Find all the secret note rewards', 1) :
			getMilestoneString('Find all the secret note rewards', 0) + (reward_count - found_rewards) + ' more';
		output += '</li></ul></div>';
		if (found_rewards < reward_count) {
			need = [];
			for (i = reward_start; i <= note_count; i++) {
				if (!reward_skip.hasOwnProperty(i) && !rewards.hasOwnProperty(i)) {
					var extra = "";
					if (i == 14) {
						extra = " (Note: may be inaccurate if item was collected and destroyed.)";
					}
					need.push('<li> Reward from ' + wikify('Secret Note #' + i, 'Secret Notes') + extra + '</li>');
				}
			}
			if (need.length > 0) {
				meta.hasDetails = true;
				output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
				output += '<span class="need">Left to find:<ol>' + need.join('') + '</ol></span></div>';
			}
		}
		table.push(output);
		return table;
	}

	function parseJournalScraps(xmlDoc, saveInfo) {
		var title = 'Journal Scraps',
			anchor = makeAnchor(title),
			version = "1.5",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [];

		if (compareSemVer(saveInfo.version, version) < 0) {
			return '';
		}

		table[0] = parsePlayerJournalScraps($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerJournalScraps, meta);
		playerOutput += printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerJournalScraps(player, saveInfo, meta) {
		var output = '',
			table = [],
			farmer = $(player).children('name').html(),
			hasVisitedIsland = false,
			umid = $(player).children('UniqueMultiplayerID').text(),
			notes = {},
			need = [],
			rewards = { 1004: false, 1006: false, 1009: false, 1010: false },
			found_notes = 0,
			found_rewards = 0,
			note_count = 11,
			reward_count = 4,
			mod_count = 0,
			i;

		var rewardMail = {
			'Island_W_BuriedTreasure2': 1006,
			'Island_W_BuriedTreasure': 1004,
			'Island_N_BuriedTreasure': 1010,
		};
		Object.keys(rewardMail).forEach(function (id) {
			if (saveInfo.data[umid].mailReceived.hasOwnProperty(id)) {
				rewards[rewardMail[id]] = true;
				found_rewards++;
			}
		});
		if (saveInfo.data[umid].mailReceived.hasOwnProperty('Visited_Island')) {
			hasVisitedIsland = true;
		}

		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + farmer + ' has ' + (hasVisitedIsland ? '' : 'not ') + ' visited the Island.</span><br />\n';
		output += '<ul class="ach_list"><li>';
		output += (hasVisitedIsland) ? getAchieveString('A Distant Shore', 'Reach Ginger Island', 1) :
			getAchieveString('A Distant Shore', 'Reach Ginger Island', 0) + ' to visit'
		output += '</li></ul></div>';
		$(player).find('secretNotesSeen > int').each(function () {
			// Only count Journal Scraps but watch out for mods. Any additional base game scraps will need this to be adjusted.
			if (Number($(this).text()) >= 1000) {
				if (Number($(this).text()) >= 1012) {
					mod_count++;
				} else {
					notes[$(this).text()] = true;
					found_notes++;
				}
			}
		});
		output += '<span class="result">' + farmer + ' has read ' + found_notes + ' of ' +
			note_count + ' journal scraps.</span><br />\n';
		if (mod_count > 0) {
			output += '<span class="result note">' + farmer + ' has read ' + mod_count + ' mod journal scrap(s).</span><br />\n';
		}
		output += '<ul class="ach_list"><li>';
		output += (found_notes >= note_count) ? getMilestoneString('Read all the journal scraps', 1) :
			getMilestoneString('Read all the journal scraps', 0) + (note_count - found_notes) + ' more';
		output += '</li></ul></div>';
		if (found_notes < note_count) {
			for (i = 1; i <= note_count; i++) {
				if (!notes.hasOwnProperty(1000 + Number(i))) {
					need.push('<li>' + wikify('Journal Scrap #' + i, 'Journal Scraps') + '</li>');
				}
			}
			if (need.length > 0) {
				meta.hasDetails = true;
				output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
				output += '<span class="need">Left to read:<ol>' + need.join('') + '</ol></span></div>';
			}
		}
		table.push(output);
		// Most rewards are noted by mail flags already checked. For mermaid puzzle, we only check for walnut award.
		$(player).parents("SaveGame").first().find('collectedNutTracker > string').each(function () {
			if ($(this).text() === "Mermaid") {
				rewards[1009] = true;
				found_rewards++;
				return false;
			}
		});
		output = '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + farmer + ' has found the rewards from  ' + found_rewards + ' of ' +
			reward_count + ' journal scraps.</span><br />\n';
		output += '<ul class="ach_list"><li>';
		output += (found_rewards >= reward_count) ? getMilestoneString('Find all the journal scrap rewards', 1) :
			getMilestoneString('Find all the journal scrap rewards', 0) + (reward_count - found_rewards) + ' more';
		output += '</li></ul></div>';
		if (found_rewards < reward_count) {
			need = [];
			var k = Object.keys(rewards).sort();
			for (i in k) {
				if (rewards.hasOwnProperty(k[i]) && !rewards[k[i]]) {
					var extra = "";
					need.push('<li> Reward from ' + wikify('Journal Scrap #' + (Number(k[i]) - 1000), 'Journal Scraps') + extra + '</li>');
				}
			}
			if (need.length > 0) {
				meta.hasDetails = true;
				output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
				output += '<span class="need">Left to find:<ol>' + need.join('') + '</ol></span></div>';
			}
		}
		table.push(output);
		return table;
	}

	function parseSpecialOrders(xmlDoc, saveInfo) {
		var title = 'Special Orders',
			anchor = makeAnchor(title),
			version = "1.5",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			found = {},
			found_count = 0,
			need = [],
			hasWalnutRoomAccess = false,
			town = { "Caroline": "Island Ingredients", "Clint": "Cave Patrol", "Demetrius": "Aquatic Overpopulation", "Demetrius2": "Biome Balance", "Emily": "Rock Rejuvenation", "Evelyn": "Gifts for George", "Gunther": "Fragments of the past", "Gus": "Gus' Famous Omelet", "Lewis": "Crop Order", "Linus": "Community Cleanup", "Pam": "The Strong Stuff", "Pierre": "Pierre's Prime Produce", "Robin": "Robin's Project", "Robin2": "Robin's Resource Rush", "Willy": "Juicy Bugs Wanted!", "Willy2": "Tropical Fish", "Wizard": "A Curious Substance", "Wizard2": "Prismatic Jelly" },
			town_count = Object.keys(town).length,
			qi = { "QiChallenge2": "Qi's Crop", "QiChallenge3": "Let's Play A Game", "QiChallenge4": "Four Precious Stones", "QiChallenge5": "Qi's Hungry Challenge", "QiChallenge6": "Qi's Cuisine", "QiChallenge7": "Qi's Kindness", "QiChallenge8": "Extended Family", "QiChallenge9": "Danger In The Deep", "QiChallenge10": "Skull Cavern Invasion", "QiChallenge12": "Qi's Prismatic Grange" },
			id;

		if (compareSemVer(saveInfo.version, version) < 0) {
			return '';
		}

		$(xmlDoc).find('completedSpecialOrders > string').each(function () {
			id = $(this).text();

			if (town.hasOwnProperty(id)) {
				found[id] = true;
				found_count++;
			}
		});

		var intro;
		if (saveInfo.numPlayers > 1) {
			intro = saveInfo.farmName + ' 农场中的所有人已经';
		} else {
			intro = saveInfo.players[saveInfo.farmerId] + ' 已经';
		}
		output = '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + intro + '完成了全部 ' + town_count + ' 个特别订单中的 ' + found_count + ' 个</span><br />\n';
		output += '<ul class="ach_list"><li>';
		output += (found_count >= town_count) ? getMilestoneString('完成所有特别订单', 1) :
			getMilestoneString('完成所有特别订单', 0) + '还差 ' + (town_count - found_count) + ' 个特别订单没有完成';
		output += '</li></ul></div>';
		if (found_count < town_count) {
			for (id in town) {
				if (!found.hasOwnProperty(id)) {
					need.push('<li>' + wikify(ReturnCn(town[id]), "任务#鹈鹕镇的特别任务列表", true) + '</li>');
				}
			}
			if (need.length > 0) {
				meta.hasDetails = true;
				output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
				output += '<span class="need">还未完成的特别订单：<ol>' + need.sort().join('') + '</ol></span></div>';
			}
		}

		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + output + getSectionFooter();
		return output;
	}

	function parseWalnuts(xmlDoc, saveInfo) {
		var title = 'Golden Walnuts',
			anchor = makeAnchor(title),
			version = "1.5",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			count = 0,
			found_count = 0,
			game_count = Number($(xmlDoc).find('goldenWalnutsFound').text()),
			parrotUsed = ($(xmlDoc).find('activatedGoldenParrot').text() === "true"),
			found = {},
			need = {},
			id,
			umid = 'global', // No per-player parsing
			pt_pct = '',
			num,
			// Using same IDs as game uses internally
			trackerAllAtOnce = {
				// These are awarded all at once so the actual count is not listed in the save file
				"Bush_IslandEast_17_37": { 'num': 1, 'name': '岛屿丛林灌木丛', 'hint': '在开放中心区域(17,37)' },
				"Bush_IslandShrine_23_34": { 'num': 1, 'name': '岛屿丛林神社灌木', 'hint': '沿南边缘(23,34)' },
				"Bush_IslandSouth_31_5": { 'num': 1, 'name': '岛屿南部灌木', 'hint': '从岛北地图的楼梯东侧的隐藏路径进入(31,5)' },
				"Bush_IslandNorth_9_84": { 'num': 1, 'name': '岛屿南部灌木', 'hint': '在码头区域西侧的树丛中隐藏开阔地(9,84)' },
				"Bush_IslandNorth_20_26": { 'num': 1, 'name': '岛屿南部灌木', 'hint': '在火山前方的西侧树丛中隐藏开阔地(20,26)' },
				"Bush_IslandNorth_56_27": { 'num': 1, 'name': '岛屿南部灌木', 'hint': '在火山前方的东侧椰子树后面(56,27)' },
				"Bush_IslandNorth_4_42": { 'num': 1, 'name': '岛屿南部灌木', 'hint': '在挖掘点上面的草地区域(4,42)' },
				"Bush_IslandNorth_45_38": { 'num': 1, 'name': '岛屿南部灌木', 'hint': '在岛屿办事处上面的草地区域(45,38)' },
				"Bush_IslandNorth_47_40": { 'num': 1, 'name': '岛屿南部灌木', 'hint': '在岛屿办事处上面的草地区域(47,40)' },
				"Bush_IslandNorth_13_33": { 'num': 1, 'name': '岛屿南部灌木', 'hint': '沿着通过火山入口的秘密通道到达的河边(13,33)' },
				"Bush_IslandNorth_5_30": { 'num': 1, 'name': '岛屿南部灌木', 'hint': '沿着通过火山入口的秘密通道到达的河边(5,39)' },

				"Bush_Caldera_28_36": { 'num': 1, 'name': '火山顶灌木', 'hint': '沿南边缘(28,36)' },
				"Bush_Caldera_9_34": { 'num': 1, 'name': '火山顶灌木', 'hint': '沿南边缘(9,34)' },
				"Bush_CaptainRoom_2_4": { 'num': 1, 'name': '岛屿沉船灌木', 'hint': '船只残骸从左侧可进入(2,4)' },

				"TreeNut": { 'num': 1, 'name': '雷欧小屋里的树', 'hint': '用斧头砍树' },
				"Buried_IslandNorth_19_39": { 'num': 1, 'name': '岛屿北部埋藏', 'hint': '从挖掘点的楼梯顶部，由一圈小石头标记(19,39)' },
				"Buried_IslandNorth_19_13": { 'num': 1, 'name': '岛屿北部埋藏', 'hint': '火山西侧的悬崖边缘，由一圈小石头标记(19,13)' },
				"Buried_IslandNorth_57_79": { 'num': 1, 'name': '岛屿北部埋藏', 'hint': '位于东南角的草地区域内的沙地块，由一圈小石头标记(57,79)' },
				"Buried_IslandNorth_54_21": { 'num': 1, 'name': '岛屿北部埋藏', 'hint': '位于火山的东侧边缘，位于岩石和植物之间(54,21)' },
				"Buried_IslandNorth_42_77": { 'num': 1, 'name': '岛屿北部埋藏', 'hint': '位于码头楼梯的东北方向，位于长草簇之间的黑暗草地区域(42,77)' },
				"Buried_IslandNorth_62_54": { 'num': 1, 'name': '岛屿北部埋藏', 'hint': '位于码头和岛屿办事处之间的路径的东北角，由稍微凸起的沙地标记(62,54)' },
				"Buried_IslandNorth_26_81": { 'num': 1, 'name': '岛屿北部埋藏', 'hint': '位于码头楼梯的西侧弯曲树下方，由一圈小石头标记(26,81)' },
				"IslandLeftPlantRestored": { 'num': 1, 'name': '岛屿办事处紫色花调查奖励', 'hint': '正确的计数是22棵植物' },
				"IslandRightPlantRestored": { 'num': 1, 'name': '岛屿办事处紫色海星调查奖励', 'hint': '正确的计数是18只海星' },
				"IslandBatRestored": { 'num': 1, 'name': '岛屿办事处蝙蝠木乃伊奖励', 'hint': '通过在火山中打破非矿石岩石找到' },
				"IslandFrogRestored": { 'num': 1, 'name': '岛屿办事处青蛙木乃伊奖励', 'hint': '通过在丛林中割草找到' },
				"IslandCenterSkeletonRestored": { 'num': 6, 'name': '岛屿办事处巨大动物化石奖励', 'hint': "头骨-在金椰子中找到\n脊椎-在岛北钓鱼中找到\n腿（2）-通过打破化石石头找到（高几率）\n肋骨-通过打破化石石头找到（低几率）\n尾巴-通过在岛北淘金找到" },
				"IslandSnakeRestored": { 'num': 3, 'name': '岛屿办事处蛇化石奖励', 'hint': "头骨-通过挖掘岛北或岛西的文物点找到\n椎骨（2）-通过挖掘岛西的文物点找到" },
				"Bush_IslandWest_104_3": { 'num': 1, 'name': '岛屿西部灌木', 'hint': '地图东北部密集树林中的隐藏路径终点(104,3)' },
				"Bush_IslandWest_31_24": { 'num': 1, 'name': '岛屿西部灌木', 'hint': '在老虎史莱姆区域的红木树后面(31,24)' },
				"Bush_IslandWest_38_56": { 'num': 1, 'name': '岛屿西部灌木', 'hint': '在鸟儿小屋西边的池塘附近的棕榈树后面(38,56)' },
				"Bush_IslandWest_75_29": { 'num': 1, 'name': '岛屿西部灌木', 'hint': '在农舍上方的树木前面(75,29)' },
				"Bush_IslandWest_64_30": { 'num': 1, 'name': '岛屿西部灌木', 'hint': '河流西侧的高地区域；从老虎史莱姆处顺时针跟随路径(64,30)' },
				"Bush_IslandWest_54_18": { 'num': 1, 'name': '岛屿西部灌木', 'hint': '在老虎史莱姆和吊桥之间的路径上被密集树木遮挡(54,18)' },
				"Bush_IslandWest_25_30": { 'num': 1, 'name': '岛屿西部灌木', 'hint': '在核桃门的东南边墙上(25,30)' },
				"Bush_IslandWest_15_3": { 'num': 1, 'name': '岛屿西部灌木', 'hint': '沿着海岸线向北经过核桃门(15,3)' },
				"Buried_IslandWest_21_81": { 'num': 1, 'name': '岛屿西部埋藏', 'hint': '在西南海岸的深色沙滩上，位于圆形凹陷之间(21,81)' },
				"Buried_IslandWest_62_76": { 'num': 1, 'name': '岛屿西部埋藏', 'hint': '在农场南部的废墟堆中，位于蓝色海星之间(62,76)' },
				"Buried_IslandWest_39_24": { 'num': 1, 'name': '岛屿西部埋藏', 'hint': '在老虎史莱姆区域，位于长草簇之间(39,24)' },
				"Buried_IslandWest_88_14": { 'num': 1, 'name': '岛屿西部埋藏', 'hint': '在东北角的草地中间，位于动画图块之间(88,14)' },
				"Buried_IslandWest_43_74": { 'num': 1, 'name': '岛屿西部埋藏', 'hint': '在蓝色和黄色海星之间的潮汐池附近，最初被巨石阻挡(43,74)' },
				"Buried_IslandWest_30_75": { 'num': 1, 'name': '岛屿西部埋藏', 'hint': '在潮汐池之间，由X标记(30,75)' },
				"IslandWestCavePuzzle": { 'num': 3, 'name': '岛屿西部音乐水晶谜题', 'hint': '在吊桥北方的隐藏洞穴中的“西蒙说”音乐水晶' },
				"SandDuggy": { 'num': 1, 'name': '岛屿西部掘地虫', 'hint': '可以放置物品来堵住其他洞口' },
				"TreeNutShot": { 'num': 1, 'name': '岛屿北部棕榈树', 'hint': '可以使用弹弓将核桃从树上打下来' },
				"Mermaid": { 'num': 5, 'name': '岛屿南部美人鱼谜题', 'hint': '使用长笛方块演奏美人鱼之歌；石头提供调音线索' },
				"Buried_IslandSouthEastCave_36_26": { 'num': 1, 'name': '海盗湾埋藏', 'hint': '在码头对面的桶中' },
				"Buried_IslandSouthEast_25_17": { 'num': 1, 'name': '岛屿南部埋藏', 'hint': '在星星池的东北方向，位于黄色海星之间(25,17)' },
				"StardropPool": { 'num': 1, 'name': '岛屿南部星型池', 'hint': '从池塘中钓出一个核桃' },
				"BananaShrine": { 'num': 3, 'name': '岛屿丛林香蕉神社奖励', 'hint': '在神龛上放置一个香蕉' },
				"IslandGourmand1": { 'num': 5, 'name': '岛屿农场青蛙美食家奖励 #1', 'hint': '种些甜瓜给美食家' },
				"IslandGourmand2": { 'num': 5, 'name': '岛屿农场青蛙美食家奖励 #2', 'hint': '种些小麦给美食家' },
				"IslandGourmand3": { 'num': 5, 'name': '岛屿农场青蛙美食家奖励 #3', 'hint': '种些大蒜给美食家' },
				"IslandShrinePuzzle": { 'num': 5, 'name': '岛屿丛林宝石神社奖励', 'hint': '将鸟儿掉落的宝石放在适当的基座上' },
			},
			trackerExtra = {
				// Extra because it has unique handling via a special NetWorldState variable
				"GoldenCoconut": { 'num': 1, 'name': '破开金椰子', 'hint': '' },
			},
			trackerLimited = {
				// These are (usually) awarded one at a time, sometimes with a random component.
				"Birdie": { 'num': 5, 'name': '"海盗妻子"任务奖励', 'hint': '' },
				"Darts": { 'num': 3, 'name': '赢得海盗湾飞镖小游戏', 'hint': '' },
				"TigerSlimeNut": { 'num': 1, 'name': '杀死岛屿西部的老虎史莱姆', 'hint': '' },
				"VolcanoNormalChest": { 'num': 1, 'name': '搜刮火山普通宝箱', 'hint': '' },
				"VolcanoRareChest": { 'num': 1, 'name': '搜刮火山稀有宝箱', 'hint': '' },
				"VolcanoBarrel": { 'num': 5, 'name': '打碎火山板条箱', 'hint': '' },
				"VolcanoMining": { 'num': 5, 'name': '挖掘火山石头', 'hint': '' },
				"VolcanoMonsterDrop": { 'num': 5, 'name': '击杀火山的怪物', 'hint': '' },
				"IslandFarming": { 'num': 5, 'name': '在岛屿农场收获作物', 'hint': '' },
				"MusselStone": { 'num': 5, 'name': '挖掘岛屿农场的蚌矿', 'hint': '' },
				"IslandFishing": { 'num': 5, 'name': '在姜岛钓鱼', 'hint': '' },
				"Island_N_BuriedTreasureNut": { 'num': 1, 'name': '日记残页 #10埋藏的宝藏', 'hint': '在火山入口西南的弯曲树旁(27,28); 必须读过日记残页' },
				"Island_W_BuriedTreasureNut": { 'num': 1, 'name': '日记残页 #4埋藏的宝藏', 'hint': '在小屋北面的沙滩上的灌木丛之间(18,42); 必须读过日记残页' },
				"Island_W_BuriedTreasureNut2": { 'num': 1, 'name': '日记残页 #6埋藏的宝藏', 'hint': '在农场东南角的海滩墙边(104,74); 必须读过日记残页' },
			};

		if (compareSemVer(saveInfo.version, version) < 0) {
			return '';
		}

		// These are shared in multiplayer so do not need any parsePlayer subroutines
		var gcc = $(xmlDoc).find('SaveGame > goldenCoconutCracked').text();
		if (gcc === "true") {
			found["GoldenCoconut"] = 1;
			found_count++;
		}
		$(xmlDoc).find('collectedNutTracker > string').each(function () {
			id = $(this).text();

			if (trackerAllAtOnce.hasOwnProperty(id)) {
				found[id] = trackerAllAtOnce[id].num;
				found_count += trackerAllAtOnce[id].num;
			}
		});
		$(xmlDoc).find('limitedNutDrops > item').each(function () {
			id = $(this).find('key > string').text();
			num = Number($(this).find('value > int').text());
			// Using the Joja Golden Parrot sets a lot of these to 9999
			if (trackerLimited.hasOwnProperty(id) && num > 0) {
				var n = Math.min(num, trackerLimited[id].num);
				found[id] = n;
				found_count += n;
			}
		});

		for (id in trackerAllAtOnce) {
			if (trackerAllAtOnce.hasOwnProperty(id)) {
				count += trackerAllAtOnce[id].num;
				if (!found.hasOwnProperty(id)) {
					need[id] = trackerAllAtOnce[id].num;
				}
			}
		}
		for (id in trackerExtra) {
			if (trackerExtra.hasOwnProperty(id)) {
				count += trackerExtra[id].num;
				if (!found.hasOwnProperty(id)) {
					need[id] = trackerExtra[id].num;
				}
			}
		}
		for (id in trackerLimited) {
			if (trackerLimited.hasOwnProperty(id)) {
				count += trackerLimited[id].num;
				if (found.hasOwnProperty(id)) {
					if (found[id] < trackerLimited[id].num) {
						need[id] = trackerLimited[id].num - found[id];
					}
				} else {
					need[id] = trackerLimited[id].num;
				}
			}
		}

		// The game_count vs found_count discrepancy should only happen through mods or cheating, but we will account for it
		// Most goals will use game_count except for the "collect all" milestone since we can still list unfound ones after.
		saveInfo.perfectionTracker[umid]["Walnuts"] = { 'count': game_count, 'total': count };
		if (compareSemVer(saveInfo.version, "1.5") >= 0) {
			var x = Math.min(100, 100 * game_count / count);
			var places = (x < 100) ? 1 : 0;
			x = x.toFixed(places);
			pt_pct = getPTLink(x + '%');
		}
		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		var intro;
		if (saveInfo.numPlayers > 1) {
			intro = 'Inhabitants of ' + saveInfo.farmName + ' Farm have';
		} else {
			intro = saveInfo.players[saveInfo.farmerId] + ' has';
		}
		output += '<span class="result">' + intro + ' found ' + game_count + ' of ' +
			count + ' golden walnuts.' + pt_pct + '</span>';
		if (found_count !== game_count) {
			output += '<br /><span class="result warn">Warning: Save lists a count of ' + game_count + " but we've found markers for " + found_count + '</span>';
		}
		if (game_count < count) {
			output += '<br/><span class="result">The ' + wikify("Golden Parrot", "Golden_Walnut#Golden_Joja_Parrot") + ' will charge ' + addCommas(10000 * (count - game_count)) + 'g to collect the rest.</span>';
		} else {
			output += '<br/><span class="result">The ' + wikify("Golden Parrot", "Golden_Walnut#Golden_Joja_Parrot") + (parrotUsed ? ' was' : ' was not') + ' used to finish the collection.</span>';
		}
		output += '<ul class="ach_list"><li>';
		output += (game_count >= 10) ? getMilestoneString('Collect enough walnuts (10) to earn Leo\'s trust.', 1) :
			getMilestoneString('Collect enough walnuts (10) to earn Leo\'s trust.', 0) + (10 - game_count) + ' more';
		output += '</li>\n<li>';
		output += (game_count >= 101) ? getMilestoneString('Collect enough walnuts (101) to access the secret room.', 1) :
			getMilestoneString('Collect enough walnuts (101) to access the secret room', 0) + (101 - game_count) + ' more';
		output += '</li>\n<li>';
		/*
		if (found_count >= count) {
			output += parrotUsed ? getAchieveImpossibleString('Master of Walnuts', 'collect all golden walnuts without any help') :
				getAchieveString('Master of Walnuts', 'collect all golden walnuts without any help', 1);
		} else {
			output += getAchieveString('Master of Walnuts', 'collect all golden walnuts without any help', 0) + (count - found_count) + ' more';
		}
		*/
		output += '</li></ul></div>';

		if (found_count < count) {
			meta.hasDetails = true;
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="need">Left to find:<ol>';
			var val = 0;
			var keys = Object.keys(need);
			var forceShowSpoilers = false;
			for (var i in keys) {
				id = keys[i];
				val += need[id];
				output += '<li value="' + val + '">';
				var extra = "";
				if (need[id] > 1) {
					extra = " -- " + need[id] + " 金核桃";
				}

				if (trackerAllAtOnce.hasOwnProperty(id)) {
					output += trackerAllAtOnce[id].name + extra;
					if (trackerAllAtOnce[id].hint !== '') {
						if (forceShowSpoilers) {
							output += ' -- <span class="note">' + trackerAllAtOnce[id].hint + '</span>';
						} else {
							output += ' (<span class="note" data-tooltip="' + trackerAllAtOnce[id].hint + '">Hover for spoilers</span>)';
						}
					}
					output += '</li>';
				} else if (trackerExtra.hasOwnProperty(id)) {
					output += trackerExtra[id].name + extra;
					if (trackerExtra[id].hint !== '') {
						if (forceShowSpoilers) {
							output += ' -- <span class="note">' + trackerExtra[id].hint + '</span>';
						} else {
							output += ' (<span class="note" data-tooltip="' + trackerExtra[id].hint + '">Hover for spoilers</span>)';
						}
					}
					output += '</li>';
				} else if (trackerLimited.hasOwnProperty(id)) {
					output += trackerLimited[id].name + extra;
					if (trackerLimited[id].hint !== '') {
						if (forceShowSpoilers) {
							output += ' -- <span class="note">' + trackerLimited[id].hint + '</span>';
						} else {
							output += ' (<span class="note" data-tooltip="' + trackerLimited[id].hint + '">Hover for spoilers</span>)';
						}
					}
					output += '</li>';
				} else {
					console.log("Walnut tracking found unknown id: " + id);
				}
			}
			output += '</ol></span></div>';
		}

		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + output + getSectionFooter();
		return output;
	}

	function parseIslandUpgrades(xmlDoc, saveInfo) {
		var title = 'Island Upgrades',
			anchor = makeAnchor(title),
			version = "1.5",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			count = 0,
			bought_count = 0,
			bought = {},
			need = {},
			id,
			cost = 0,
			upgrades = {
				"Island_FirstParrot": { 'cost': 1, 'name': 'Feed Leo\'s Friend' },
				"Island_Turtle": { 'cost': 10, 'name': 'Turtle Relocation' },
				"Island_UpgradeHouse": { 'cost': 20, 'name': 'Island Farmhouse' },
				"Island_Resort": { 'cost': 20, 'name': 'Resort' },
				"Island_UpgradeTrader": { 'cost': 10, 'name': 'Island Trader' },
				"Island_UpgradeBridge": { 'cost': 10, 'name': 'Bridge to Dig Site' },
				"Island_UpgradeParrotPlatform": { 'cost': 10, 'name': 'Parrot Express Platforms' },
				"Island_UpgradeHouse_Mailbox": { 'cost': 5, 'name': 'Mailbox' },
				"Island_W_Obelisk": { 'cost': 20, 'name': 'Obelisk to Return to Valley' },
				"Island_VolcanoBridge": { 'cost': 5, 'name': 'Bridge in Volcano entrance' },
				"Island_VolcanoShortcutOut": { 'cost': 5, 'name': 'Exit hole from Volcano vendor' },
			};

		if (compareSemVer(saveInfo.version, version) < 0) {
			return '';
		}
		count = Object.keys(upgrades).length;
		Object.keys(upgrades).forEach(function (id) {
			if (upgrades.hasOwnProperty(id) && saveInfo.data[saveInfo.farmerId].mailReceived.hasOwnProperty(id)) {
				bought[id] = 1
				bought_count++;
			} else {
				need[id] = upgrades[id].cost;
				cost += upgrades[id].cost;
			}
		});

		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		var intro;
		if (saveInfo.numPlayers > 1) {
			intro = 'Inhabitants of ' + saveInfo.farmName + ' Farm have';
		} else {
			intro = saveInfo.players[saveInfo.farmerId] + ' has';
		}
		output += '<span class="result">' + intro + ' purchased ' + bought_count + ' of ' +
			count + ' Island Upgrades.</span><ul class="ach_list">\n';
		output += '<li>';
		output += (bought_count >= count) ? getMilestoneString('Purchase all upgrades.', 1) :
			getMilestoneString('Purchase all upgrades', 0) + (count - bought_count) + ' more (costs ' + cost + ' walnuts)';
		output += '</li></ul></div>';

		if (bought_count < count) {
			meta.hasDetails = true;
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="need">Left to buy:<ol>';
			var val = 0;
			var keys = Object.keys(need);
			for (var i in keys) {
				id = keys[i];
				var extra = "";
				if (need[id] > 1) {
					extra = " -- costs " + need[id] + " walnuts";
				}
				output += '<li>' + upgrades[id].name + extra + '</li>';
			}
			output += '</ol></span></div>';
		}

		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + output + getSectionFooter();
		return output;
	}

	function parsePerfectionTracker(xmlDoc, saveInfo) {
		// Scoring details from Utility.percentGameComplete()
		var title = 'Perfection Tracker',
			anchor = makeAnchor(title),
			version = "1.5",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			buildings = $(xmlDoc).find("locations > GameLocation[" + saveInfo.ns_prefix + "\\:type='Farm'] > buildings"),
			type,
			pt_pct = 0,
			adj_pct = 0,
			waivers = (compareSemVer(saveInfo.version, '1.6') >= 0) ? Number($(xmlDoc).find("perfectionWaivers").text()) : 0,
			extra = (waivers > 0) ? ("(+" + waivers + " Waivers)") : "",
			left,
			places = 1,
			numObelisks = 0,
			missingObelisks = [],
			pKeys = ["Shipping", "Cooking", "Crafting", "Fishing", "Great Friends", "Skills"],
			bKeys = ["Monsters", "Stardrops"],
			need = '';

		if (compareSemVer(saveInfo.version, version) < 0) {
			return '';
		}

		$(buildings).children('Building').each(function () {
			type = $(this).children('buildingType').text();
			if (saveInfo.perfectionTracker.global.hasOwnProperty(type)) {
				saveInfo.perfectionTracker.global[type] = true;
			}
		});

		// Perfection is somewhat different than other mechanics for multiplayer. While some objectives are global and others are
		// player-specific, the game will count the highest percentage for all player-specific goals. The end result is that there
		// is only a single combined perfection score which could be larger than any player's individual total.
		if (saveInfo.perfectionTracker.global["Earth Obelisk"]) { numObelisks++; } else { missingObelisks.push(wikify("Earth", "Earth Obelisk", 1)); }
		if (saveInfo.perfectionTracker.global["Water Obelisk"]) { numObelisks++; } else { missingObelisks.push(wikify("Water", "Water Obelisk", 1)); }
		if (saveInfo.perfectionTracker.global["Desert Obelisk"]) { numObelisks++; } else { missingObelisks.push(wikify("Desert", "Desert Obelisk", 1)); }
		if (saveInfo.perfectionTracker.global["Island Obelisk"]) { numObelisks++; } else { missingObelisks.push(wikify("Island", "Island Obelisk", 1)); }
		numObelisks = Math.min(numObelisks, 4);
		var pct = { "Walnuts": Math.min(saveInfo.perfectionTracker.global["Walnuts"].count / saveInfo.perfectionTracker.global["Walnuts"].total, 1) },
			best = {};
		pKeys.forEach(function (k) {
			pct[k] = 0;
			best[k] = "";
			Object.keys(saveInfo.players).forEach(function (umid) {
				var p = Math.min(saveInfo.perfectionTracker[umid][k].count / saveInfo.perfectionTracker[umid][k].total, 1);
				if (p > pct[k]) {
					pct[k] = p;
					best[k] = saveInfo.players[umid];
				}
			});
		});
		// Boolean perfection goals are stored in the pct structure too even though it's confusing and inconsistent
		bKeys.forEach(function (k) {
			pct[k] = false;
			best[k] = "";
			Object.keys(saveInfo.players).forEach(function (umid) {
				if (!pct[k] && saveInfo.perfectionTracker[umid][k]) {
					pct[k] = true;
					best[k] = saveInfo.players[umid];
				}
			});
		});

		pt_pct = numObelisks + (saveInfo.perfectionTracker.global["Gold Clock"] ? 10 : 0) +
			(pct["Monsters"] ? 10 : 0) + (pct["Stardrops"] ? 10 : 0) +
			15 * pct["Shipping"] + 11 * pct["Great Friends"] + 10 * pct["Cooking"] + 10 * pct["Crafting"] + 10 * pct["Fishing"] +
			5 * pct["Walnuts"] + 5 * pct["Skills"];
		0;
		left = 100 - pt_pct - waivers;
		adj_pct = Math.min(100, pt_pct + waivers);
		adj_pct = adj_pct.toFixed((adj_pct < 100) ? 1 : 0);
		pt_pct = pt_pct.toFixed((pt_pct < 100) ? 1 : 0);
		left = left.toFixed((left < 100) ? 1 : 0);

		output = '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + 'Inhabitants of ' + saveInfo.farmName + ' Farm have earned ' + adj_pct + '% Total Perfection (details below).</span>';
		output += '<br/><span class="result">Note that the Walnut Room display always rounds down and will show: ' + Math.floor(pt_pct) +
			'% ' + extra + '</span>';
		output += '<ul class="ach_list"><li>';
		output += (pt_pct >= 100) ? getMilestoneString('100% Completion', 1) :
			getMilestoneString('100% Completion', 0) + left + '% more';
		output += '</li></ul></div>';
		meta.hasDetails = true;
		output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
		output += '<span class="result">Percentage Breakdown</span>';
		output += '<ul class="ach_list"><li>';
		output += (pct["Shipping"] >= 1) ? getPerfectionPctString(pct["Shipping"], 15, 'Produce &amp; Forage Shipped', 1, best["Shipping"]) :
			getPerfectionPctString(pct["Shipping"], 15, 'Produce &amp; Forage Shipped', 0, best["Shipping"]) + ' -- <a href="#sec_Basic_Shipping">see above for needs</a>';
		output += '</li><li>';
		output += (numObelisks == 4) ? getPerfectionNumString(numObelisks, 4, 'Obelisks on Farm', 1) :
			getPerfectionNumString(numObelisks, 4, 'Obelisks on Farm', 0) + ' -- need ' + missingObelisks.join(', ');
		output += '</li><li>';
		output += getPerfectionBoolString(10, 'Golden Clock on Farm', saveInfo.perfectionTracker.global["Gold Clock"]) + (saveInfo.perfectionTracker.global["Gold Clock"] ? "" : ' -- need to build a ' + wikify("Gold Clock"));
		output += '</li><li>';
		output += getPerfectionBoolString(10, 'Monster Slayer Hero (all slayer goals)', pct["Monsters"], best["Monsters"]) + (pct["Monsters"] ? "" : ' -- <a href="#sec_Monster_Hunting">see above for needs</a>');
		output += '</li><li>';
		output += (pct["Great Friends"] >= 1) ? getPerfectionPctString(pct["Great Friends"], 11, 'Great Friends (maxing all relationships)', 1, best["Great Friends"]) :
			getPerfectionPctString(pct["Great Friends"], 11, 'Great Friends (maxing all relationships)', 0, best["Great Friends"]) + ' -- <a href="#sec_Social">see above for needs</a>';
		output += '</li><li>';
		output += (pct["Skills"] >= 1) ? getPerfectionPctNumString(pct["Skills"], 5, 25, 'Farmer Level (max all skills)', 1, best["Skills"]) :
			getPerfectionPctNumString(pct["Skills"], 5, 25, 'Farmer Level (max all skills)', 0, best["Skills"]) + ' -- <a href="#sec_Skills">see above for needs</a>';
		output += '</li><li>';
		output += getPerfectionBoolString(10, 'Found All Stardrops', pct["Stardrops"], best["Stardrops"]) + (pct["Stardrops"] ? "" : ' -- <a href="#sec_Stardrops">see above for needs</a>');
		output += '</li><li>';
		output += (pct["Cooking"] >= 1) ? getPerfectionPctString(pct["Cooking"], 10, 'Cooking Recipes Made', 1, best["Cooking"]) :
			getPerfectionPctString(pct["Cooking"], 10, 'Cooking Recipes Made', 0, best["Cooking"]) + ' -- <a href="#sec_Cooking">see above for needs</a>';
		output += '</li><li>';
		output += (pct["Crafting"] >= 1) ? getPerfectionPctString(pct["Crafting"], 10, 'Crafting Recipes Made', 1, best["Crafting"]) :
			getPerfectionPctString(pct["Crafting"], 10, 'Crafting Recipes Made', 0, best["Crafting"]) + ' -- <a href="#sec_Crafting">see above for needs</a>';
		output += '</li><li>';
		output += (pct["Fishing"] >= 1) ? getPerfectionPctString(pct["Fishing"], 10, 'Fish Caught', 1, best["Fishing"]) :
			getPerfectionPctString(pct["Fishing"], 10, 'Fish Caught', 0, best["Fishing"]) + ' -- <a href="#sec_Fishing">see above for needs</a>';
		output += '</li><li>';
		output += (pct["Walnuts"] >= 1) ? getPerfectionPctNumString(pct["Walnuts"], 5, 130, 'Golden Walnuts Found', 1) :
			getPerfectionPctNumString(pct["Walnuts"], 5, 130, 'Golden Walnuts Found', 0) + ' -- <a href="#sec_Golden_Walnuts">see above for needs</a>';
		if (waivers > 0) {
			output += '</li><li><span class="pt_yes"><span class="pts">' + waivers + '%</span> from purchase of ' + waivers +
				' Perfection Waivers</span>';
		}
		output += '</li></ul></div>';

		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + output + getSectionFooter();
		return output;
	}

	function parsePlayerPerfection(player, saveInfo, meta) {
		var output = '',
			table = [],
			farmer = $(player).children('name').html(),
			umid = $(player).children('UniqueMultiplayerID').text(),
			pt_pct = 0,
			left,
			places = 1,
			numObelisks = 0,
			missingObelisks = [],
			need = '';

		if (saveInfo.perfectionTracker.global["Earth Obelisk"]) { numObelisks++; } else { missingObelisks.push("Earth"); }
		if (saveInfo.perfectionTracker.global["Water Obelisk"]) { numObelisks++; } else { missingObelisks.push("Water"); }
		if (saveInfo.perfectionTracker.global["Desert Obelisk"]) { numObelisks++; } else { missingObelisks.push("Desert"); }
		if (saveInfo.perfectionTracker.global["Island Obelisk"]) { numObelisks++; } else { missingObelisks.push("Island"); }

		var pct = {
			"Walnuts": Math.min(saveInfo.perfectionTracker.global["Walnuts"].count / saveInfo.perfectionTracker.global["Walnuts"].total, 1),
			"Shipping": saveInfo.perfectionTracker[umid]["Shipping"].count / saveInfo.perfectionTracker[umid]["Shipping"].total,
			"Cooking": saveInfo.perfectionTracker[umid]["Cooking"].count / saveInfo.perfectionTracker[umid]["Cooking"].total,
			"Crafting": saveInfo.perfectionTracker[umid]["Crafting"].count / saveInfo.perfectionTracker[umid]["Crafting"].total,
			"Fishing": saveInfo.perfectionTracker[umid]["Fishing"].count / saveInfo.perfectionTracker[umid]["Fishing"].total,
			"Great Friends": saveInfo.perfectionTracker[umid]["Great Friends"].count / saveInfo.perfectionTracker[umid]["Great Friends"].total,
			"Skills": Math.min(saveInfo.perfectionTracker[umid]["Skills"].count / saveInfo.perfectionTracker[umid]["Skills"].total, 1)
		};
		numObelisks = Math.min(numObelisks, 4);

		pt_pct = numObelisks + (saveInfo.perfectionTracker.global["Gold Clock"] ? 10 : 0) +
			(saveInfo.perfectionTracker[umid]["Monsters"] ? 10 : 0) + (saveInfo.perfectionTracker[umid]["Stardrops"] ? 10 : 0) +
			15 * pct["Shipping"] + 11 * pct["Great Friends"] + 10 * pct["Cooking"] + 10 * pct["Crafting"] + 10 * pct["Fishing"] +
			5 * pct["Walnuts"] + 5 * pct["Skills"];
		0;
		pt_pct = pt_pct.toFixed((pt_pct < 100) ? 1 : 0);
		left = 100 - pt_pct;
		left = left.toFixed((left < 100) ? 1 : 0);

		output = '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + farmer + ' has ' + pt_pct + '% Total Completion (details below).</span>';
		output += '<ul class="ach_list"><li>';
		output += (pt_pct >= 100) ? getMilestoneString('100% Completion', 1) :
			getMilestoneString('100% Completion', 0) + left + '% more';
		output += '</li></ul></div>';
		meta.hasDetails = true;
		output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
		output += '<span class="result">Percentage Breakdown</span>';
		output += '<ul class="ach_list"><li>';
		output += (pct["Shipping"] >= 1) ? getPerfectionPctString(pct["Shipping"], 15, 'Produce &amp; Forage Shipped', 1) :
			getPerfectionPctString(pct["Shipping"], 15, 'Produce &amp; Forage Shipped', 0) + ' -- <a href="#sec_Basic_Shipping">see above for needs</a>';
		output += '</li><li>';
		output += (numObelisks == 4) ? getPerfectionNumString(numObelisks, 4, 'Obelisks on Farm', 1) :
			getPerfectionNumString(numObelisks, 4, 'Obelisks on Farm', 0) + ' -- need ' + missingObelisks.join(', ');
		output += '</li><li>';
		output += getPerfectionBoolString(10, 'Golden Clock on Farm', saveInfo.perfectionTracker.global["Gold Clock"]) + (saveInfo.perfectionTracker.global["Gold Clock"] ? "" : ' -- need to build a ' + wikify("Gold Clock"));
		output += '</li><li>';
		output += getPerfectionBoolString(10, 'Monster Slayer Hero (all slayer goals)', saveInfo.perfectionTracker[umid]["Monsters"]) + (saveInfo.perfectionTracker[umid]["Monsters"] ? "" : ' -- <a href="#sec_Monster_Hunting">see above for needs</a>');
		output += '</li><li>';
		output += (pct["Great Friends"] >= 1) ? getPerfectionPctString(pct["Great Friends"], 11, 'Great Friends (maxing all relationships)', 1) :
			getPerfectionPctString(pct["Great Friends"], 11, 'Great Friends (maxing all relationships)', 0) + ' -- <a href="#sec_Social">see above for needs</a>';
		output += '</li><li>';
		output += (pct["Skills"] >= 1) ? getPerfectionPctNumString(pct["Skills"], 5, 25, 'Farmer Level (max all skills)', 1) :
			getPerfectionPctNumString(pct["Skills"], 5, 25, 'Farmer Level (max all skills)', 0) + ' -- <a href="#sec_Skills">see above for needs</a>';
		output += '</li><li>';
		output += getPerfectionBoolString(10, 'Found All Stardrops', saveInfo.perfectionTracker[umid]["Stardrops"]) + (saveInfo.perfectionTracker[umid]["Stardrops"] ? "" : ' -- <a href="#sec_Stardrops">see above for needs</a>');
		output += '</li><li>';
		output += (pct["Cooking"] >= 1) ? getPerfectionPctString(pct["Cooking"], 10, 'Cooking Recipes Made', 1) :
			getPerfectionPctString(pct["Cooking"], 10, 'Cooking Recipes Made', 0) + ' -- <a href="#sec_Cooking">see above for needs</a>';
		output += '</li><li>';
		output += (pct["Crafting"] >= 1) ? getPerfectionPctString(pct["Crafting"], 10, 'Crafting Recipes Made', 1) :
			getPerfectionPctString(pct["Crafting"], 10, 'Crafting Recipes Made', 0) + ' -- <a href="#sec_Crafting">see above for needs</a>';
		output += '</li><li>';
		output += (pct["Fishing"] >= 1) ? getPerfectionPctString(pct["Fishing"], 10, 'Fish Caught', 1) :
			getPerfectionPctString(pct["Fishing"], 10, 'Fish Caught', 0) + ' -- <a href="#sec_Fishing">see above for needs</a>';
		output += '</li><li>';
		output += (pct["Walnuts"] >= 1) ? getPerfectionPctNumString(pct["Walnuts"], 5, 130, 'Golden Walnuts Found', 1) :
			getPerfectionPctNumString(pct["Walnuts"], 5, 130, 'Golden Walnuts Found', 0) + ' -- <a href="#sec_Golden_Walnuts">see above for needs</a>';
		output += '</li></ul></div>';
		table.push(output);

		return table;
	}

	function parsePowers(xmlDoc, saveInfo) {
		// Power information is taken and modified from Data/Powers.xnb
		// We only handle queries used in that file. See StardewValley.GameStateQuery.DefaultResolvers for other possibilities
		var title = 'Books, Special Items &amp; Powers',
			anchor = makeAnchor(title),
			version = "1.6",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			table = [];
		meta.bookpowers = {
			"Book_AnimalCatalogue": "PLAYER_STAT Current Book_AnimalCatalogue 1",
			"Book_Artifact": "PLAYER_STAT Current Book_Artifact 1",
			"Book_Bombs": "PLAYER_STAT Current Book_Bombs 1",
			"Book_Crabbing": "PLAYER_STAT Current Book_Crabbing 1",
			"Book_Defense": "PLAYER_STAT Current Book_Defense 1",
			"Book_Diamonds": "PLAYER_STAT Current Book_Diamonds 1",
			"Book_Friendship": "PLAYER_STAT Current Book_Friendship 1",
			"Book_Grass": "PLAYER_STAT Current Book_Grass 1",
			"Book_Horse": "PLAYER_STAT Current Book_Horse 1",
			"Book_Marlon": "PLAYER_STAT Current Book_Marlon 1",
			"Book_Mystery": "PLAYER_STAT Current Book_Mystery 1",
			"Book_PriceCatalogue": "PLAYER_STAT Current Book_PriceCatalogue 1",
			"Book_Roe": "PLAYER_STAT Current Book_Roe 1",
			"Book_Speed": "PLAYER_STAT Current Book_Speed 1",
			"Book_Speed2": "PLAYER_STAT Current Book_Speed2 1",
			"Book_Trash": "PLAYER_STAT Current Book_Trash 1",
			"Book_Void": "PLAYER_STAT Current Book_Void 1",
			"Book_WildSeeds": "PLAYER_STAT Current Book_WildSeeds 1",
			"Book_Woodcutting": "PLAYER_STAT Current Book_Woodcutting 1",
		},
			meta.otherpowers = {
				"BearPaw": "PLAYER_HAS_SEEN_EVENT Current 2120303",
				"ClubCard": "PLAYER_HAS_FLAG Current HasClubCard",
				"DarkTalisman": "PLAYER_HAS_FLAG Current HasDarkTalisman",
				"DwarvishTranslationGuide": "PLAYER_HAS_FLAG Host HasDwarvishTranslationGuide",
				"ForestMagic": "PLAYER_HAS_FLAG Current canReadJunimoText",
				"KeyToTheTown": "PLAYER_HAS_FLAG Current HasTownKey",
				"MagicInk": "PLAYER_HAS_FLAG Current HasMagicInk",
				"MagnifyingGlass": "PLAYER_HAS_FLAG Current HasMagnifyingGlass",
				"Mastery_Combat": "PLAYER_STAT Current mastery_4 1",
				"Mastery_Farming": "PLAYER_STAT Current mastery_0 1",
				"Mastery_Fishing": "PLAYER_STAT Current mastery_1 1",
				"Mastery_Foraging": "PLAYER_STAT Current mastery_2 1",
				"Mastery_Mining": "PLAYER_STAT Current mastery_3 1",
				"RustyKey": "PLAYER_HAS_FLAG Host HasRustyKey",
				"SkullKey": "PLAYER_HAS_FLAG Host HasSkullKey",
				"SpecialCharm": "PLAYER_HAS_FLAG Current HasSpecialCharm",
				"SpringOnionMastery": "PLAYER_HAS_SEEN_EVENT Current 3910979",
			},
			meta.translate = {
				"BearPaw": "Bear's Knowledge",
				"ClubCard": "Qi Club Card",
				"DarkTalisman": "Dark Talisman",
				"DwarvishTranslationGuide": "Dwarvish Translation Guide",
				"ForestMagic": "Forest Magic",
				"KeyToTheTown": "Key to the Town",
				"MagicInk": "Magic Ink",
				"MagnifyingGlass": "Magnifying Glass",
				"Mastery_Combat": "Combat Mastery Perk",
				"Mastery_Farming": "Farming Mastery Perk",
				"Mastery_Fishing": "Fishing Mastery Perk",
				"Mastery_Foraging": "Foraging Mastery Perk",
				"Mastery_Mining": "Mining Mastery Perk",
				"RustyKey": "Rusty Key",
				"SkullKey": "Skull Key",
				"SpecialCharm": "Special Charm",
				"SpringOnionMastery": "Spring Onion Mastery",
			},
			meta.query = {
				'PLAYER_HAS_SEEN_EVENT': 'eventsSeen',
				'PLAYER_STAT': 'stats',
				'PLAYER_HAS_FLAG': 'mailReceived',
			};

		if (compareSemVer(saveInfo.version, version) < 0) {
			return '';
		}
		table[0] = parsePlayerPowers($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerPowers, meta);
		playerOutput += printTranspose(table);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput + getSectionFooter();
		return output;
	}

	function parsePlayerPowers(player, saveInfo, meta) {
		var output = '',
			have_book = 0,
			have_other = 0,
			id,
			umid = $(player).children('UniqueMultiplayerID').text(),
			need = [],
			book_count = Object.keys(meta.bookpowers).length,
			other_count = Object.keys(meta.otherpowers).length,
			power_count = book_count + other_count;

		Object.keys(meta.bookpowers).forEach(function (k) {
			//type of check | who | key to compare | value to compare
			var fields = meta.bookpowers[k].split(' ');
			var hasIt = false;
			var checkVal = (fields.length > 3) ? fields[3] : true;
			// we assume that a Host check actually checks both host and current player;
			// and, since the only values used in the base game are Host and Current, we therefore
			// always check the current player if we haven't found it yet.
			if (fields[1] === 'Host') {
				hasIt = (saveInfo.data[saveInfo.farmerId][meta.query[fields[0]]].hasOwnProperty(fields[2]) &&
					saveInfo.data[saveInfo.farmerId][meta.query[fields[0]]][fields[2]] >= checkVal);
			}
			if (!hasIt) {
				hasIt = (saveInfo.data[umid][meta.query[fields[0]]].hasOwnProperty(fields[2]) &&
					saveInfo.data[umid][meta.query[fields[0]]][fields[2]] >= checkVal);
			}
			if (hasIt) {
				have_book++;
			} else {
				var txt = k;
				if (meta.translate.hasOwnProperty(k)) {
					txt = meta.translate[k];
				} else if (saveInfo.objects.hasOwnProperty(k)) {
					txt = saveInfo.objects[k];
				}
				need.push('<li><span class="booktitle">' + txt + '</span></li>');
			}
		});

		Object.keys(meta.otherpowers).forEach(function (k) {
			var fields = meta.otherpowers[k].split(' ');
			var hasIt = false;
			var checkVal = (fields.length > 3) ? fields[3] : true;
			if (fields[1] === 'Host') {
				hasIt = (saveInfo.data[saveInfo.farmerId][meta.query[fields[0]]].hasOwnProperty(fields[2]) &&
					saveInfo.data[saveInfo.farmerId][meta.query[fields[0]]][fields[2]] === checkVal);
			}
			if (!hasIt) {
				hasIt = (saveInfo.data[umid][meta.query[fields[0]]].hasOwnProperty(fields[2]) &&
					saveInfo.data[umid][meta.query[fields[0]]][fields[2]] === checkVal);
			}
			if (hasIt) {
				have_other++;
			} else {
				var txt = k;
				if (meta.translate.hasOwnProperty(k)) {
					txt = meta.translate[k];
				} else if (saveInfo.objects.hasOwnProperty(k)) {
					txt = saveInfo.objects[k];
				}
				need.push('<li>' + txt + '</li>');
			}
		});

		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + saveInfo.players[umid] + ' has read ' + have_book +
			' of ' + book_count + ' books.</span><br />\n';
		output += '<ul class="ach_list"><li>';
		output += (have_book >= book_count) ? getAchieveString('Well Read', 'Read all books', 1) :
			getAchieveString('Well-read', 'Read all books', 0) + (book_count - have_book) + ' more';
		output += '</li></ul></div>';
		output += '<span class="result">' + saveInfo.players[umid] + ' has received ' + have_other +
			' of ' + other_count + ' special items &amp; powers.</span><br />\n';
		output += '<ul class="ach_list"><li>';
		output += (have_other >= other_count) ? getMilestoneString('Acquire all special items &amp; powers', 1) :
			getMilestoneString('Acquire all special items &amp; powers', 0) + (other_count - have_other) + ' more';
		output += '</li></ul></div>';
		if (need.length > 0) {
			meta.hasDetails = true;
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="need">Left:';
			if (have_book < book_count) {
				output += ' (Books listed first)';
			}
			output += '<ol>' + need.sort().join('') + '</ol></span></div>';
		}
		return [output];
	}

	function parseArcadeGames(xmlDoc, saveInfo) {
		var title = 'Arcade Games',
			anchor = makeAnchor(title),
			version = "1.5",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			table = [],
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class };

		if (compareSemVer(saveInfo.version, version) < 0) {
			return '';
		}

		table[0] = parsePlayerArcade($(xmlDoc).find('SaveGame > player'), saveInfo, meta);
		parseFarmhands(xmlDoc, saveInfo, table, parsePlayerArcade, meta);
		playerOutput += printTranspose(table);
		// reusing table in a different way
		table = [];
		$(xmlDoc).find("junimoKartLeaderboards > entries > NetLeaderboardsEntry").each(function () {
			table.push('<li>' + addCommas($(this).find('score > *').text()) + ' &ndash; ' + $(this).find('name > *').text() + '</li>');
			//table.push('<li>' + $(this).find('name > *').text() + ' &ndash; ' + addCommas($(this).find('score > *').text()) + '</li>');
		});
		meta.hasDetails = (table.length > 0);
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + playerOutput;
		if (table.length > 0) {
			output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
			output += '<span class="result">Junimo Kart (Endless Mode) Leaderboard:</span><ol class="outer">';
			output += table.join('');
			output += '</ol></div>';
		}
		output += getSectionFooter();
		return output;
	}

	function parsePlayerArcade(player, saveInfo, meta) {
		var output = '',
			umid = $(player).children('UniqueMultiplayerID').text(),
			hasBeatenPK = saveInfo.data[umid].mailReceived.hasOwnProperty("Beat_PK"),
			hasBeatenJK = saveInfo.data[umid].mailReceived.hasOwnProperty("JunimoKart"),
			need = [];

		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + saveInfo.players[umid] + ' has' + (hasBeatenPK ? '' : ' not') + ' beaten Journey of the Prairie King.</span><br/>';
		var pkProgress = 0;
		var pkSave = $(player).children('JOTPKProgress');
		if (pkSave.length > 0) {
			var level = 1 + Number($(pkSave).find('whichRound > int').text());
			var sublevel = 1 + Number($(pkSave).find('whichWave > int').text());
			output += '<span class="result">' + saveInfo.players[umid] + ' has a JotPK save at stage ' + level + '-' + sublevel + ' (' +
				(($(pkSave).find('died > boolean').text() === 'true') ? 'not ' : '') + 'deathless)</span><br/>';
			pkProgress = (level == 3) ? 8 : ((level == 2) ? 4 : -1) + sublevel;
		} else {
			output += '<span class="result">' + saveInfo.players[umid] + ' does not have a saved JotPK game.';
		}
		output += '<ul class="ach_list"><li>';
		output += (hasBeatenPK) ? getAchieveString('Prairie King', "Beat 'Journey of the Prairie King'", 1) :
			getAchieveString('Prairie King', "Beat 'Journey of the Prairie King'", 0) + ' to clear ' + (13 - pkProgress) + ' more level(s)';
		output += '</li></ul>';

		output += '<span class="result">' + saveInfo.players[umid] + ' has' + (hasBeatenJK ? '' : ' not') + ' beaten Junimo Kart (Progress Mode).</span><br/>';
		output += '<ul class="ach_list"><li>';
		output += (hasBeatenJK) ? getMilestoneString("Beat 'Junimo Kart'", 1) :
			getMilestoneString("Beat 'Junimo Kart'", 0) + ' to complete Progress Mode';
		output += '</li></ul>';

		output += '</div>';
		return [output];
	}

	function parseAnimals(xmlDoc, saveInfo) {
		var title = 'Animal Summary',
			anchor = makeAnchor(title),
			version = "1.6",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class };

		if (compareSemVer(saveInfo.version, version) < 0) {
			return '';
		}
		// Technically this should only be set if there are actually pets/animals on the farm
		meta.hasDetails = true;

		var list = [];
		$(xmlDoc).find('locations > GameLocation > Characters > NPC').each(function () {
			if ($(this).attr(saveInfo.ns_prefix + ':type') === 'Pet' || $(this).attr(saveInfo.ns_prefix + ':type') === 'Cat' || $(this).attr(saveInfo.ns_prefix + ':type') === 'Dog') {
				var type = $(this).find('petType').text();
				//var breed = $(this).find('whichBreed').text();
				var thisPetLove = Number($(this).find('friendshipTowardFarmer').text());
				list.push('<li>' + type + ' named ' + $(this).find('name').first().text() + ' (' + thisPetLove + ' friendship points)</li>');
			}
		});
		output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">Farm Pets (' + list.length + ')</span></div>';
		output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '">';
		output += '<ol class="outer">' + list.sort().join('') + "</ol>";
		output += "</div>";

		$(xmlDoc).find("[" + saveInfo.ns_prefix + "\\:type='Farm'] Building").each(function () {
			var btype = $(this).find('buildingType').text();
			var cur = $(this).find('currentOccupants').text();
			var max = $(this).find('maxOccupants').text();
			if (btype === "Coop" || btype === "Big Coop" || btype === "Deluxe Coop" || btype === "Barn" || btype === "Big Barn" || btype === "Deluxe Barn") {
				var list = [];
				$(this).find('indoors > Animals > SerializableDictionaryOfInt64FarmAnimal FarmAnimal').each(function () {
					var cracker = $(this).find('hasEatenAnimalCracker').text() === 'true';
					var type = $(this).find('type').text();
					var extra;
					if (type === 'Pig') {
						extra = ' [<span class="ms_imp">cannot eat cracker</span>]';
					} else {
						extra = (cracker) ? ' [<span class="ms_yes">has eaten cracker</span>]' : ' [<span class="ms_no">has not eaten cracker</span>]';
					}
					list.push('<li>' + type + ' named ' + $(this).find('name').text() + extra + '</li>');
				});
				output += '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
				output += '<span class="result">' + btype + ' (' + cur + '/' + max + ')</span></div>';
				output += '<div class="' + meta.anchor + '_details ' + meta.det_class + '"><ol class="outer">';
				output += list.sort().join('') + "</ol></div>";
			}
		});
		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + output + getSectionFooter();
		return output;
	}

	function parseRaccoons(xmlDoc, saveInfo) {
		var title = 'Forest Neighbors',
			anchor = makeAnchor(title),
			version = "1.6",
			sum_class = getSummaryClass(saveInfo, version),
			det_class = getDetailsClass(saveInfo, version),
			output = '',
			playerOutput = '',
			meta = { "hasDetails": false, "anchor": anchor, "sum_class": sum_class, "det_class": det_class },
			intro,
			timesFed = Number($(xmlDoc).find("SaveGame > timesFedRaccoons").text()),
			lastFed = Number($(xmlDoc).find("SaveGame > daysPlayedWhenLastRaccoonBundleWasFinished").text()),
			daysSinceFed = saveInfo.data[saveInfo.farmerId].stats["daysPlayed"] - lastFed,
			checkBundles = false,
			id;

		if (compareSemVer(saveInfo.version, version) < 0) {
			return '';
		}
		// Windstorm: mail flags raccoonTreeFallen, checkedRaccoonStump, raccoonMovedIn
		// Stump repaired: <worldStateIDs><string>forestStumpFixed</string>
		// Progress: netWorldState IDs timesFedRaccoons and daysPlayedWhenLastRaccoonBundleWasFinished
		if (saveInfo.data[saveInfo.farmerId].mailReceived.hasOwnProperty("raccoonMovedIn")) {
			intro = "Mr. Raccoon has moved into the refurbished stump in the forest.";
			checkBundles = true;
		} else if (saveInfo.data[saveInfo.farmerId].mailReceived.hasOwnProperty("raccoonTreeFallen")) {
			intro = "The big tree in the forest has fallen and repairs may be needed.";
		} else if (saveInfo.data[saveInfo.farmerId].mailReceived.hasOwnProperty('ccPantry') ||
			saveInfo.data[saveInfo.farmerId].mailReceived.hasOwnProperty('jojaPantry')) {
			intro = "The Greenhouse has been repaired. Where did that raccoon go?";
		} else {
			intro = "The Greenhouse has not yet been repaired.";
		}
		output = '<div class="' + meta.anchor + '_summary ' + meta.sum_class + '">';
		output += '<span class="result">' + intro + '</span><br />\n';
		output += '<span class="result">The neighbors have been helped ' + timesFed + ' times';
		if (lastFed > 0) {
			output += ' (most recently ' + daysSinceFed + ' days ago)';
		}
		output += '.</span><br />\n';
		output += '<ul class="ach_list"><li>';
		// patch 1.6.4 changed achievement trigger from 7 to 8 babies which means 8 to 9 timesFed
		if (timesFed > 9 || (timesFed == 9 && daysSinceFed > 7)) {
			output += getAchieveString("Good Neighbors", "help your forest neighbors grow their family", 1);
		} else if (timesFed == 9 && daysSinceFed <= 7) {
			output += getAchieveString("Good Neighbors", "help your forest neighbors grow their family", 0) + 'to wait a few more days';
		} else {
			output += getAchieveString("Good Neighbors", "help your forest neighbors grow their family", 0) + 'to help ' + (9 - timesFed) + ' more times';
		}

		output = getSectionHeader(saveInfo, title, anchor, meta.hasDetails, version) + output + getSectionFooter();
		return output;
	}


	function createTOC() {
		var text,
			id,
			list = "<ul>";
		$("h2, h3").each(function () {
			if ($(this).is(":visible")) {
				text = $(this).text();
				id = 'sec_' + makeAnchor(ReturnEn(text));
				$(this).attr('id', id);
				list += '<li><a href="#' + id + '">' + ReturnCn(text) + '</a></li>\n';
			}
		});
		list += '</ul>';
		document.getElementById('TOC-details').innerHTML = list;
	}

	function togglePlayer(e) {
		//console.log("Somebody clicked on " + $(e.currentTarget).attr('id') + " which has a class of " + $(e.currentTarget).attr('class'));
		// Adjust PlayerList entry to reflect status of this player
		var isOn = ($(e.currentTarget).attr('class') === 'on'),
			match = "td." + $(e.currentTarget).attr('id').substring(5);
		$(e.currentTarget).attr('class', (isOn ? 'off' : 'on'));
		// Go find all the entries for this player and toggle them.
		$(match).each(function () {
			if ($(this).is(":visible")) {
				$(this).hide();
			} else {
				$(this).show();
			}
		});
	}

	function createPlayerList(numPlayers, farmer, farmhands) {
		var width = Math.floor(100 / (1 + numPlayers)),
			i,
			text = '<table><tr><th>Toggle Player Display:</th>' + '<td id="List_PL_1" class="on">' + farmer + '</td>';
		for (i = 2; i <= numPlayers; i++) {
			text += ' <td id="List_PL_' + i + '" class="on">' + farmhands[i - 2] + '</td>';
		}
		text += '</tr></table>';
		$("#PlayerList").html(text);
		$("#PlayerList").show();
		// Add click handlers
		for (i = 1; i <= numPlayers; i++) {
			var ID = "#List_PL_" + i;
			$(ID).click(togglePlayer);
		}
	}

	function handleFileSelect(evt) {
		var file = evt.target.files[0],
			reader = new FileReader(),
			prog = document.getElementById('progress');

		// Switch version saves are compressed and wind up quite small so we do the probably dumb thing of assuming
		// compression if the read file is under 500k. We need to make this determination now because a compressed
		// file should be read as an ArrayBuffer but an uncompressed one as Text
		var saveCompressed = (file.size < 512000);

		prog.value = 0;
		$('#output-container').hide();
		$('#progress-container').show();
		$('#changelog').hide();
		$('#PlayerList').hide();
		reader.onloadstart = function (e) {
			prog.value = 20;
		};
		reader.onprogress = function (e) {
			if (e.lengthComputable) {
				var p = 20 + (e.loaded / e.total * 30);
				prog.value = p;
			}
		};
		reader.onload = function (e) {
			var output = "",
				xmlDoc,
				saveInfo = {};
			if (saveCompressed) {
				try {
					xmlDoc = $.parseXML(pako.inflate(e.target.result, { to: 'string' }));
				} catch (error) {
					var message = "<h3>Save Parse Error</h3><p>The app was unable to process the save file. This is most likely a bug with the app, so please let the dev know about it. Details below.</p>";
					$('#parse-error').html(message + '<p class="code">' + error + '<br/>' + error.stack + '</p>');
				}
			} else {
				try {
					xmlDoc = $.parseXML(e.target.result);
				} catch (error) {
					var message = "<h3>Save Parse Error</h3><p>The app was unable to process the save file. This is most likely a bug with the app, so please let the dev know about it. Details below.</p>";
					$('#parse-error').html(message + '<p class="code">' + error + '<br/>' + error.stack + '</p>');
				}
			}

			saveInfo.outputPrefOld = 'hide_details';
			var opt = document.getElementsByName('opt-old');
			if (opt !== null) {
				for (var i = 0; i < opt.length; i++) {
					if (opt[i].checked) {
						saveInfo.outputPrefOld = opt[i].value;
						Cookies.set('checkup-opt-old', opt[i].value, { expires: 365, path: '', SameSite: "Lax" });
						break;
					}
				}
			}
			saveInfo.outputPrefNew = 'hide_all';
			var opt = document.getElementsByName('opt-new');
			if (opt !== null) {
				for (var i = 0; i < opt.length; i++) {
					if (opt[i].checked) {
						saveInfo.outputPrefNew = opt[i].value;
						Cookies.set('checkup-opt-new', opt[i].value, { expires: 365, path: '', SameSite: "Lax" });
						break;
					}
				}
			}

			try {
				output += parseSummary(xmlDoc, saveInfo);
				output += parseMoney(xmlDoc, saveInfo);
				output += parseSkills(xmlDoc, saveInfo);
				output += parseSkillMastery(xmlDoc, saveInfo);
				output += parseQuests(xmlDoc, saveInfo);
				output += parseSpecialOrders(xmlDoc, saveInfo);
				output += parseMonsters(xmlDoc, saveInfo);
				prog.value = 60;
				output += parseStardrops(xmlDoc, saveInfo);
				output += parseFamily(xmlDoc, saveInfo);
				output += parseSocial(xmlDoc, saveInfo);
				output += parseCooking(xmlDoc, saveInfo);
				output += parseCrafting(xmlDoc, saveInfo);
				output += parseFishing(xmlDoc, saveInfo);
				output += parseBasicShipping(xmlDoc, saveInfo);
				prog.value = 70;
				output += parseCropShipping(xmlDoc, saveInfo);
				output += parsePowers(xmlDoc, saveInfo);
				output += parseMuseum(xmlDoc, saveInfo);
				output += parseSecretNotes(xmlDoc, saveInfo);
				output += parseJournalScraps(xmlDoc, saveInfo);
				output += parseBundles(xmlDoc, saveInfo);
				output += parseRaccoons(xmlDoc, saveInfo);
				prog.value = 80;
				output += parseGrandpa(xmlDoc, saveInfo);
				output += parseWalnuts(xmlDoc, saveInfo);
				output += parseIslandUpgrades(xmlDoc, saveInfo);
				output += parsePerfectionTracker(xmlDoc, saveInfo);
				output += parseArcadeGames(xmlDoc, saveInfo);
				output += parseAnimals(xmlDoc, saveInfo);
				prog.value = 90;

				document.getElementById('out').innerHTML = output;
				prog.value = 100;

				// Now that output has been added to the page, we need to add the output-toggling to each section
				$('#output-container .collapsible').each(function () {
					$(this).children('button').click(toggleVisible);
				});

				$('#output-container').show();
				$('#progress-container').hide();
				createTOC();
				$('#TOC').show();
			} catch (error) {
				var message = "<h3>Save Parse Error</h3><p>The app was unable to process the save file. This is most likely a bug with the app, so please let the dev know about it. Details below.</p>";
				$('#parse-error').html(message + '<p class="code">' + error + '<br/>' + error.stack + '</p>');
			}
		};
		if (saveCompressed) {
			reader.readAsArrayBuffer(file);
		} else {
			reader.readAsText(file);
		}
	}
	document.getElementById('file_select').addEventListener('change', handleFileSelect, false);

	/*		var t = evt.target;
			if ($(t).next().is(':visible')) {
				$(t).next().hide();
				$(t).html("Show Details");
			} else {
				$(t).next().show();
				$(t).html("Hide Details");
			}
	*/

	function toggleVisible(evt) {
		var e = evt.target;
		var text = $(e).html();
		var theClass = '.' + $(e).attr("data-target");
		$(theClass).each(function () {
			if ($(this).is(':visible')) {
				$(this).hide();
				$(e).html(text.replace("隐藏", "显示"));
			} else {
				$(this).show();
				$(e).html(text.replace("显示", "隐藏"));
			}
		});
	}

	// At this point, this will only affect changelog
	$('.collapsible').each(function () {
		$(this).children('button').click(toggleVisible);
	});
	var c = Cookies.get('checkup-opt-old');
	if (typeof (c) !== 'undefined') {
		var opt = document.getElementsByName('opt-old');
		if (opt !== null) {
			for (var i = 0; i < opt.length; i++) {
				if (opt[i].value === c) {
					opt[i].checked = true;
					break;
				}
			}
		}
	}
	c = Cookies.get('checkup-opt-new');
	if (typeof (c) !== 'undefined') {
		var opt = document.getElementsByName('opt-new');
		if (opt !== null) {
			for (var i = 0; i < opt.length; i++) {
				if (opt[i].value === c) {
					opt[i].checked = true;
					break;
				}
			}
		}
	}
};
