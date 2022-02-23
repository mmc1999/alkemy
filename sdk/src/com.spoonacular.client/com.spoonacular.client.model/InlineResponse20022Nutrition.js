/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over 380,000 recipes, thousands of ingredients, 800,000 food products, and 100,000 menu items. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RecipesParseIngredientsNutritionCaloricBreakdown from './RecipesParseIngredientsNutritionCaloricBreakdown';
import RecipesParseIngredientsNutritionNutrients from './RecipesParseIngredientsNutritionNutrients';
import RecipesParseIngredientsNutritionProperties from './RecipesParseIngredientsNutritionProperties';
import RecipesParseIngredientsNutritionWeightPerServing from './RecipesParseIngredientsNutritionWeightPerServing';

/**
 * The InlineResponse20022Nutrition model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022Nutrition
 * @version 1.0
 */
class InlineResponse20022Nutrition {
    /**
     * Constructs a new <code>InlineResponse20022Nutrition</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022Nutrition
     * @param nutrients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients>} 
     * @param properties {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionProperties>} 
     * @param caloricBreakdown {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionCaloricBreakdown} 
     * @param weightPerServing {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionWeightPerServing} 
     */
    constructor(nutrients, properties, caloricBreakdown, weightPerServing) { 
        
        InlineResponse20022Nutrition.initialize(this, nutrients, properties, caloricBreakdown, weightPerServing);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, nutrients, properties, caloricBreakdown, weightPerServing) { 
        obj['nutrients'] = nutrients;
        obj['properties'] = properties;
        obj['caloricBreakdown'] = caloricBreakdown;
        obj['weightPerServing'] = weightPerServing;
    }

    /**
     * Constructs a <code>InlineResponse20022Nutrition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022Nutrition} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022Nutrition} The populated <code>InlineResponse20022Nutrition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20022Nutrition();

            if (data.hasOwnProperty('nutrients')) {
                obj['nutrients'] = ApiClient.convertToType(data['nutrients'], [RecipesParseIngredientsNutritionNutrients]);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [RecipesParseIngredientsNutritionProperties]);
            }
            if (data.hasOwnProperty('caloricBreakdown')) {
                obj['caloricBreakdown'] = RecipesParseIngredientsNutritionCaloricBreakdown.constructFromObject(data['caloricBreakdown']);
            }
            if (data.hasOwnProperty('weightPerServing')) {
                obj['weightPerServing'] = RecipesParseIngredientsNutritionWeightPerServing.constructFromObject(data['weightPerServing']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients>} nutrients
 */
InlineResponse20022Nutrition.prototype['nutrients'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionProperties>} properties
 */
InlineResponse20022Nutrition.prototype['properties'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionCaloricBreakdown} caloricBreakdown
 */
InlineResponse20022Nutrition.prototype['caloricBreakdown'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionWeightPerServing} weightPerServing
 */
InlineResponse20022Nutrition.prototype['weightPerServing'] = undefined;






export default InlineResponse20022Nutrition;

