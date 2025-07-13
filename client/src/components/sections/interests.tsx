import { Book, Gamepad, Film } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const interests = {
  reading: [
    { title: "Clean Architecture", author: "Robert Martin" },
    { title: "Atomic Habits", author: "James Clear" },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman" }
  ],
  gaming: [
    { title: "Counter-Strike 2", subtitle: "Rank: Global Elite" },
    { title: "Codeforces", subtitle: "Rating: 1650+" },
    { title: "LeetCode", subtitle: "500+ problems solved" }
  ],
  movies: [
    { title: "The Matrix Series", subtitle: "Sci-Fi Classic" },
    { title: "Inception", subtitle: "Mind-bending thriller" },
    { title: "Silicon Valley", subtitle: "Tech Comedy Series" }
  ]
};

export function Interests() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Beyond the Code</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When I'm not coding or teaching, you'll find me exploring these interests that fuel my creativity and keep me balanced.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Reading Shelf */}
          <Card>
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Book className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Currently Reading</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {interests.reading.map((book, index) => (
                  <div key={index} className="flex items-center p-3 bg-muted rounded-lg">
                    <div className="w-10 h-15 bg-gradient-to-br from-blue-500 to-purple-600 rounded mr-3"></div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{book.title}</div>
                      <div className="text-muted-foreground text-xs">by {book.author}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Gaming */}
          <Card>
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <Gamepad className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Gaming Corner</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {interests.gaming.map((game, index) => (
                  <div key={index} className="flex items-center p-3 bg-muted rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded mr-3"></div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{game.title}</div>
                      <div className="text-muted-foreground text-xs">{game.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Movies & Entertainment */}
          <Card>
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <Film className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Watchlist</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {interests.movies.map((movie, index) => (
                  <div key={index} className="flex items-center p-3 bg-muted rounded-lg">
                    <div className="w-10 h-15 bg-gradient-to-br from-purple-500 to-pink-600 rounded mr-3"></div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{movie.title}</div>
                      <div className="text-muted-foreground text-xs">{movie.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
