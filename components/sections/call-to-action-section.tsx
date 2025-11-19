import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Start Building</h2>
                    <p className="mt-4">We&apos;re here to help you build your next project. Let&apos;s talk about your idea.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="#contact">
                                <span>Book Your Strategy Call</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="#contact">
                                <span>Let&apos;s Talk</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
