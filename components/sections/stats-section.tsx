
export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-semibold lg:text-5xl">Owls in numbers</h2>
                    <p>A growing studio building reliable products, automation systems, and custom apps for businesses that need real results.</p>
                </div>

                <div className="grid gap-0.5 *:text-center md:grid-cols-3">
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">20+</div>
                        <p>Projects Delivered</p>
                        <p className="text-muted-foreground px-2">Custom apps, e-commerce builds, automations, and CRM systems</p>
                    </div>
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">95%</div>
                        <p>Client Retention</p>
                        <p className="text-muted-foreground px-2">People come back because the work is clean, fast, and exact</p>
                    </div>
                    <div className="rounded-(--radius) space-y-4 border py-12">
                        <div className="text-5xl font-bold">10+</div>
                        <p>Industries Served</p>
                        <p className="text-muted-foreground px-2">E-commerce, SaaS, logistics, healthcare, education, and more</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
