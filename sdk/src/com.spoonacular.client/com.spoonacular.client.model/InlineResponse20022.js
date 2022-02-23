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
import InlineResponse20022Nutrition from './InlineResponse20022Nutrition';
import RecipesParseIngredientsEstimatedCost from './RecipesParseIngredientsEstimatedCost';

/**
 * The InlineResponse20022 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022
 * @version 1.0
 */
class InlineResponse20022 {
    /**
     * Constructs a new <code>InlineResponse20022</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022
     * @param id {Number} 
     * @param original {String} 
     * @param originalName {String} 
     * @param name {String} 
     * @param nameClean {String} 
     * @param amount {Number} 
     * @param unit {String} 
     * @param unitShort {String} 
     * @param unitLong {String} 
     * @param possibleUnits {Array.<String>} 
     * @param estimatedCost {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsEstimatedCost} 
     * @param consistency {String} 
     * @param shoppingListUnits {Array.<String>} 
     * @param aisle {String} 
     * @param image {String} 
     * @param meta {Array.<Object>} 
     * @param nutrition {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022Nutrition} 
     * @param categoryPath {Array.<String>} 
     */
    constructor(id, original, originalName, name, nameClean, amount, unit, unitShort, unitLong, possibleUnits, estimatedCost, consistency, shoppingListUnits, aisle, image, meta, nutrition, categoryPath) { 
        
        InlineResponse20022.initialize(this, id, original, originalName, name, nameClean, amount, unit, unitShort, unitLong, possibleUnits, estimatedCost, consistency, shoppingListUnits, aisle, image, meta, nutrition, categoryPath);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, original, originalName, name, nameClean, amount, unit, unitShort, unitLong, possibleUnits, estimatedCost, consistency, shoppingListUnits, aisle, image, meta, nutrition, categoryPath) { 
        obj['id'] = id;
        obj['original'] = original;
        obj['originalName'] = originalName;
        obj['name'] = name;
        obj['nameClean'] = nameClean;
        obj['amount'] = amount;
        obj['unit'] = unit;
        obj['unitShort'] = unitShort;
        obj['unitLong'] = unitLong;
        obj['possibleUnits'] = possibleUnits;
        obj['estimatedCost'] = estimatedCost;
        obj['consistency'] = consistency;
        obj['shoppingListUnits'] = shoppingListUnits;
        obj['aisle'] = aisle;
        obj['image'] = image;
        obj['meta'] = meta;
        obj['nutrition'] = nutrition;
        obj['categoryPath'] = categoryPath;
    }

    /**
     * Constructs a <code>InlineResponse20022</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022} The populated <code>InlineResponse20022</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20022();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('original')) {
                obj['original'] = ApiClient.convertToType(data['original'], 'String');
            }
            if (data.hasOwnProperty('originalName')) {
                obj['originalName'] = ApiClient.convertToType(data['originalName'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('nameClean')) {
                obj['nameClean'] = ApiClient.convertToType(data['nameClean'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('unitShort')) {
                obj['unitShort'] = ApiClient.convertToType(data['unitShort'], 'String');
            }
            if (data.hasOwnProperty('unitLong')) {
                obj['unitLong'] = ApiClient.convertToType(data['unitLong'], 'String');
            }
            if (data.hasOwnProperty('possibleUnits')) {
                obj['possibleUnits'] = ApiClient.convertToType(data['possibleUnits'], ['String']);
            }
            if (data.hasOwnProperty('estimatedCost')) {
                obj['estimatedCost'] = RecipesParseIngredientsEstimatedCost.constructFromObject(data['estimatedCost']);
            }
            if (data.hasOwnProperty('consistency')) {
                obj['consistency'] = ApiClient.convertToType(data['consistency'], 'String');
            }
            if (data.hasOwnProperty('shoppingListUnits')) {
                obj['shoppingListUnits'] = ApiClient.convertToType(data['shoppingListUnits'], ['String']);
            }
            if (data.hasOwnProperty('aisle')) {
                obj['aisle'] = ApiClient.convertToType(data['aisle'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], [Object]);
            }
            if (data.hasOwnProperty('nutrition')) {
                obj['nutrition'] = InlineResponse20022Nutrition.constructFromObject(data['nutrition']);
            }
            if (data.hasOwnProperty('categoryPath')) {
                obj['categoryPath'] = ApiClient.convertToType(data['categoryPath'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
InlineResponse20022.prototype['id'] = undefined;

/**
 * @member {String} original
 */
InlineResponse20022.prototype['original'] = undefined;

/**
 * @member {String} originalName
 */
InlineResponse20022.prototype['originalName'] = undefined;

/**
 * @member {String} name
 */
InlineResponse20022.prototype['name'] = undefined;

/**
 * @member {String} nameClean
 */
InlineResponse20022.prototype['nameClean'] = undefined;

/**
 * @member {Number} amount
 */
InlineResponse20022.prototype['amount'] = undefined;

/**
 * @member {String} unit
 */
InlineResponse20022.prototype['unit'] = undefined;

/**
 * @member {String} unitShort
 */
InlineResponse20022.prototype['unitShort'] = undefined;

/**
 * @member {String} unitLong
 */
InlineResponse20022.prototype['unitLong'] = undefined;

/**
 * @member {Array.<String>} possibleUnits
 */
InlineResponse20022.prototype['possibleUnits'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsEstimatedCost} estimatedCost
 */
InlineResponse20022.prototype['estimatedCost'] = undefined;

/**
 * @member {String} consistency
 */
InlineResponse20022.prototype['consistency'] = undefined;

/**
 * @member {Array.<String>} shoppingListUnits
 */
InlineResponse20022.prototype['shoppingListUnits'] = undefined;

/**
 * @member {String} aisle
 */
InlineResponse20022.prototype['aisle'] = undefined;

/**
 * @member {String} image
 */
InlineResponse20022.prototype['image'] = undefined;

/**
 * @member {Array.<Object>} meta
 */
InlineResponse20022.prototype['meta'] = undefined;

/**
 * @member {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20022Nutrition} nutrition
 */
InlineResponse20022.prototype['nutrition'] = undefined;

/**
 * @member {Array.<String>} categoryPath
 */
InlineResponse20022.prototype['categoryPath'] = undefined;






export default InlineResponse20022;

