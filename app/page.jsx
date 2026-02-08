import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProposeDay() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="rounded-3xl shadow-xl bg-white/90 backdrop-blur">
          <CardContent className="p-6 text-center space-y-6">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex justify-center"
            >
              <Heart className="text-rose-500 w-16 h-16 fill-rose-500" />
            </motion.div>

            <h1 className="text-3xl font-bold text-rose-600">
              Happy Propose Day 💖
            </h1>

            <p className="text-gray-700 text-lg">
              Hey <span className="font-semibold text-rose-500">My Love</span>,
              <br />
              every moment with you feels like my favorite reel on repeat ✨
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-3"
            >
              <p className="text-gray-600">
                You make my bad days softer,
                <br />
                my good days brighter,
                <br />
                and my life a whole lot cuter 🥺💕
              </p>

              <p className="text-xl font-semibold text-rose-600">
                Will you be mine forever?
              </p>
            </motion.div>

            <div className="flex gap-4 justify-center pt-4">
              <Button
                className="rounded-full px-6 bg-rose-500 hover:bg-rose-600"
                onClick={() => alert("She said YES!!! 💍💖")}
              >
                Yes 😍
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 border-rose-400 text-rose-500"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)`;
                }}
              >
                No 🙈
              </Button>
            </div>

            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="flex justify-center pt-2"
            >
              <Sparkles className="text-yellow-400 w-8 h-8" />
            </motion.div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-rose-700 mt-4">
          Made with 💗 just for you
        </p>
      </motion.div>
    </div>
  );
}
