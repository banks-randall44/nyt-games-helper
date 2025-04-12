import Link from 'next/link'

export default function Page() {
    return (
        <div>
            <h1>New York Times Daily Games Helper</h1>
            <h2>By Randall Banks</h2>
            <div>
                <Link href='/spelling-bee'>Spelling Bee</Link>
            </div>
        </div>
    )
}
