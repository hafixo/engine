
    outPosition = (outPosition - boundsCenter) / boundsSize + vec3(0.5); // TODO: mad
    outPosition = floor(outPosition * 65535.0) / 65535.0;

    outVelocity = (outVelocity / maxVel) + vec3(0.5); // TODO: mul
    outVelocity = floor(outVelocity * 255.0) / 255.0;


   tex = vec4(outPosition, (outRotation + 1000.0) * visMode) * outMask0 +
          vec4(outVelocity, life) * outMask1;

    gl_FragColor = tex;
}

//RG=X, BA=Y
//RG=Z, BA=A
//RGB=V, A=visMode
//RGBA=life

