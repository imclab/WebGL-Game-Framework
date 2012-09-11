(function(attachTo) {
    
    var noop = function() {};
    
    
    function GameObject() {
        
        // An object to hold all the renderable THREE objects (meshes, lights,
        // etc.)
        this.renderables = [];
        
        // Give this instance a default zIndex
        this.zIndex = 1;
        
        // Call the initialization function
		this.initialize.apply(this, arguments);
		
    }
    
    
    GameObject.prototype = {
        
        // The default, no-op tick function. Required by the Renderer. Override
        // with your own if necessary.
        tick: noop,
        
        // A default, no-op initialize function. Override it with your own
        // functionality.
        initialize: noop
        
    };
    
    
    // Make sure this constructor can be "sub-classed"
    GameObject.extend = attachTo.Inheritance.extend;
    
    
    // Add the GameObject constructor to the specified parent object.
    attachTo.GameObject = GameObject;
    
}(window));