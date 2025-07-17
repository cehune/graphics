float box(vec2 st, float x1, float x2, float y1, float y2) {
    if (st.x > x1 && st.x < x2 && st.y > y1 && st.y < y2) return 1.0;
    return 0.0;
}

float cross_a(vec2 st, float arm_length, float thickness) {
    float vert = box(st, -thickness, thickness, -arm_length, arm_length);
    float hori = box(st, -arm_length, arm_length, -thickness, thickness);
    return (vert + hori);  // Use + to union vertical and horizontal arms
}

mat2 rotation(float angle) {
    return mat2(cos(angle), -sin(angle),
        sin(angle), cos(angle));
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 st = fragCoord / iResolution.xy;
    st = st * 2.0 - 1.0;  // Normalize to [-1,1] so center = (0,0)

    vec2 pos = vec2(0.0, 0.0);
    pos += vec2(cos(iTime), sin(iTime)) * 0.5;

    float shape = cross_a(rotation(iTime)*(st - pos), 0.2, 0.05);  // Adjust lengths for [-1,1] space
    
    vec3 color = vec3(shape);

    fragColor = vec4(color, 1.0);
}
