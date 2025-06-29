// Implementation with step functions
void mainImage(out vec4 fragColor, in vec2 fragCoord) {

    vec2 st = fragCoord / iResolution.xy;
    vec3 color = vec3(0.0);
    //float func = func(st.x, 3.0);
    
    float horizontal = step(1.0 - 0.1 * iResolution.y / iResolution.x, st.x) - step(0.1 * iResolution.y / iResolution.x, st.x);
    float vertical = step(0.9, st.y) - step(0.1, st.y);

    float ver = horizontal * vertical;
    if (ver < 0.0) ver * -1.0;
    
    // The multiplication of left*bottom will be similar to the logical AND.
    color = vec3(ver);    
    fragColor = vec4(color, 1.0);
}


// Implementation with floor function 
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 res = iResolution.xy;

    // Compute the integer border size using floor
    float borderSize = floor(0.1 * min(res.x, res.y));
    vec3 color = vec3(1.0);
    // Draw black border if within borderSize from any edge
    if (fragCoord.x < borderSize || fragCoord.x > res.x - borderSize ||
        fragCoord.y < borderSize || fragCoord.y > res.y - borderSize) {
        color = vec3(0.0); // Black border
    }
    
    fragColor = vec4(color, 1.0);
}