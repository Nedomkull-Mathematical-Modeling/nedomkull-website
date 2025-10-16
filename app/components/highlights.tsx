import { Cpu, Share2, Cloud, Rocket } from "lucide-react";

export default function Highlights() {
    return (
        <section className=" py-16 px-6 text-center rounded-2xl">
            <div className="max-w-8xl mx-auto">
                <div className="grid gap-24 md:grid-cols-2 lg:grid-cols-4">
                    <div className="p-4">
                        <Cpu className="mx-auto w-10 h-10 mb-4 text-orange-500" />
                        <h3 className="font-bold text-xl mb-2">Model smarter. Move faster.</h3>
                        <p className="text-gray-600">
                            Your data is already talking — we teach it to think. We build AI-driven models
                            that connect data like neurons in a brain, revealing structure, pattern, and purpose.
                        </p>
                    </div>

                    <div className="p-4">
                        <Share2 className="mx-auto w-10 h-10 mb-4 text-orange-500" />
                        <h3 className="font-bold text-xl mb-2">From chaos to connected clarity.</h3>
                        <p className="text-gray-600">
                            Everything’s linked. Our graph intelligence tools uncover hidden relationships,
                            powering smarter decisions across research and industry.
                        </p>
                    </div>

                    <div className="p-4">
                        <Cloud className="mx-auto w-10 h-10 mb-4 text-orange-500" />
                        <h3 className="font-bold text-xl mb-2">Deployed in the cloud. Grounded in science.</h3>
                        <p className="text-gray-600">
                            From simulation to sensor, from edge device to dataset — our models scale, sync,
                            and serve insights in real time.
                        </p>
                    </div>

                    <div className="p-4">
                        <Rocket className="mx-auto w-10 h-10 mb-4 text-orange-500" />
                        <h3 className="font-bold text-xl mb-2">Predict. Optimize. Lead.</h3>
                        <p className="text-gray-600">
                            AI doesn’t replace intuition — it amplifies it. We build systems that let you
                            see further, move faster, and stay ahead.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
