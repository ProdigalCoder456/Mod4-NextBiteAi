import '../Foodtips.css'

import {Snowflake, Package, Refrigerator, Timer, Zap, Recycle} from 'lucide-react';

const Foodtips = () => {
    return (
        <div className='foodtips'>
            <div className='foodtips-titles'>
                <h1>Food Storage Tips</h1>
                <p>Expert advice to keep your ingredients fresh and safe</p>
            </div>

        
        <div className="accordion w-75 mx-auto" id="accordionExample">
        {/* Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <Snowflake color="#009966" style={{backgroundColor:'transparent'}}/> Cold Storage Tips
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">

            <p className='subheading'>Refrigerator Guidelines</p>

            <ul className='bullets'>
            <li>Keep your refrigerator at or below 40°F (4°C). </li>
            <li>Don’t overcrowd your fridge—cold air needs space to circulate. </li>
            <li>Wipe up spills immediately to prevent bacteria like Listeria from spreading. </li>
            <li>Store leftovers in covered containers and refrigerate peeled or cut fruits and vegetables promptly.</li>
            <li>Check leftovers daily and toss anything that looks or smells off.</li>
            </ul>

            <p className='subheading'>Freezer Guidelines</p>
            <ul className='bullets'>
            <li>Your freezer should be set to 0°F (–18°C) or lower.</li>
            <li>Freezing food keeps it safe indefinitely, but quality may decrease over time. </li>
            <li>Label your frozen items with the date to keep track of how long they’ve been stored. </li>
            <li>Use airtight containers or freezer bags to prevent freezer burn.</li>
            </ul>

            </div>

          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <Package color="#009966" style={{backgroundColor:'transparent'}} /> Pantry & Shelf-Stable Storage
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            <ul className='bullets'>
            <li>Keep your pantry cool, clean, and dry. </li>
            <li>Use the first-in, first-out method: consume older items before newer ones. </li>
            <li>Check expiration and best-by dates regularly. </li>
            <li>Avoid overbuying to reduce spoilage and waste.</li>
            <li>The FoodKeeper app can help you find the proper storage life for dry goods, canned foods, <br /> grains, and more.</li>
            </ul>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <Refrigerator color="#009966" style={{backgroundColor:'transparent'}}/> Fridge Organization Best Practices
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >

            <div className="accordion-body">
            <p className='subheading'>Organizing your fridge properly helps prevent cross-contamination and keeps everything fresh longer:</p>
            <ul className='bullets'>
            <li>Bottom shelf: Store raw meat, poultry, and seafood on the lowest shelf in a leak-proof <br /> container. This prevents juices from dripping onto other food. </li>
            <li>Middle shelves: Ideal for dairy products, eggs, and leftovers.</li>
            <li>Top shelf: Great for ready-to-eat items like drinks, pickles, and yogurt. </li>
            <li>Crisper drawers: Use one for fruits and one for vegetables to maintain optimal humidity levels.</li>
            </ul>
            <p className='subheading'>Always keep your fridge at 40°F or below to prevent bacteria growth and foodborne illness.</p>
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <Timer color="#009966" style={{backgroundColor:'transparent'}}/>The 2-Hour Rule & Handling Food Safety
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            <ul className='bullets'>
            <li>Perishable foods (like meat, eggs, and dairy) should not be left at room temperature for more <br />than 2 hours. </li>
            <li>If the temperature is above 90°F (32°C), the time limit drops to 1 hour.</li>
            <li>Refrigerate or freeze leftovers as soon as possible within that time frame. </li>
            <li>When reheating food, bring it to an internal temperature of 165°F (74°C).</li>
            </ul>
            </div>
          </div>
        </div>

        {/* Item 5 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <Zap color="#009966" style={{backgroundColor:'transparent'}}  />Power Outages & Emergencies
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            <p className='subheading'>After a Power Outage</p>
            <ul className='bullets'>
            <li>If your power is out for less than 4 hours and you keep your fridge closed, most food should <br />remain safe. </li>
            <li>If the fridge temperature exceeds 40°F for more than 2 hours, discard perishable items such <br />as meat, poultry, eggs, seafood, and leftovers.</li>
            <li>Frozen food that still contains ice crystals or is at 40°F or below can be refrozen safely. </li>
            <li>Use a food thermometer to check temperatures if you're unsure.</li>
            </ul>

            <p className='subheading'>After a Flood</p>
            <ul className='bullets'>
            <li>Throw away any food that came into direct contact with floodwater.</li>
            <li>Discard food in damaged or swollen cans, food containers with screw caps, snap lids, or <br />crimped caps that got wet.</li>
            <li>Canned food can be kept only if the cans are intact, not dented or rusted, and are properly <br />cleaned and sanitized. </li>
            <li>To sanitize canned food: remove labels, wash cans with soap and hot water, rinse, then boil <br />for 2 minutes or soak in bleach solution.</li>
            </ul>

            </div>
          </div>
        </div>

        {/* Item 6 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
             <Recycle color="#009966" style={{backgroundColor:'transparent'}}/> Smart Waste-Reduction Practices
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            <ul className='bullets'>
            <li>Plan ahead before grocery shopping. Only buy what you can realistically use.</li>
            <li>Label and date items when storing them so you know when to use them by.</li>
            <li>Use your freezer to extend the life of meat, bread, fruits, and cooked meals. </li>
            <li>Check your fridge and pantry regularly to avoid letting food go bad unnoticed.</li>
            <li>Use tools like the FoodKeeper App to make informed decisions about when to use or <br /> throw out food.</li>
            </ul>
          </div>
        </div>
      </div>

            
  </div>

        </div>
    )
}

export default Foodtips;