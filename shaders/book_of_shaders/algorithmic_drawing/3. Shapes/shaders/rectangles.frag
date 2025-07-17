float rectangle(vec2 st, float x1, float x2, float y1, float y2) {
    if (st.x > x1 && st.x < x2 && st.y > y1 && st.y < y2) return 1.0;
    return 0.0;
}


void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 res = iResolution.xy;
    vec2 st = fragCoord / iResolution.xy;
    vec3 color = vec3(0.0);
    float ratio = iResolution.y / iResolution.x;
    
    // Compute the integer border size using floor
    float ress = rectangle(st, 0.1 * ratio, 1.0 - 0.8 * ratio, 0.1, 0.3);
    float sess = rectangle(st, 0.3 * ratio, 1.0 - 0.6 * ratio, 0.4, 0.6);
    float mess = rectangle(st, 0.5 * ratio, 1.0 - 0.4 * ratio, 0.7, 0.9);

    
    color = vec3(max(ress, max(sess,  mess)));
    
    fragColor = vec4(color, 1.0);
}