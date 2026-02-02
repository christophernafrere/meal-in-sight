import {
    Ingredient,
    IngredientOnRecipe,
    IngredientType,
    Recipe,
    RecipeStep,
    Unity,
} from '@meal-in-sight/db/src/generated/prisma/browser';

export type IngredientOnRecipeWithIngredient = IngredientOnRecipe & {
    ingredient: Ingredient;
};

export type RecipeWithIngredients = Recipe & {
    difficulty: 1 | 2 | 3;
    upvote: number;
    ARDisplay: boolean;
    ingredients: IngredientOnRecipeWithIngredient[];
    steps: RecipeStep[];
};

export const fakeIngredients: Ingredient[] = [
    {
        id: 'ing-pate-lasagne',
        name: 'Pate a lasagne fraiche',
        description: 'Feuilles de pate fraiche pre-cuites.',
        type: IngredientType.Crudity,
    },
    {
        id: 'ing-boeuf-hache',
        name: 'Boeuf hache 15 pourcent',
        description: 'Viande de boeuf hachee a 15 pourcent de matiere grasse.',
        type: IngredientType.Meat,
    },
    {
        id: 'ing-base-tomate',
        name: 'Sauce tomate mijotee',
        description: 'Tomates, oignon et basilic cuits longuement.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-bechamel',
        name: 'Bechamel maison',
        description: 'Sauce lait, beurre et farine, sans additifs.',
        type: IngredientType.Fat,
    },
    {
        id: 'ing-mozzarella',
        name: 'Mozzarella rapee',
        description: 'Mozzarella douce rapee prete a gratiner.',
        type: IngredientType.Fat,
    },
    {
        id: 'ing-riz-arborio',
        name: 'Riz arborio',
        description: 'Riz rond italien riche en amidon.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-bouillon-legumes',
        name: 'Bouillon de legumes',
        description: 'Bouillon clair parfume aux herbes.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-champignons-mixtes',
        name: 'Champignons mixtes',
        description: 'Melange de girolles, pleurotes et shiitake.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-parmesan',
        name: 'Parmesan affine',
        description: 'Parmesan affine dix huit mois.',
        type: IngredientType.Fat,
    },
    {
        id: 'ing-huile-truffe',
        name: 'Huile de truffe',
        description: 'Huile de pepins de raisin aromatisee a la truffe noire.',
        type: IngredientType.Fat,
    },
    {
        id: 'ing-poulet-grille',
        name: 'Poulet grille',
        description: 'Filets de poulet marine grilles doucement.',
        type: IngredientType.Meat,
    },
    {
        id: 'ing-romaine',
        name: 'Salade romaine',
        description: 'Coeurs de romaine croquants.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-croutons',
        name: 'Croutons ailles',
        description: 'Croutons croustillants a l huile dolive et ail.',
        type: IngredientType.Crudity,
    },
    {
        id: 'ing-sauce-cesar',
        name: 'Sauce cesar',
        description: 'Sauce cremeuse anchois, citron et parmesan.',
        type: IngredientType.Fat,
    },
    {
        id: 'ing-pate-curry-vert',
        name: 'Pate de curry vert',
        description: 'Pate thai a base de piment vert et citronnelle.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-lait-coco',
        name: 'Lait de coco',
        description: 'Lait de coco riche en matiere grasse.',
        type: IngredientType.Fat,
    },
    {
        id: 'ing-poulet-blanc',
        name: 'Blanc de poulet',
        description: 'Morceaux de blanc de poulet tendre.',
        type: IngredientType.Meat,
    },
    {
        id: 'ing-aubergine-thai',
        name: 'Aubergine thai',
        description: 'Petites aubergines vertes thailandaises.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-basilic-thai',
        name: 'Basilic thai',
        description: 'Feuilles de basilic thai fraiches.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-cabillaud',
        name: 'Filet de cabillaud',
        description: 'Dos de cabillaud sans aretes.',
        type: IngredientType.Fish,
    },
    {
        id: 'ing-tortilla-bleue',
        name: 'Tortilla bleue',
        description: 'Tortilla de mais bleu souple.',
        type: IngredientType.Crudity,
    },
    {
        id: 'ing-mangue',
        name: 'Mangue en des',
        description: 'Des de mangue mure.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-creme-sure',
        name: 'Creme sure epicee',
        description: 'Creme sure au piment chipotle.',
        type: IngredientType.Fat,
    },
    {
        id: 'ing-chou-rouge',
        name: 'Chou rouge emince',
        description: 'Fins rubans de chou rouge cru.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-tomate-concassee',
        name: 'Tomate concassee',
        description: 'Tomates concassees sans peau ni pepins.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-poivron-rouge',
        name: 'Poivron rouge',
        description: 'Lamelles de poivron rouge grille.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-pois-chiches',
        name: 'Pois chiches cuits',
        description: 'Pois chiches cuits et egouttes.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-oeuf',
        name: 'Oeuf fermier',
        description: 'Oeufs de poules elevees en plein air.',
        type: null,
    },
    {
        id: 'ing-coriandre',
        name: 'Coriandre fraiche',
        description: 'Bouquet de coriandre fraichement coupe.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-bouillon-miso',
        name: 'Bouillon miso',
        description: 'Bouillon de miso rouge et kombu.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-nouilles-ramen',
        name: 'Nouilles ramen',
        description: 'Nouilles de ble tirees a la main.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-porc-chashu',
        name: 'Porc chashu',
        description: 'Poitrine de porc marine caramelisee.',
        type: IngredientType.Meat,
    },
    {
        id: 'ing-menma',
        name: 'Menma',
        description: 'Pousses de bambou fermentees.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-quinoa',
        name: 'Quinoa cuit',
        description: 'Grains de quinoa cuits legerement citronnes.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-falafel',
        name: 'Falafel croustillant',
        description: 'Boulettes de pois chiches frites.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-houmous',
        name: 'Houmous paprika',
        description: 'Puree de pois chiches au paprika fume.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-legumes-rotis',
        name: 'Legumes rotis',
        description: 'Courge, courgette et carotte roties.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-olives',
        name: 'Olives kalamata',
        description: 'Olives kalamata denoyautees.',
        type: IngredientType.Fat,
    },
    {
        id: 'ing-bouillon-pho',
        name: 'Bouillon pho',
        description: 'Bouillon clair aux epices douces.',
        type: IngredientType.Meat,
    },
    {
        id: 'ing-nouilles-riz',
        name: 'Nouilles de riz',
        description: 'Nouilles plates de riz cuites.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-boeuf-tranche',
        name: 'Boeuf finement tranche',
        description: 'Rumsteak tranche tres fin.',
        type: IngredientType.Meat,
    },
    {
        id: 'ing-pousses-soja',
        name: 'Pousses de soja',
        description: 'Pousses de haricot mungo croquantes.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-herbes',
        name: 'Herbes aromatiques',
        description: 'Menthe, coriandre et basilic thai.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-pate-feuilletee',
        name: 'Pate feuilletee pur beurre',
        description: 'Pate feuilletee pur beurre abaisse carre.',
        type: IngredientType.Fat,
    },
    {
        id: 'ing-poire',
        name: 'Poire conference',
        description: 'Poires conference mures pelees.',
        type: IngredientType.Vegetable,
    },
    {
        id: 'ing-sucre-blond',
        name: 'Sucre blond',
        description: 'Sucre de canne blond cristallise.',
        type: null,
    },
    {
        id: 'ing-beurre-demi-sel',
        name: 'Beurre demi sel',
        description: 'Beurre demi sel ferme.',
        type: IngredientType.Fat,
    },
    {
        id: 'ing-mascarpone',
        name: 'Mascarpone fouette',
        description: 'Mascarpone fouette legerement sucre.',
        type: IngredientType.Fat,
    },
];

const ingredientIndex = fakeIngredients.reduce<Record<string, Ingredient>>(
    (acc, ingredient) => {
        acc[ingredient.id] = ingredient;
        return acc;
    },
    {},
);

const pivot = (
    recipeId: string,
    ingredientId: string,
    quantity: number,
    baseUnity: Unity,
): IngredientOnRecipeWithIngredient => {
    const ingredient = ingredientIndex[ingredientId];
    if (!ingredient) {
        throw new Error(`Missing fake ingredient for id ${ingredientId}`);
    }

    return {
        recipeId,
        ingredientId,
        quantity,
        baseUnity,
        ingredient,
    };
};

const createStep = (
    recipeId: string,
    stepNumber: number,
    description: string,
    imageUrl?: string | null,
): RecipeStep => ({
    id: `${recipeId}-step-${stepNumber}`,
    recipeId,
    stepNumber,
    description,
    imageUrl: imageUrl ?? null,
});

export const fakeRecipes: RecipeWithIngredients[] = [
    {
        id: 'rec-lasagne-rustique',
        title: 'Lasagne rustique au boeuf',
        description:
            'Pates fraiches, ragout de boeuf mijote au vin rouge, bechamel legere et mozzarella gratinee.',
        alergens: ['gluten', 'lactose'],
        regim: ['omni'],
        globalCalories: 845,
        globalRate: 4,
        createdAt: new Date('2025-01-18T09:30:00Z'),
        createdById: 'user-chef-001',
        imageUrl:
            'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80',
        difficulty: 2,
        upvote: 863,
        ARDisplay: true,
        ingredients: [
            pivot('rec-lasagne-rustique', 'ing-pate-lasagne', 400, Unity.Gram),
            pivot('rec-lasagne-rustique', 'ing-boeuf-hache', 350, Unity.Gram),
            pivot('rec-lasagne-rustique', 'ing-base-tomate', 320, Unity.Gram),
            pivot('rec-lasagne-rustique', 'ing-bechamel', 260, Unity.Gram),
            pivot('rec-lasagne-rustique', 'ing-mozzarella', 180, Unity.Gram),
        ],
        steps: [
            createStep(
                'rec-lasagne-rustique',
                1,
                'Faire revenir oignon et boeuf jusqu a coloration.',
                'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-lasagne-rustique',
                2,
                'Monter les couches de pate, ragout et bechamel dans un plat.',
            ),
            createStep(
                'rec-lasagne-rustique',
                3,
                'Couvrir de mozzarella et cuire 25 minutes a 190°C.',
                'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-lasagne-rustique',
                4,
                'Laisser reposer 10 minutes pour fixer les couches.',
            ),
            createStep(
                'rec-lasagne-rustique',
                5,
                'Servir avec basilic frais et salade croquante.',
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
            ),
        ],
    },
    {
        id: 'rec-risotto-sauvage',
        title: 'Risotto aux champignons sauvages',
        description:
            'Arborio cremeux au bouillon d herbes, girolles sautees, parmesan affine et pointe de truffe.',
        alergens: ['lactose'],
        regim: ['vegetarian'],
        globalCalories: 690,
        globalRate: 5,
        createdAt: new Date('2025-02-02T11:15:00Z'),
        createdById: 'user-chef-002',
        imageUrl:
            'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=1200&q=80',
        difficulty: 3,
        upvote: 240,
        ARDisplay: false,
        ingredients: [
            pivot('rec-risotto-sauvage', 'ing-riz-arborio', 320, Unity.Gram),
            pivot(
                'rec-risotto-sauvage',
                'ing-bouillon-legumes',
                900,
                Unity.Gram,
            ),
            pivot(
                'rec-risotto-sauvage',
                'ing-champignons-mixtes',
                250,
                Unity.Gram,
            ),
            pivot('rec-risotto-sauvage', 'ing-parmesan', 60, Unity.Gram),
            pivot('rec-risotto-sauvage', 'ing-huile-truffe', 15, Unity.Gram),
        ],
        steps: [
            createStep(
                'rec-risotto-sauvage',
                1,
                'Suer echalotes et riz dans une sauteuse avec huile dolive.',
                'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-risotto-sauvage',
                2,
                'Ajouter le bouillon chaud louche apres louche en remuant.',
            ),
            createStep(
                'rec-risotto-sauvage',
                3,
                'Incorporer champignons sautes, parmesan et huile de truffe.',
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-risotto-sauvage',
                4,
                'Verifier la texture cremeuse et ajuster assaisonnement.',
            ),
            createStep(
                'rec-risotto-sauvage',
                5,
                'Servir immediatement dans des assiettes rechauffees.',
                'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80',
            ),
        ],
    },
    {
        id: 'rec-salade-cesar',
        title: 'Salade cesar au poulet grille',
        description:
            'Coeur de romaine croquant, poulet marine grilles, croutons ailles et sauce cesar maison.',
        alergens: ['gluten', 'poisson', 'lactose'],
        regim: ['omni'],
        globalCalories: 540,
        globalRate: 4,
        createdAt: new Date('2025-03-09T08:45:00Z'),
        createdById: 'user-chef-003',
        imageUrl:
            'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=1200&q=80',
        difficulty: 1,
        upvote: 540,
        ARDisplay: true,
        ingredients: [
            pivot('rec-salade-cesar', 'ing-poulet-grille', 250, Unity.Gram),
            pivot('rec-salade-cesar', 'ing-romaine', 180, Unity.Gram),
            pivot('rec-salade-cesar', 'ing-croutons', 60, Unity.Gram),
            pivot('rec-salade-cesar', 'ing-parmesan', 30, Unity.Gram),
            pivot('rec-salade-cesar', 'ing-sauce-cesar', 120, Unity.Gram),
        ],
        steps: [
            createStep(
                'rec-salade-cesar',
                1,
                'Griller le poulet marine puis le couper en lamelles.',
                'https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-salade-cesar',
                2,
                'Meler romaine, croutons et parmesan dans un grand saladier.',
            ),
            createStep(
                'rec-salade-cesar',
                3,
                'Ajouter le poulet et napper de sauce cesar.',
                'https://images.unsplash.com/photo-1525755664500-46e53ae66df7?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-salade-cesar',
                4,
                'Ajouter la sauce et meler delicatement pour enrober.',
            ),
            createStep(
                'rec-salade-cesar',
                5,
                'Servir avec copeaux de parmesan et citron.',
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
            ),
        ],
    },
    {
        id: 'rec-curry-vert',
        title: 'Curry vert thai au lait de coco',
        description:
            'Poulet juteux, aubergines et pois sucre mijotes dans un curry vert parfume au basilic thai.',
        alergens: ['lactose'],
        regim: ['omni'],
        globalCalories: 780,
        globalRate: 4,
        createdAt: new Date('2025-03-21T17:05:00Z'),
        createdById: 'user-chef-001',
        imageUrl:
            'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80',
        difficulty: 2,
        upvote: 412,
        ARDisplay: false,
        ingredients: [
            pivot('rec-curry-vert', 'ing-pate-curry-vert', 40, Unity.Gram),
            pivot('rec-curry-vert', 'ing-lait-coco', 400, Unity.Gram),
            pivot('rec-curry-vert', 'ing-poulet-blanc', 320, Unity.Gram),
            pivot('rec-curry-vert', 'ing-aubergine-thai', 200, Unity.Gram),
            pivot('rec-curry-vert', 'ing-basilic-thai', 18, Unity.Gram),
        ],
        steps: [
            createStep(
                'rec-curry-vert',
                1,
                'Faire frire la pate de curry avec un filet d huile.',
                'https://images.unsplash.com/photo-1612874471781-0834f6f2f282?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-curry-vert',
                2,
                'Ajouter lait de coco et poulet, laisser mijoter 10 minutes.',
            ),
            createStep(
                'rec-curry-vert',
                3,
                'Incorporer legumes et basilic, cuire encore 5 minutes.',
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-curry-vert',
                4,
                'Rectifier assaisonnement avec nuoc mam ou sucre de palme.',
            ),
            createStep(
                'rec-curry-vert',
                5,
                'Servir bien chaud avec riz jasmine.',
                'https://images.unsplash.com/photo-1542444868-3f2048a0b5bd?auto=format&fit=crop&w=1200&q=80',
            ),
        ],
    },
    {
        id: 'rec-tacos-poisson',
        title: 'Tacos de poisson croustillant',
        description:
            'Filets de cabillaud pane, salsa mangue citron vert, creme sure epicee dans tortillas bleues.',
        alergens: ['gluten', 'poisson'],
        regim: ['omni'],
        globalCalories: 630,
        globalRate: 4,
        createdAt: new Date('2025-04-02T12:25:00Z'),
        createdById: 'user-chef-004',
        imageUrl:
            'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1200&q=80',
        difficulty: 1,
        upvote: 329,
        ARDisplay: true,
        ingredients: [
            pivot('rec-tacos-poisson', 'ing-cabillaud', 360, Unity.Gram),
            pivot('rec-tacos-poisson', 'ing-tortilla-bleue', 200, Unity.Gram),
            pivot('rec-tacos-poisson', 'ing-mangue', 150, Unity.Gram),
            pivot('rec-tacos-poisson', 'ing-creme-sure', 80, Unity.Gram),
            pivot('rec-tacos-poisson', 'ing-chou-rouge', 110, Unity.Gram),
        ],
        steps: [
            createStep(
                'rec-tacos-poisson',
                1,
                'Paner le cabillaud et le frire jusqu a dorure.',
                'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-tacos-poisson',
                2,
                'Preparer salsa mangue citron vert et creme chipotle.',
            ),
            createStep(
                'rec-tacos-poisson',
                3,
                'Rechauffer tortillas, garnir de poisson, salsa et creme.',
                'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-tacos-poisson',
                4,
                'Ajouter chou rouge et herbes fraiches pour le croquant.',
            ),
            createStep(
                'rec-tacos-poisson',
                5,
                'Servir avec quartier de citron vert et sauce piqueante.',
                'https://images.unsplash.com/photo-1525755664500-46e53ae66df7?auto=format&fit=crop&w=1200&q=80',
            ),
        ],
    },
    {
        id: 'rec-shakshuka',
        title: 'Shakshuka aux pois chiches',
        description:
            'Oeufs cuits dans un melange tomate poivron fume, pois chiches rotis et coriandre fraiche.',
        alergens: ['oeuf'],
        regim: ['vegetarian'],
        globalCalories: 520,
        globalRate: 4,
        createdAt: new Date('2025-04-19T10:40:00Z'),
        createdById: 'user-chef-005',
        imageUrl:
            'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=80',
        difficulty: 1,
        upvote: 198,
        ARDisplay: false,
        ingredients: [
            pivot('rec-shakshuka', 'ing-tomate-concassee', 400, Unity.Gram),
            pivot('rec-shakshuka', 'ing-poivron-rouge', 180, Unity.Gram),
            pivot('rec-shakshuka', 'ing-pois-chiches', 220, Unity.Gram),
            pivot('rec-shakshuka', 'ing-oeuf', 200, Unity.Gram),
            pivot('rec-shakshuka', 'ing-coriandre', 12, Unity.Gram),
        ],
        steps: [
            createStep(
                'rec-shakshuka',
                1,
                'Cuire tomate et poivron avec les epices jusqu a reduction.',
                'https://images.unsplash.com/photo-1593032465171-8ed95cc8f1d2?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-shakshuka',
                2,
                'Ajouter pois chiches puis casser les oeufs sur le melange.',
            ),
            createStep(
                'rec-shakshuka',
                3,
                'Couvrir et cuire jusqu a coagulation des oeufs, parsemer de coriandre.',
                'https://images.unsplash.com/photo-1612872087720-bb876e3a3fd6?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-shakshuka',
                4,
                'Retirer du feu lorsque les blancs sont pris mais jaunes coulant.',
            ),
            createStep(
                'rec-shakshuka',
                5,
                'Servir avec pain pita legerement grille.',
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
            ),
        ],
    },
    {
        id: 'rec-ramen-miso',
        title: 'Ramen miso au porc laque',
        description:
            'Bouillon miso riche, nouilles fraiches, chashu caramelise, oeuf marine et menma croquant.',
        alergens: ['gluten', 'oeuf', 'soja'],
        regim: ['omni'],
        globalCalories: 780,
        globalRate: 5,
        createdAt: new Date('2025-05-06T19:20:00Z'),
        createdById: 'user-chef-002',
        imageUrl:
            'https://images.unsplash.com/photo-1604908177754-8e948352c322?auto=format&fit=crop&w=1200&q=80',
        difficulty: 3,
        upvote: 512,
        ARDisplay: true,
        ingredients: [
            pivot('rec-ramen-miso', 'ing-bouillon-miso', 700, Unity.Gram),
            pivot('rec-ramen-miso', 'ing-nouilles-ramen', 280, Unity.Gram),
            pivot('rec-ramen-miso', 'ing-porc-chashu', 210, Unity.Gram),
            pivot('rec-ramen-miso', 'ing-oeuf', 100, Unity.Gram),
            pivot('rec-ramen-miso', 'ing-menma', 60, Unity.Gram),
        ],
        steps: [
            createStep(
                'rec-ramen-miso',
                1,
                'Chauffer le bouillon miso avec mirin et sauce soja.',
                'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-ramen-miso',
                2,
                'Cuire les nouilles ramen al dente et les repartir en bols.',
            ),
            createStep(
                'rec-ramen-miso',
                3,
                'Ajouter bouillon, chashu, oeuf marine et menma.',
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-ramen-miso',
                4,
                'Completer avec ciboule, nori et graines de sesame.',
            ),
            createStep(
                'rec-ramen-miso',
                5,
                'Servir aussitot pour garder les nouilles souples.',
                'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=1200&q=80',
            ),
        ],
    },
    {
        id: 'rec-buddha-bowl',
        title: 'Buddha bowl mediterraneen',
        description:
            'Quinoa citronne, falafels croustillants, houmous paprika, legumes rotis et olives kalamata.',
        alergens: ['sesame'],
        regim: ['veggan'],
        globalCalories: 610,
        globalRate: 5,
        createdAt: new Date('2025-05-21T14:10:00Z'),
        createdById: 'user-chef-006',
        imageUrl:
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
        difficulty: 2,
        upvote: 276,
        ARDisplay: false,
        ingredients: [
            pivot('rec-buddha-bowl', 'ing-quinoa', 250, Unity.Gram),
            pivot('rec-buddha-bowl', 'ing-falafel', 180, Unity.Gram),
            pivot('rec-buddha-bowl', 'ing-houmous', 90, Unity.Gram),
            pivot('rec-buddha-bowl', 'ing-legumes-rotis', 220, Unity.Gram),
            pivot('rec-buddha-bowl', 'ing-olives', 45, Unity.Gram),
        ],
        steps: [
            createStep(
                'rec-buddha-bowl',
                1,
                'Cuire le quinoa puis le laisser tiedir avec citron et huile.',
                'https://images.unsplash.com/photo-1604908177225-d7bad45d0f6c?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-buddha-bowl',
                2,
                'Disposer quinoa, falafels et legumes rotis dans un bol.',
            ),
            createStep(
                'rec-buddha-bowl',
                3,
                'Ajouter houmous et olives pour servir.',
                'https://images.unsplash.com/photo-1589307004173-3c95204b1f31?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-buddha-bowl',
                4,
                'Arroser dun filet d huile dolive et dune touche de citron.',
            ),
            createStep(
                'rec-buddha-bowl',
                5,
                'Parsemer de graines de sesame et herbes fraiches.',
                'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
            ),
        ],
    },
    {
        id: 'rec-pho-bo',
        title: 'Soupe pho bo parfumee',
        description:
            'Bouillon clair aux epices douces, boeuf tranche fin, nouilles de riz et bouquet de fines herbes.',
        alergens: ['soja'],
        regim: ['omni'],
        globalCalories: 590,
        globalRate: 4,
        createdAt: new Date('2025-06-03T07:55:00Z'),
        createdById: 'user-chef-001',
        imageUrl:
            'https://images.unsplash.com/photo-1570183993633-4f98c0bbc9c3?auto=format&fit=crop&w=1200&q=80',
        difficulty: 2,
        upvote: 687,
        ARDisplay: true,
        ingredients: [
            pivot('rec-pho-bo', 'ing-bouillon-pho', 900, Unity.Gram),
            pivot('rec-pho-bo', 'ing-nouilles-riz', 220, Unity.Gram),
            pivot('rec-pho-bo', 'ing-boeuf-tranche', 160, Unity.Gram),
            pivot('rec-pho-bo', 'ing-pousses-soja', 80, Unity.Gram),
            pivot('rec-pho-bo', 'ing-herbes', 30, Unity.Gram),
        ],
        steps: [
            createStep(
                'rec-pho-bo',
                1,
                'Porter le bouillon pho a ebullition avec epices.',
                'https://images.unsplash.com/photo-1604908177225-d7bad45d0f6c?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-pho-bo',
                2,
                'Repartir nouilles et boeuf cru dans des bols.',
            ),
            createStep(
                'rec-pho-bo',
                3,
                'Verser le bouillon chaud et garnir de pousses et herbes.',
                'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-pho-bo',
                4,
                'Proposer basilic, lime et sauces pour personnaliser.',
            ),
            createStep(
                'rec-pho-bo',
                5,
                'Deguster tant que le bouillon est fumant.',
                'https://images.unsplash.com/photo-1525755664500-46e53ae66df7?auto=format&fit=crop&w=1200&q=80',
            ),
        ],
    },
    {
        id: 'rec-tarte-tatin',
        title: 'Tarte tatin aux poires epicees',
        description:
            'Poires caramelisees aux epices douces, feuillete craquant et chantilly au mascarpone.',
        alergens: ['gluten', 'lactose'],
        regim: ['vegetarian'],
        globalCalories: 720,
        globalRate: 4,
        createdAt: new Date('2025-06-28T15:35:00Z'),
        createdById: 'user-chef-007',
        imageUrl:
            'https://images.unsplash.com/photo-1589308078055-91868ffb735b?auto=format&fit=crop&w=1200&q=80',
        difficulty: 2,
        upvote: 451,
        ARDisplay: false,
        ingredients: [
            pivot('rec-tarte-tatin', 'ing-pate-feuilletee', 320, Unity.Gram),
            pivot('rec-tarte-tatin', 'ing-poire', 450, Unity.Gram),
            pivot('rec-tarte-tatin', 'ing-sucre-blond', 120, Unity.Gram),
            pivot('rec-tarte-tatin', 'ing-beurre-demi-sel', 70, Unity.Gram),
            pivot('rec-tarte-tatin', 'ing-mascarpone', 150, Unity.Gram),
        ],
        steps: [
            createStep(
                'rec-tarte-tatin',
                1,
                'Carameliser sucre et beurre dans une poele allant au four.',
                'https://images.unsplash.com/photo-1514516430032-7b090a252f95?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-tarte-tatin',
                2,
                'Disposer les poires et recouvrir de pate feuilletee.',
            ),
            createStep(
                'rec-tarte-tatin',
                3,
                'Cuire 30 minutes a 190°C puis servir avec mascarpone.',
                'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80',
            ),
            createStep(
                'rec-tarte-tatin',
                4,
                'Laisser reposer 5 minutes puis retourner sur un plat.',
            ),
            createStep(
                'rec-tarte-tatin',
                5,
                'Servir avec mascarpone fouette ou glace vanille.',
                'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
            ),
        ],
    },
];

const recipeIndex = fakeRecipes.reduce<Record<string, RecipeWithIngredients>>(
    (acc, recipe) => {
        acc[recipe.id] = recipe;
        return acc;
    },
    {},
);

export const getFakeRecipeById = (
    recipeId: string,
): RecipeWithIngredients | undefined => {
    return recipeIndex[recipeId];
};
