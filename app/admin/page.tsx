import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">담당자 대시보드</h1>
      <p className="text-gray-600 mb-8">매칭 현황을 상태별로 확인하고 관리합니다.</p>

      {/* 요약 카드 */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="border-2 text-center">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-gray-500 font-medium">미매칭</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-red-600">—</p>
          </CardContent>
        </Card>
        <Card className="border-2 text-center">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-gray-500 font-medium">매칭 대기</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-yellow-600">—</p>
          </CardContent>
        </Card>
        <Card className="border-2 text-center">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-gray-500 font-medium">배정 완료</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-600">—</p>
          </CardContent>
        </Card>
      </div>

      {/* 상태별 탭 */}
      <Tabs defaultValue="unmatched">
        <TabsList className="h-12 text-base mb-6">
          <TabsTrigger value="unmatched" className="text-base px-6 h-10">
            미매칭
          </TabsTrigger>
          <TabsTrigger value="pending" className="text-base px-6 h-10">
            매칭 대기
          </TabsTrigger>
          <TabsTrigger value="assigned" className="text-base px-6 h-10">
            배정 완료
          </TabsTrigger>
        </TabsList>

        {/* 미매칭 탭 */}
        <TabsContent value="unmatched">
          <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 py-16 text-center">
            <p className="text-2xl text-gray-400 mb-2">🔍</p>
            <p className="text-xl text-gray-500 font-medium">미매칭 시니어가 없습니다.</p>
            <p className="text-base text-gray-400 mt-1">데이터는 다음 블록에서 연결됩니다.</p>
          </div>
          {/* 행 레이아웃 예시 (뼈대) */}
          <div className="mt-4 opacity-40 pointer-events-none select-none flex flex-col gap-3">
            <div className="flex items-center justify-between rounded-lg border px-5 py-4">
              <div>
                <p className="font-semibold text-lg">홍길동 (예시)</p>
                <p className="text-base text-gray-500">서울 강남구 · 경비 · 경력 10년</p>
              </div>
              <Badge variant="destructive" className="text-sm px-3 py-1">미매칭</Badge>
            </div>
          </div>
        </TabsContent>

        {/* 매칭 대기 탭 */}
        <TabsContent value="pending">
          <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 py-16 text-center">
            <p className="text-2xl text-gray-400 mb-2">⏳</p>
            <p className="text-xl text-gray-500 font-medium">매칭 대기 건이 없습니다.</p>
            <p className="text-base text-gray-400 mt-1">데이터는 다음 블록에서 연결됩니다.</p>
          </div>
          <div className="mt-4 opacity-40 pointer-events-none select-none flex flex-col gap-3">
            <div className="flex items-center justify-between rounded-lg border px-5 py-4">
              <div>
                <p className="font-semibold text-lg">김영희 (예시)</p>
                <p className="text-base text-gray-500">서울 마포구 · 주방보조 · 경력 5년</p>
              </div>
              <Badge className="bg-yellow-500 text-sm px-3 py-1">대기 중</Badge>
            </div>
          </div>
        </TabsContent>

        {/* 배정 완료 탭 */}
        <TabsContent value="assigned">
          <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 py-16 text-center">
            <p className="text-2xl text-gray-400 mb-2">✅</p>
            <p className="text-xl text-gray-500 font-medium">배정 완료 건이 없습니다.</p>
            <p className="text-base text-gray-400 mt-1">데이터는 다음 블록에서 연결됩니다.</p>
          </div>
          <div className="mt-4 opacity-40 pointer-events-none select-none flex flex-col gap-3">
            <div className="flex items-center justify-between rounded-lg border px-5 py-4">
              <div>
                <p className="font-semibold text-lg">이철수 (예시)</p>
                <p className="text-base text-gray-500">서울 송파구 · 청소 · 경력 8년</p>
              </div>
              <Badge className="bg-green-600 text-sm px-3 py-1">배정 완료</Badge>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
