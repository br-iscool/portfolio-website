"use client";

import { CanvasHTMLAttributes, DetailedHTMLProps, useLayoutEffect, useRef } from "react";
import shader from "@/utils/shader";

import styles from "@/styles/Gradient.module.css";

declare global {
	let shaderWebBackground: any;
}

export default function Gradient(props: DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const shaderRef = useRef<HTMLScriptElement>(null);

	function shade() {
		shaderWebBackground.shade({
			canvas: canvasRef.current,
			shaders: {
				Image: {
					uniforms: {
						iTime: (gl: any, loc: any) => gl.uniform1f(loc, performance.now() / 1000),
						iResolution: (gl: any, loc: any, ctx: any) => gl.uniform2f(loc, ctx.width, ctx.height),
					},
				},
			},
		});
	}

	useLayoutEffect(shade, [canvasRef]);

	return (
		<>
			<script src="https://xemantic.github.io/shader-web-background/dist/shader-web-background.min.js" />
			<script ref={shaderRef} type="x-shader/x-fragment" id="Image" dangerouslySetInnerHTML={{ __html: shader }} />
			<canvas {...props} className={`${styles.canvas} ${styles.fallback}`} ref={canvasRef} />
		</>
	);
}
