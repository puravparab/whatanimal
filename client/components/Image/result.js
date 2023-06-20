import { useState, useEffect } from 'react'
import styles from '../../styles/image.module.css'

const classes = [
		{"acinonyx-jubatus": "Cheetah"}, {"aethia-cristatella": "Crested Auklet"}, {"agalychnis-callidryas": "Tree Frog"}, 
		{"agkistrodon-contortrix": "Eastern Copperhead"}, {"ailuropoda-melanoleuca": "Giant Panda"}, {"ailurus-fulgens": "Red Panda"}, 
		{"alces-alces": "Moose"}, {"anas-platyrhynchos": "Mallard"}, {"ankylosaurus-magniventris": "Ankylosaurus"}, {"apis-mellifera": "Western Honey Bee"}, 
		{"aptenodytes-forsteri": "Emperor Penguin"}, {"aquila-chrysaetos": "Golden Eagle"}, {"ara-macao": "Scarlet Macaw"}, {"architeuthis-dux": "Giant Squid"}, 
		{"ardea-herodias": "Great Blue Heron"}, {"balaenoptera-musculus": "Blue Whale"}, {"betta-splendens": "Siamese Fighting Fish"}, 
		{"bison-bison": "American Bison"}, {"bos-gaurus": "Gaur"}, {"bos-taurus": "Domestic Cow"}, {"bradypus-variegatus": "Brown-throated Three-toed Sloth"}, 
		{"branta-canadensis": "Canada Goose"}, {"canis-lupus": "Wolf"}, {"canis-lupus-familiaris": "Domestic Dog"}, {"carcharodon-carcharias": "Great White Shark"}, 
		{"cardinalis-cardinalis": "Northern Cardinal"}, {"cathartes-aura": "Turkey Vulture"}, {"centrochelys-sulcata": "African Spurred Tortoise"}, 
		{"centruroides-vittatus": "Striped Bark Scorpion"}, {"ceratitis-capitata": "Mediterranean Fruit Fly"}, {"ceratotherium-simum": "White Rhino"}, 
		{"chelonia-mydas": "Green Sea Turtle"}, {"chrysemys-picta": "Painted Turtle"}, {"circus-hudsonius": "Northern Harrier"}, {"codium-fragile": "Dead Man's Fingers"}, 
		{"coelacanthiformes": "Coelacanth"}, {"colaptes-auratus": "Northern Flicker"}, {"connochaetes-gnou": "Wildebeest"}, {"correlophus-ciliatus": "Crested Giant Gecko"}, 
		{"crocodylus-niloticus": "Crocodile"}, {"crotalus-atrox": "Western diamondback rattlesnake"}, {"crotophaga-sulcirostris": "Groove-billed Ani"}, 
		{"cryptoprocta-ferox": "Fossa"}, {"cyanocitta-cristata": "Blue Jay"}, {"danaus-plexippus": "Monarch Butterfly"}, {"dasypus-novemcinctus": "Nine-banded Armadillo"}, 
		{"delphinapterus-leucas": "Beluga"}, {"dendrobatidae": "Poison Dart Frog"}, {"dermochelys-coriacea": "Leatherback Sea Turtle"}, {"desmodus-rotundus": "Vampire Bat"}, 
		{"diplodocus": "Diplodocus"}, {"dugong-dugon": "Dugong"}, {"eidolon-helvum": "Straw-coloured Fruit Bat"}, {"enhydra-lutris": "Sea Otter"}, 
		{"enteroctopus-dofleini": "Giant Pacific octopus"}, {"equus-caballus": "Horse"}, {"equus-quagga": "Plains Zebra"}, {"eudocimus-albus": "American white ibis"}, 
		{"eunectes-murinus": "Green Anaconda"}, {"falco-peregrinus": "Peregrine Falcon"}, {"felis-catus": "Cat"}, {"formicidae": "Ant"}, {"gallus-gallus-domesticus": "Chicken"}, 
		{"gavialis-gangeticus": "Gharial"}, {"geococcyx-californianus": "Greater Roadrunner"}, {"giraffa-camelopardalis": "Northern Giraffe"}, {"gorilla-gorilla": "Gorilla"}, 
		{"haliaeetus-leucocephalus": "Bald Eagle"}, {"hapalochlaena-maculosa": "Lesser Blue-ringed Octopus"}, {"heloderma-suspectum": "Gila Monster"}, {"heterocera": "Moth"}, 
		{"hippopotamus-amphibius": "Hippopotamus"}, {"homo-sapiens": "Modern Humans"}, {"hydrurga-leptonyx": "Leopard Seal"}, {"icterus-galbula": "Baltimore Oriole"}, 
		{"icterus-gularis": "Altamira Oriole"}, {"icterus-spurius": "Orchard Oriole"}, {"iguana-iguana": "Green Iguana"}, {"iguanodon-bernissartensis": "Iguanadon"}, 
		{"inia-geoffrensis": "Boto"}, {"lampropeltis-triangulum": "Milk snake"}, {"lemur-catta": "Ring-tailed Lemur"}, {"lepus-americanus": "Snowshoe Hare"}, 
		{"loxodonta-africana": "African Bush Elephant"}, {"macropus-giganteus": "Kangaroo"}, {"malayopython-reticulatus": "Reticulated Python"}, {"mammuthus-primigeniu": "Woolly Mammoth"}, 
		{"martes-americana": "American Marten"}, {"megaptera-novaeangliae": "Humpback Whale"}, {"melanerpes-carolinus": "Red-bellied Woodpecker"}, {"mellisuga-helenae": "Bee Hummingbird"}, 
		{"mergus-serrator": "Red-breasted Merganser"}, {"mimus-polyglottos": "Northern Mockingbird"}, {"monodon-monoceros": "Narwhal"}, {"musca-domestica": "Common House Fly"}, 
		{"odobenus-rosmarus": "Walrus"}, {"okapia-johnstoni": "Okapi"}, {"ophiophagus-hannah": "King Cobra"}, {"orcinus-orca": "Killer Whale"}, {"ornithorhynchus-anatinus": "Platypus"}, 
		{"ovis-aries": "Sheep"}, {"ovis-canadensis": "Bighorn Sheep"}, {"panthera-leo": "Lion"}, {"panthera-onca": "Jaguar"}, {"panthera-pardus": "Leopard"}, {"panthera-tigris": "Tiger"}, 
		{"pantherophis-alleghaniensis": "Eastern Ratsnake"}, {"pantherophis-guttatus": "Corn Snake"}, {"papilio-glaucus": "Eastern Tiger Swallowtail"}, {"passerina-ciris": "Painted Bunting"}, 
		{"pavo-cristatus": "Indian Peafowl"}, {"periplaneta-americana": "American Cockroach"}, {"phascolarctos-cinereus": "Koala"}, {"phoebetria-fusca": "Sooty Albatross"}, 
		{"phoenicopterus-ruber": "American Flamingo"}, {"phyllobates-terribilis": "Golden Poison Dart Frog"}, {"physalia-physalis": "Portuguese Man o' War"}, 
		{"physeter-macrocephalus": "Sperm Whale"}, {"poecile-atricapillus": "Black-capped Chickadee"}, {"pongo-abelii": "Orangutan"}, {"procyon-lotor": "Raccoon"}, 
		{"pteranodon-longiceps": "Pteranodon"}, {"pterois-mombasae": "African Lionfish"}, {"pterois-volitans": "Common Lionfish"}, {"puma-concolor": "Cougar"}, {"rattus-rattus": "Black Rat"}, 
		{"rusa-unicolor": "Sambar"}, {"salmo-salar": "Salmon"}, {"sciurus-carolinensis": "Eastern Gray Squirrel"}, {"smilodon-populator": "Smilodon"}, {"spheniscus-demersus": "African Penguin"}, 
		{"sphyrna-mokarran": "Great hammerhead shark"}, {"spinosaurus-aegyptiacus": "Spinosaurus"}, {"stegosaurus-stenops": "Stegosaurus"}, {"struthio-camelus": "Common Ostrich"}, {"tapirus": "Tapir"}, 
		{"tarsius-pumilus": "Pygmy Tarsier"}, {"taurotragus-oryx": "Common Eland"}, {"telmatobufo-bullocki": "Bullock Mountains False Toad"}, {"thryothorus-ludovicianus": "Carolina Wren"}, 
		{"triceratops-horridus": "Triceratops"}, {"trilobita": "Trilobites"}, {"turdus-migratorius": "American Robin"}, {"tursiops-truncatus": "Common Bottlenose Dolphin"}, {"tyrannosaurus-rex": "T. Rex"}, 
		{"tyrannus-tyrannus": "Eastern Kingbird"}, {"ursus-arctos-horribilis": "Grizzly Bear"}, {"ursus-maritimus": "Polar Bear"}, {"varanus-komodoensis": "Komodo Dragon"}, 
		{"vulpes-vulpes": "Red Fox"}, {"vultur-gryphus": "Andean Condor"}]

const Result = (props) => {
	return (
		<div className={styles.resultContainer}>
			{props.data == '' && 
				<p>{props.msg}</p>
			}
			{props.data != '' &&
				<>
					<p>Prediction: {Object.entries(classes[props.data.prediction.predicted_index])[0][1]} ({props.data.response_time.toFixed(2)}s)</p>

					{props.data.prediction.scores
						.sort((a,b) => b[1] - a[1])
						.map((score, id) => {
							const className = Object.entries(classes[score[0]])[0]
							const species = className[0]
							const common = className[1]
							return (
								<div key={id} className={styles.predictionItem}>
									<p>{common} ({species}): {score[1]}%</p>
								</div>
							)
					})}
				</>
			}
		</div>
	)
}

export default Result