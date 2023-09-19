export default function Home() {
  return (
    <main className="flex w-full h-screen text-sm items-center text-red-400">
      <div className="h-8 p-3 text-center flex items-center justify-center bg-primary">
        primary
      </div>
      <div className="h-8 p-3 text-center flex items-center justify-center bg-secondary">
        secondary
      </div>
      <div className="h-8 p-3 text-center flex items-center justify-center bg-accent">
        accent
      </div>
      <div className="h-8 p-3   text-center flex items-center justify-center bg-destructive">
        destructive
      </div>
      <div className="h-8 p-3  text-center flex items-center justify-center bg-background">
        background
      </div>
      <div className="h-8 p-3  text-center flex items-center justify-center bg-foreground">
        foreground
      </div>
      <div className="h-8 p-3  text-center flex items-center justify-center bg-muted">
        muted
      </div>
      <div className="h-8 p-3  text-center flex items-center justify-center bg-muted-foreground">
        muted-foreground
      </div>
      <div className="h-8 p-3  text-center flex items-center justify-center bg-border">
        border
      </div>
      <div className="h-8 p-3  text-center flex items-center justify-center bg-input">
        input
      </div>
      <div className="h-8 p-3  text-center flex items-center justify-center bg-ring">
        ring
      </div>
    </main>
  );
}
