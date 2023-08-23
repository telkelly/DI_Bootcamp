class Pagination:
    def __init__(self, items=None, pageSize=10):
        if items is None:
            items = []
        self.items = items
        self.page_size = int(pageSize)
        self.total_pages = max(1, (len(self.items) + self.page_size - 1) // self.page_size)
        self.current_page = 1

    def getVisibleItems(self):
        start_idx = (self.current_page - 1) * self.page_size
        end_idx = start_idx + self.page_size
        return self.items[start_idx:end_idx]

    def prevPage(self):
        self.current_page = max(self.current_page - 1, 1)
        return self

    def nextPage(self):
        self.current_page = min(self.current_page + 1, self.total_pages)
        return self

    def firstPage(self):
        self.current_page = 1
        return self

    def lastPage(self):
        self.current_page = self.total_pages
        return self

    def goToPage(self, pageNum):
        target_page = max(1, min(int(pageNum), self.total_pages))
        self.current_page = target_page
        return self

alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

print(p.getVisibleItems())

p.nextPage().nextPage()

print(p.getVisibleItems())

p.lastPage()

print(p.getVisibleItems())

p.goToPage(10)

print(p.getVisibleItems())
