import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">시니어 프로필 등록</h1>
      <p className="text-gray-600 mb-8">정보를 입력하시면 맞춤 일자리를 추천해 드립니다.</p>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl">기본 정보 입력</CardTitle>
          <CardDescription className="text-base">
            * 표시 항목은 필수 입력 사항입니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* 기능 구현은 다음 블록 */}
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-lg font-semibold">
                이름 *
              </label>
              <Input
                id="name"
                name="name"
                placeholder="홍길동"
                className="h-14 text-lg px-4"
                disabled
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="region" className="text-lg font-semibold">
                지역 *
              </label>
              <Input
                id="region"
                name="region"
                placeholder="예: 서울 강남구"
                className="h-14 text-lg px-4"
                disabled
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="desired_job" className="text-lg font-semibold">
                희망 직종 *
              </label>
              <Input
                id="desired_job"
                name="desired_job"
                placeholder="예: 경비, 청소, 주방보조"
                className="h-14 text-lg px-4"
                disabled
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="career_years" className="text-lg font-semibold">
                경력 (년) *
              </label>
              <Input
                id="career_years"
                name="career_years"
                type="number"
                placeholder="예: 10"
                className="h-14 text-lg px-4"
                disabled
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="h-16 text-xl font-bold mt-2"
              disabled
            >
              등록하기 (준비 중)
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
