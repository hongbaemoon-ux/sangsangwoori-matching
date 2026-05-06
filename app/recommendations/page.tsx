import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function RecommendationsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">추천 일자리 목록</h1>
      <p className="text-gray-600 mb-8">
        프로필 기반으로 자동 매칭된 일자리가 점수 순으로 표시됩니다.
      </p>

      {/* 실제 데이터는 다음 블록에서 연결 */}
      <div className="flex flex-col gap-4">
        {/* 빈 상태 안내 */}
        <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 py-16 text-center">
          <p className="text-2xl text-gray-400 mb-2">📭</p>
          <p className="text-xl text-gray-500 font-medium">추천 일자리가 없습니다.</p>
          <p className="text-base text-gray-400 mt-1">
            프로필을 등록하면 자동으로 매칭됩니다.
          </p>
        </div>

        {/* 카드 레이아웃 예시 (뼈대) */}
        <Card className="border-2 opacity-40 pointer-events-none select-none">
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle className="text-xl">일자리 제목 (예시)</CardTitle>
              <CardDescription className="text-base mt-1">
                지역: 서울 강남구 · 직종: 경비
              </CardDescription>
            </div>
            <Badge className="text-base px-3 py-1 shrink-0">점수: 95</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">필요 경력: 3년 이상</p>
          </CardContent>
        </Card>

        <Card className="border-2 opacity-40 pointer-events-none select-none">
          <CardHeader className="flex flex-row items-start justify-between gap-4">
            <div>
              <CardTitle className="text-xl">일자리 제목 (예시)</CardTitle>
              <CardDescription className="text-base mt-1">
                지역: 서울 마포구 · 직종: 주방보조
              </CardDescription>
            </div>
            <Badge variant="secondary" className="text-base px-3 py-1 shrink-0">
              점수: 80
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">필요 경력: 1년 이상</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
