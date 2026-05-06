import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">시니어 일자리 매칭 플랫폼</h1>
        <p className="text-xl text-gray-600">
          경력과 희망 직종을 등록하면 딱 맞는 일자리를 자동으로 추천해 드립니다.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-xl">📝 프로필 등록</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-gray-600">이름, 지역, 희망 직종, 경력을 입력하세요.</p>
            <Link
              href="/register"
              className={cn(buttonVariants({ size: "lg" }), "text-lg py-6")}
            >
              등록하러 가기
            </Link>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-xl">✅ 추천 일자리</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-gray-600">나에게 맞는 일자리 추천 목록을 확인하세요.</p>
            <Link
              href="/recommendations"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "text-lg py-6")}
            >
              추천 목록 보기
            </Link>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-xl">🗂️ 담당자 대시보드</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-gray-600">매칭 현황을 한눈에 관리하세요.</p>
            <Link
              href="/admin"
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "text-lg py-6")}
            >
              대시보드 열기
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
